/** @type {import('next').NextConfig} */
const nextConfig = {
  /* reactStrictMode: true, */
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['eyuajzwbnswumrcuzjrd.supabase.co'],
  },
};

module.exports = nextConfig;
