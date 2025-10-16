# Guía de Optimización para Crawlers de IA

**Fecha**: 2025-10-15
**Versión**: 1.0
**Sitio**: SCRAM Consulting (https://www.scram2k.com)

---

## Índice

1. [Introducción](#introducción)
2. [Archivo llms.txt](#archivo-llmstxt)
3. [Schema.org Estructurado](#schemaorg-estructurado)
4. [Contenido Conversacional](#contenido-conversacional)
5. [FAQ Estratégico](#faq-estratégico)
6. [Mejores Prácticas por Página](#mejores-prácticas-por-página)
7. [Medición y Validación](#medición-y-validación)

---

## Introducción

Esta guía documenta las estrategias de optimización implementadas para mejorar la visibilidad y comprensión del sitio web de SCRAM Consulting por parte de crawlers de IA (ChatGPT, Claude, Perplexity, Google Gemini, etc.).

### Objetivos

- ✅ Mejorar la indexación por sistemas de IA
- ✅ Aumentar menciones en respuestas de chatbots
- ✅ Facilitar respuestas precisas sobre servicios
- ✅ Optimizar para búsqueda conversacional
- ✅ Generar leads desde plataformas de IA

### Estadísticas Clave

- **84%** de los especialistas en marketing usan IA para SEO
- **67%** de consumidores priorizan imágenes en resultados
- **80.3%** del tiempo de visualización es above-the-fold
- Los LLMs procesan mejor contenido con:
  - Estructura clara con H2/H3
  - Listas con viñetas
  - Respuestas concisas
  - Formato conversacional

---

## Archivo llms.txt

### ¿Qué es llms.txt?

El archivo `llms.txt` es un nuevo estándar (similar a `robots.txt` pero para IA) que presenta contenido clave en formato estructurado y limpio para Large Language Models.

### Ubicación

```
https://www.scram2k.com/llms.txt
```

### Estructura Actual

El archivo incluye:

1. **Información de la Empresa**
   - Nombre legal, fundación, experiencia
   - Contacto y ubicaciones
   - Descripción general

2. **Servicios Principales**
   - Seguridad Electrónica
   - Desarrollo de Software
   - Ciberseguridad
   - Infraestructura y Redes
   - Hardware Industrial
   - Soporte Técnico

3. **FAQs por Categoría**
   - Preguntas frecuentes con respuestas completas
   - Estructura conversacional
   - Precios orientativos
   - Tiempos de respuesta

4. **Datos Operativos**
   - Áreas de servicio
   - Clientes destacados
   - Certificaciones
   - Métodos de pago
   - Tiempos de respuesta

### Mejores Prácticas

✅ **Hacer:**
- Usar formato texto plano sin markdown complejo
- Estructurar con jerarquía clara (##, ###)
- Incluir precios orientativos con rangos
- Añadir tiempos de respuesta específicos
- Usar lenguaje conversacional
- Actualizar regularmente

❌ **Evitar:**
- HTML o JavaScript
- Caracteres especiales problemáticos
- Información desactualizada
- Respuestas vagas o genéricas
- Estructuras demasiado complejas

---

## Schema.org Estructurado

### Componente EnhancedSEO

Hemos creado un componente reutilizable que genera Schema.org optimizado:

```typescript
<EnhancedSEO
  pageType="service"
  title="Seguridad Electrónica Empresarial"
  description="Videovigilancia con IA, control de acceso..."
  url="https://www.scram2k.com/l-ads-seguridad-electronica"
  services={[...]}
  faqs={[...]}
  breadcrumbs={[...]}
  rating={{ value: 4.8, count: 127 }}
  certifications={["Cisco Partner", "Hikvision Authorized"]}
/>
```

### Tipos de Schema Implementados

1. **BreadcrumbList**
   - Mejora navegación y jerarquía
   - Ayuda a IA a entender estructura del sitio

2. **FAQPage**
   - Responde preguntas comunes directamente
   - Aparece en resultados enriquecidos de Google
   - LLMs pueden citar respuestas específicas

3. **Service**
   - Describe ofertas de servicios
   - Incluye precios, duración, características
   - Ratings y reviews agregadas

4. **LocalBusiness**
   - Información de contacto estructurada
   - Horarios, ubicaciones, teléfonos
   - Áreas de servicio geográficas

5. **Organization**
   - Datos corporativos
   - Certificaciones y premios
   - Redes sociales
   - Número de empleados

### Validación

Usar herramientas:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- Chrome DevTools > Application > Structured Data

---

## Contenido Conversacional

### Principios de Escritura

1. **Tono Conversacional**
   - Escribir como hablarías con un cliente
   - Usar "tú" o "usted" según el contexto
   - Evitar jerga técnica innecesaria

2. **Estructura de Preguntas**
   - Titular como pregunta: "¿Cuánto cuesta...?"
   - Responder directamente en primer párrafo
   - Expandir con detalles después

3. **Formato Escaneabile**
   ```markdown
   ## Pregunta Principal

   Respuesta directa en 1-2 líneas.

   ### Detalles Adicionales

   - Viñeta 1
   - Viñeta 2
   - Viñeta 3

   **Nota importante**: Información clave destacada.
   ```

### Ejemplo Optimizado

**❌ Antes:**
```
Nuestros servicios de seguridad incluyen múltiples soluciones tecnológicas.
```

**✅ Después:**
```
¿Qué incluye el sistema de seguridad?

Incluye 4 componentes principales:

1. **Cámaras 4K con IA** - Visión nocturna y detección inteligente
2. **Control Biométrico** - Acceso facial y vehicular
3. **Respaldo en la Nube** - Almacenamiento seguro
4. **App Móvil** - Monitoreo desde tu celular iOS/Android

Instalación profesional incluida con capacitación.
```

---

## FAQ Estratégico

### Componente FAQSchema

Uso del componente reutilizable:

```typescript
<FAQSchema
  faqs={[
    {
      question: "¿Cuánto cuesta un sistema de videovigilancia?",
      answer: "Sistema básico PyME (4-8 cámaras): Desde $25,000 MXN..."
    }
  ]}
  title="Preguntas Frecuentes"
  description="Respuestas rápidas a las dudas más comunes"
  showVisual={true}
/>
```

### Tipos de Preguntas a Incluir

1. **Precios y Costos**
   - Rangos de precios específicos
   - Qué incluye cada paquete
   - Formas de pago disponibles

2. **Tiempos y Plazos**
   - Tiempo de instalación/desarrollo
   - Tiempo de respuesta
   - Duración de garantías

3. **Funcionamiento Técnico**
   - Cómo funciona el sistema
   - Requisitos técnicos
   - Compatibilidades

4. **ROI y Beneficios**
   - Retorno de inversión
   - Casos de éxito
   - Métricas comprobadas

5. **Soporte y Garantías**
   - Tipos de soporte
   - Horarios de atención
   - Cobertura geográfica

### Estructura de Respuestas

```
Respuesta directa (1-2 líneas)

Detalles específicos:
- Punto 1 con números concretos
- Punto 2 con ejemplos
- Punto 3 con beneficios

Llamado a la acción suave.
```

---

## Mejores Prácticas por Página

### Homepage (/)

**Schema.org:**
- Organization (completo)
- WebSite con SearchAction
- BreadcrumbList básica

**Contenido:**
- Descripción clara de qué hace SCRAM
- Lista de servicios principales
- Casos de éxito destacados
- CTA múltiples y claros

**FAQ:**
- "¿Qué servicios ofrece SCRAM?"
- "¿En qué ciudades tienen presencia?"
- "¿Cuántos años de experiencia tienen?"

### Páginas de Servicios (/services/*)

**Schema.org:**
- Service (detallado)
- OfferCatalog con precios
- FAQPage
- BreadcrumbList
- AggregateRating

**Contenido:**
- Título con beneficio claro
- Lista de características principales
- Casos de uso específicos
- Proceso de trabajo paso a paso
- Clientes que usan este servicio

**FAQ:**
- Precios específicos del servicio
- Tiempo de implementación
- Requisitos previos
- ROI esperado
- Soporte incluido

### Landing Pages (/l-ads-*)

**Schema.org:**
- WebPage
- Service u Offer específico
- FAQPage (optimizado)
- LocalBusiness
- BreadcrumbList

**Contenido:**
- Hero con propuesta de valor clara
- Video o imagen destacada
- Beneficios medibles (números)
- Social proof (logos, testimonios)
- CTA prominente above-the-fold
- FAQ extenso

**FAQ:**
- Mínimo 5-8 preguntas
- Enfocadas en conversión
- Respuestas con precios
- Casos de éxito mencionados

### Página de Contacto (/contact)

**Schema.org:**
- ContactPage
- Organization con ContactPoints
- PostalAddress múltiples
- OpeningHoursSpecification

**Contenido:**
- Múltiples formas de contacto
- Horarios claros por ubicación
- Tiempo de respuesta esperado
- Mapa interactivo

---

## Medición y Validación

### KPIs para Optimización de IA

1. **Menciones en IA**
   - Monitorear menciones en ChatGPT, Claude, Perplexity
   - Usar herramientas como Letterdrop, Profound
   - Hacer pruebas manuales semanales

2. **Tráfico Referral**
   - Google Analytics: Tráfico de "direct" sin UTM
   - Búsquedas de marca en aumento
   - Tráfico de dominios de IA (chat.openai.com, etc.)

3. **Quality Score de Schema**
   - Validación sin errores en Google Rich Results
   - Coverage en Search Console
   - Clicks en resultados enriquecidos

4. **Engagement de FAQ**
   - Tiempo en página en secciones FAQ
   - Scroll depth hasta FAQ
   - Clicks en acordeones

### Herramientas Recomendadas

**Validación Técnica:**
- Google Rich Results Test
- Schema.org Validator
- Structured Data Testing Tool

**Monitoreo de IA:**
- Letterdrop (GEO tracking)
- Profound (AI visibility)
- BrightEdge (AI impact)

**Analytics:**
- Google Analytics 4
- Google Search Console
- Hotjar (heatmaps en FAQ)

### Frecuencia de Actualización

- **llms.txt**: Mensual (o al cambiar precios/servicios)
- **Schema.org**: Trimestral (ratings, certificaciones)
- **FAQ**: Cada 2 meses (nuevas preguntas)
- **Contenido**: Continuo (según cambios)

---

## Checklist de Implementación

### Por Página Nueva

- [ ] Agregar EnhancedSEO component
- [ ] Definir breadcrumbs apropiados
- [ ] Incluir FAQSchema con 5+ preguntas
- [ ] Escribir en tono conversacional
- [ ] Usar H2/H3 para estructura
- [ ] Incluir listas con viñetas
- [ ] Agregar números y datos concretos
- [ ] Incluir tiempo de respuesta
- [ ] Agregar precio orientativo si aplica
- [ ] Validar Schema.org

### Mantenimiento Mensual

- [ ] Revisar llms.txt actualizado
- [ ] Validar Schema.org sin errores
- [ ] Actualizar precios si cambiaron
- [ ] Revisar FAQ (agregar nuevas preguntas comunes)
- [ ] Monitorear menciones en IA
- [ ] Verificar métricas de engagement
- [ ] Pruebas manuales en ChatGPT/Claude

---

## Recursos Adicionales

- [llms.txt Spec](https://llmstxt.org/)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [AI SEO Best Practices 2025](https://searchengineland.com/ai-seo-guide)

---

**Última actualización**: 2025-10-15
**Responsable**: Equipo de Marketing Digital SCRAM
**Contacto**: marketing@scram2k.com
