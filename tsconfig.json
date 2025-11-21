// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure the App Router is enabled and compatible settings are used
  experimental: {
    serverActions: true,
  },
  // We are using remote placehold.co images for AI placeholders
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      // Add other image hosts here if needed later (e.g., Cloudinary)
    ],
  },
};

export default nextConfig;
