/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                // /movie/ 으로 시작되는 모든 요청
                // SpringBoot 의 /movie/ 으로 리 라이트 됩니다.
                source: "/movie/:path*",
                destination: "http://localhost:8090/movie/:path*",
            },
            {
                // /master/ 으로 시작되는 모든 요청
                // SpringBoot 의 /master/ 으로 리 라이트 됩니다.
                source: "/master/:path*",
                destination: "http://localhost:8090/master/:path*",
            }
        ];
    }
};

export default nextConfig;
