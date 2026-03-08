/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // This takes any browser request to /api/ and sends it to the ILB
        source: '/api/:path*',
        destination: 'http://internal-Internal-ALB-1920582386.eu-north-1.elb.amazonaws.com:3001/api/:path*',
      },
    ];
  },
};

export default nextConfig;


