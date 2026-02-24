import type { MetadataRoute } from "next";
import { COMPANY } from "@/constants/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // 모든 검색로봇 수집 허용
        userAgent: "*",
        allow: "/",
      },
    ],
    // 네이버 서치어드바이저 권장: sitemap.xml 위치 명시
    sitemap: `${COMPANY.siteUrl}/sitemap.xml`,
  };
}
