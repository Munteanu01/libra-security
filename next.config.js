const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com"], // Allow Unsplash images
    unoptimized: true,
  },
  // Enable static exports for hosting on any static hosting service
  output: "export",
  // Ensure all assets are properly copied to the output directory
  assetPrefix: "",
  // Explicitly include video files in the build
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    })

    return config
  },
}

module.exports = nextConfig
