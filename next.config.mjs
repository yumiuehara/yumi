/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProduction ? '/yumi' : '',
    output: "export",
    images: {
        unoptimized: true,
        path: "/",
    }
}

export default nextConfig
