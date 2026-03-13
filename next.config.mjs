/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // ✅ Usar unoptimized: true para compatibilidad con imágenes externas en v0.dev
    unoptimized: true,

    // ✅ Remote patterns (por si en el futuro cambias a unoptimized: false)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.imgto.link',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig