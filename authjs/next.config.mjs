/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //domains is deprecated, use remotePatterns
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
};

export default nextConfig;
