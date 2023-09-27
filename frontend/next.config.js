/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        port: '',
        pathname: '/private/org-NtrMIJ4EBXxcyImkFwnUNjo4/user-kQTvaQIk5rQR9HrNBB9Q5CqZ/img-**.png',
      },
    ],
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  output: 'standalone',
};

module.exports = nextConfig;
