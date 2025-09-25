import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true, // ⬅️ يخلي الـ build يكمل حتى مع أخطاء ESLint
  },
};

export default nextConfig;
