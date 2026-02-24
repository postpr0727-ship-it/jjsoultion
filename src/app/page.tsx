import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactCTA from "@/components/home/ContactCTA";
import PixelogBanner from "@/components/ui/PixelogBanner";

export const metadata: Metadata = {
  title: "준앤준솔루션 | 온라인마케팅·웹디자인·개발·브랜드",
  description:
    "마케팅, 디자인, 웹개발, 브랜드 디자인을 한 곳에서. 준앤준솔루션이 비즈니스 성장을 함께합니다.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <PixelogBanner />
      <ContactCTA />
    </>
  );
}
