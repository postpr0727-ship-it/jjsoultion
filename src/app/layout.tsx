import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Noto Sans KR — Pretendard 미지원 환경 폴백
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "준앤준솔루션 | 온라인마케팅·디자인·웹개발·브랜드",
    template: "%s | 준앤준솔루션",
  },
  description:
    "준앤준솔루션은 온라인 홍보마케팅, 웹/인쇄디자인, 웹사이트 개발, 브랜드 디자인을 전문으로 하는 통합 솔루션 기업입니다.",
  keywords: [
    "준앤준솔루션",
    "온라인마케팅",
    "웹디자인",
    "웹개발",
    "브랜드디자인",
    "SNS마케팅",
    "검색광고",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "준앤준솔루션",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        {/* Pretendard Variable — CSS @import와 달리 <link>는 순서 제약 없음 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
