/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo.themesberg.com',
            },
        ],
    },
}

module.exports = nextConfig