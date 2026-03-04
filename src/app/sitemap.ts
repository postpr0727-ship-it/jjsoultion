import { MetadataRoute } from "next";
import { COMPANY } from "@/constants/company";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: COMPANY.siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${COMPANY.siteUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
