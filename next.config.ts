/** @type {import('next').Config} */
const nextConfig = {
 

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.smartwork.3i.com.vn',
        pathname: '/uploads/images/**', 
      },
    
    ],
  },
};

module.exports = nextConfig;