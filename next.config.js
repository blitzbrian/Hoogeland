const withPWA = require("next-pwa")({
    dest: "public",
    cacheStartUrl: false,
    dynamicStartUrl: false,
});

module.exports = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/login",
                has: [
                    {
                        type: "cookie",
                        key: "userId",
                    },
                    {
                        type: "cookie",
                        key: "idsrv",
                    },
                ],
                permanent: false,
                destination: "/",
            },
            {
                source: "/",
                missing: [
                    {
                        type: "cookie",
                        key: "userId",
                    },
                    {
                        type: "cookie",
                        key: "idsrv",
                    },
                ],
                permanent: false,
                destination: "/login",
            },
        ];
    },
});
