import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '', // Deja vacío si no hay un puerto específico
        pathname: '/t/p/**', // Permite todos los paths
        // Configura el path para las imágenes de TMDB
      },
    ],
  }
};


export default nextConfig;
