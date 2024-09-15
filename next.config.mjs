/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/128/**',
            },
            {
                protocol: 'https',
                hostname: 'ieltscity.vn',
                port: '',
                pathname: '/wp-content/**',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
                pathname: '/id/**',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com',
                port: '',
                pathname: '/system/**',
            },
        ],
    },
};

export default nextConfig;
