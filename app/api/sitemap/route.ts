// app/api/sitemap/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  // Basic placeholder until we generate dynamic sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://alaska-os456.vercel.app/</loc>
        <priority>1.0</priority>
      </url>
    </urlset>
  `.trim();

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
