"use client";

import React, { useState, useEffect, useRef } from 'react';
import { advancedAnalytics } from '@/lib/analytics-advanced';
import { trackContactFormSubmit, trackContactFormSuccess } from '@/lib/analytics';
import type { LeadData } from '@/lib/analytics-advanced';

interface TrackedFormProps {
  formId: string;
  serviceName?: string;
  onSubmit: (data: any) => Promise<{ success: boolean; error?: string }>;
  children: React.ReactNode;
  className?: string;
}

/**
 * Formulario con tracking avanzado:
 * - Track de campos rellenados
 * - Track de abandono
 * - Track de envío
 * - Lead scoring automático
 */
export const TrackedForm: React.FC<TrackedFormProps> = ({
  formId,
  serviceName,
  onSubmit,
  children,
  className,
}) => {
  const [fieldsFilled, setFieldsFilled] = useState<string[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const abandonmentTracked = useRef(false);

  // Track abandono al salir de la página
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (fieldsFilled.length > 0 && !abandonmentTracked.current) {
        advancedAnalytics.trackFormAbandonment(formId, fieldsFilled);
        abandonmentTracked.current = true;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [fieldsFilled, formId]);

  // Track campo cuando se rellena
  const handleFieldChange = (e: React.FocusEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    if (target.name && !fieldsFilled.includes(target.name)) {
      setFieldsFilled(prev => [...prev, target.name]);

      advancedAnalytics.trackJourneyStep('form_field_interaction', {
        formId,
        field: target.name,
        fieldsCount: fieldsFilled.length + 1,
      });
    }

    // Actualizar formData
    if (target.name) {
      setFormData(prev => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track inicio de envío
    trackContactFormSubmit(formId, serviceName);

    advancedAnalytics.trackJourneyStep('form_submit_attempt', {
      formId,
      fieldsCount: fieldsFilled.length,
      service: serviceName,
    });

    try {
      const formElement = e.currentTarget;
      const formDataObj = new FormData(formElement);
      const data = Object.fromEntries(formDataObj.entries());

      // Ejecutar el onSubmit proporcionado
      const result = await onSubmit(data);

      if (result.success) {
        // Preparar datos del lead
        const leadData: LeadData = {
          name: data.name?.toString(),
          email: data.email?.toString(),
          phone: data.phone?.toString() || data.tel?.toString() || data.telefono?.toString(),
          company: data.company?.toString() || data.empresa?.toString(),
          service: serviceName || data.service?.toString(),
          message: data.message?.toString() || data.mensaje?.toString(),
        };

        // Track el lead con scoring automático
        const enrichedLead = advancedAnalytics.trackLead(leadData);

        trackContactFormSuccess(formId, serviceName);

        console.log('✅ Lead tracked successfully:', enrichedLead);
      } else {
        // Track error
        advancedAnalytics.trackJourneyStep('form_submit_error', {
          formId,
          error: result.error,
        });
      }

      return result;
    } catch (error) {
      console.error('Error submitting form:', error);

      advancedAnalytics.trackJourneyStep('form_submit_error', {
        formId,
        error: String(error),
      });

      return { success: false, error: String(error) };
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      id={formId}
      className={className}
      onSubmit={handleSubmit}
      onFocusCapture={handleFieldChange}
    >
      {children}
    </form>
  );
};
