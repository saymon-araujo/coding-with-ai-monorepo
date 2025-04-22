import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  webpack: (cfg) => {
    cfg.resolve.alias["react-native"] = "react-native-web"
    return cfg
  },
}

export default nextConfig
