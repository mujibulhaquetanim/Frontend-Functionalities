/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // ✅ helps Netlify serve static files
  images: {
    unoptimized: true,   // ✅ disables optimization for Netlify static serving
  },
};

export default nextConfig;
