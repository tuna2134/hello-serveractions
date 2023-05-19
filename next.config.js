const { isPropertyAccessChain } = require('typescript')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    }
}

if (process.env.CONTAINER_MODE === "true") {
    nextConfig.output = "standalone";
}

module.exports = nextConfig
