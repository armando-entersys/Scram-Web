"use client";

import { useEffect, useState } from 'react';

export interface GeoLocation {
  country: string;
  region: string;
  city: string;
  latitude: string;
  longitude: string;
  isInServiceArea: boolean;
  isInMexico: boolean;
  isInEstadoMexico: boolean;
}

export const useGeoLocation = (): GeoLocation | null => {
  const [geo, setGeo] = useState<GeoLocation | null>(null);

  useEffect(() => {
    // Intentar obtener la información de geo desde las cookies o localStorage
    const fetchGeoData = async () => {
      try {
        // Hacer una petición a la API para obtener los headers de geo
        const response = await fetch('/api/geo');
        if (response.ok) {
          const data = await response.json();
          setGeo(data);
          // Guardar en localStorage para futuras visitas
          localStorage.setItem('geo-data', JSON.stringify(data));
        } else {
          // Fallback: intentar obtener de localStorage
          const cached = localStorage.getItem('geo-data');
          if (cached) {
            setGeo(JSON.parse(cached));
          }
        }
      } catch (error) {
        console.error('Error fetching geo data:', error);
        // Fallback: intentar obtener de localStorage
        const cached = localStorage.getItem('geo-data');
        if (cached) {
          setGeo(JSON.parse(cached));
        }
      }
    };

    fetchGeoData();
  }, []);

  return geo;
};
