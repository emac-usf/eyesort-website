import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs/installation",
        destination: "/docs/start-here/install-upgrade",
        permanent: true,
      },
      {
        source: "/docs/first-run",
        destination: "/docs/start-here/first-run",
        permanent: true,
      },
      {
        source: "/docs/troubleshooting",
        destination: "/docs/help/troubleshooting",
        permanent: true,
      },
      {
        source: "/docs/faq",
        destination: "/docs/help/faq",
        permanent: true,
      },
      {
        source: "/docs/concepts/interest-areas",
        destination: "/docs/concepts/text-geometry",
        permanent: true,
      },
      {
        source: "/docs/concepts/pass-structure",
        destination: "/docs/concepts/passes-fixations",
        permanent: true,
      },
      {
        source: "/docs/concepts/fixation-types",
        destination: "/docs/concepts/passes-fixations",
        permanent: true,
      },
      {
        source: "/docs/workflows/batch-processing",
        destination: "/docs/guides/batch-workflow",
        permanent: true,
      },
      {
        source: "/tutorials/full-pipeline",
        destination: "/tutorials/quickstart",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
