import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/:locale(es|en)/draft-1",
                destination: "/:locale",
                permanent: true,
            },
            {
                source: "/:locale(es|en)/draft-1/:path*",
                destination: "/:locale/:path*",
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: "/:locale(es|en)/:path*",
                    destination: "/:locale/draft-1/:path*",
                },
            ],
            afterFiles: [],
            fallback: [],
        };
    },
};

export default withPayload(withNextIntl(nextConfig));