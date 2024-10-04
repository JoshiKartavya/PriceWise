/** @type {import('next').NextConfig} */
export default {
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ['mongoose'],
    },
    images: {
      domains: ['m.media-amazon.com'],
    },
  };
  