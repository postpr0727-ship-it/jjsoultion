import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceList from "@/components/services/ServiceList";
import ContactCTA from "@/components/home/ContactCTA";
import PixelogBanner from "@/components/ui/PixelogBanner";

export const metadata: Metadata = {
  title: "서비스 소개",
  description:
    "준앤준솔루션의 4가지 핵심 서비스: 온라인 홍보마케팅, 웹/인쇄디자인, 웹사이트 개발, 브랜드 디자인",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceList />
      <PixelogBanner />
      <ContactCTA />
    </>
  );
}
