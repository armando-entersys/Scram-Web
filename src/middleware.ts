import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Detectar si es el subdominio de seguridad electrónica
  const isSubdomain = hostname.startsWith('seguridad-electronica.');

  // Si acceden al subdominio, reescribir a la landing de ads
  if (isSubdomain && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/l-ads-seguridad-electronica';

    // Reescribir la URL internamente (el usuario no ve el cambio)
    const response = NextResponse.rewrite(url);

    // Marcar que es una request desde subdominio para tracking separado
    response.headers.set('x-is-subdomain', 'true');
    response.headers.set('x-subdomain-type', 'ads-landing');

    return response;
  }

  // Si acceden a cualquier otra ruta en el subdominio, redirigir al home del subdominio
  if (isSubdomain && pathname !== '/' && pathname !== '/l-ads-seguridad-electronica') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // Aplicar geo-targeting a la landing de seguridad electrónica
  if (pathname === '/l-ads-seguridad-electronica') {
    // Obtener información de geolocalización de Vercel/Cloudflare headers
    const country = request.geo?.country || request.headers.get('cf-ipcountry') || 'UNKNOWN';
    const region = request.geo?.region || request.headers.get('cf-region') || 'UNKNOWN';
    const city = request.geo?.city || request.headers.get('cf-city') || 'UNKNOWN';
    const latitude = request.geo?.latitude || request.headers.get('cf-latitude') || '';
    const longitude = request.geo?.longitude || request.headers.get('cf-longitude') || '';

    // Crear respuesta con headers personalizados
    const response = NextResponse.next();

    // Agregar headers de geo para usar en el componente
    response.headers.set('x-geo-country', country);
    response.headers.set('x-geo-region', region);
    response.headers.set('x-geo-city', city);
    response.headers.set('x-geo-latitude', latitude?.toString() || '');
    response.headers.set('x-geo-longitude', longitude?.toString() || '');

    // Detectar si el usuario está en la zona de servicio prioritaria
    const targetCities = [
      'cuautitlan izcalli',
      'cuautitlán izcalli',
      'huehuetoca',
      'atizapan',
      'atizapán',
      'tepotzotlan',
      'tepotzotlán',
      'coyotepec',
      'tultitlan',
      'tultitlán',
      'nicolás romero',
      'nicolas romero'
    ];

    const isInServiceArea = targetCities.some(targetCity =>
      city.toLowerCase().includes(targetCity) ||
      targetCity.includes(city.toLowerCase())
    );

    const isInMexico = country === 'MX' || country === 'Mexico';
    const isInEstadoMexico = region === 'MEX' || region === 'Estado de Mexico';

    // Agregar flags de targeting
    response.headers.set('x-geo-in-service-area', isInServiceArea ? 'true' : 'false');
    response.headers.set('x-geo-in-mexico', isInMexico ? 'true' : 'false');
    response.headers.set('x-geo-in-estado-mexico', isInEstadoMexico ? 'true' : 'false');

    // Marcar si viene desde subdominio para tracking separado
    if (isSubdomain) {
      response.headers.set('x-is-subdomain', 'true');
      response.headers.set('x-subdomain-type', 'ads-landing');
    }

    return response;
  }

  return NextResponse.next();
}

// Configurar para qué rutas se ejecuta el middleware
export const config = {
  matcher: [
    '/',
    '/l-ads-seguridad-electronica',
  ],
};
