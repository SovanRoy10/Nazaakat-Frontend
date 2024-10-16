/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "iili.io",
      "images.pexels.com",
      "m.media-amazon.com"
    ],
  },
  
};

export default nextConfig;
