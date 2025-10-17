import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Leer los headers de geo que fueron establecidos por el middleware
  const country = request.headers.get('x-geo-country') || 'UNKNOWN';
  const region = request.headers.get('x-geo-region') || 'UNKNOWN';
  const city = request.headers.get('x-geo-city') || 'UNKNOWN';
  const latitude = request.headers.get('x-geo-latitude') || '';
  const longitude = request.headers.get('x-geo-longitude') || '';
  const isInServiceArea = request.headers.get('x-geo-in-service-area') === 'true';
  const isInMexico = request.headers.get('x-geo-in-mexico') === 'true';
  const isInEstadoMexico = request.headers.get('x-geo-in-estado-mexico') === 'true';

  const geoData = {
    country,
    region,
    city,
    latitude,
    longitude,
    isInServiceArea,
    isInMexico,
    isInEstadoMexico,
  };

  return NextResponse.json(geoData);
}
