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
            },
            {
                // /question/ 으로 시작되는 모든 요청
                // SpringBoot 의 /question/ 으로 리 라이트 됩니다.
                source: "/question/:path*",
                destination: "http://localhost:8090/question/:path*",
            },
            {
                // /report/ 으로 시작되는 모든 요청
                // SpringBoot 의 /report/ 으로 리 라이트 됩니다.
                source: "/report/:path*",
                destination: "http://localhost:8090/report/:path*",
            },
            {
                // /user/ 으로 시작되는 모든 요청
                // SpringBoot 의 /user/ 으로 리 라이트 됩니다.
                source: "/user/:path*",
                destination: "http://localhost:8090/user/:path*",
            },
            {
                // /main/ 으로 시작되는 모든 요청
                // SpringBoot 의 /main/ 으로 리 라이트 됩니다.
                source: "/main/:path*",
                destination: "http://localhost:8090/main/:path*",
            },
            {
                // /python/ 으로 시작되는 모든 요청
                // SpringBoot 의 /python/ 으로 리 라이트 됩니다.
                source: "/python/:path*",
                destination: "http://127.0.0.1:8000/:path*",
            },
            {
                // /clientCenter/ 으로 시작되는 모든 요청
                // SpringBoot 의 /clientCenter/ 으로 리 라이트 됩니다.
                source: "/clientCenter/:path*",
                destination: "http://localhost:8090/clientCenter/:path*",
            }
        ];
    }
};

nextConfig.transpilePackages = ['@mui/x-charts'];

export default nextConfig;
