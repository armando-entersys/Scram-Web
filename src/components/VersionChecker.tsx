"use client";

import { useEffect } from 'react';

export default function VersionChecker() {
  useEffect(() => {
    let currentVersion: string | null = null;

    const checkVersion = async () => {
      try {
        // Agregar timestamp para evitar caché
        const response = await fetch(`/version.json?t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });

        if (!response.ok) return;

        const data = await response.json();
        const newVersion = data.version;

        // Si es la primera vez, solo guardar la versión
        if (!currentVersion) {
          currentVersion = newVersion;
          localStorage.setItem('app_version', newVersion);
          return;
        }

        // Si hay una nueva versión, recargar
        if (currentVersion !== newVersion) {
          console.log(`Nueva versión detectada: ${currentVersion} -> ${newVersion}`);

          // Limpiar cachés
          if ('caches' in window) {
            caches.keys().then((names) => {
              names.forEach((name) => {
                caches.delete(name);
              });
            });
          }

          // Mostrar notificación antes de recargar
          const shouldReload = window.confirm(
            '¡Nueva versión disponible! La página se recargará automáticamente para aplicar las actualizaciones.'
          );

          if (shouldReload) {
            localStorage.setItem('app_version', newVersion);
            window.location.reload();
          }
        }
      } catch (error) {
        console.error('Error checking version:', error);
      }
    };

    // Verificar versión al cargar
    checkVersion();

    // Verificar cada 30 segundos
    const interval = setInterval(checkVersion, 30000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
