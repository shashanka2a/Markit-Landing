import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      canvas: './src/empty-module.ts',
    },
  },
}

export default nextConfig