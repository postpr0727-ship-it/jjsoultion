import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/constants/company";


export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 백그라운드 이미지 및 오버레이 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="준앤준솔루션 비즈니스 미팅"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-brand-blue-light/40" />
      </div>

      {/* 애니메이션 배경 요소 (이미지 위에 레이어링하여 깊이감 추가) */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* 그린 블록 */}
        <div
          className="floating-blob w-[500px] h-[500px] bg-brand-green/10 -top-20 -left-20 animate-[float_15s_infinite_ease-in-out]"
          aria-hidden="true"
        />
        {/* 블루 블록 */}
        <div
          className="floating-blob w-[600px] h-[600px] bg-brand-blue/10 top-1/2 -right-20 animate-[float-delayed_20s_infinite_ease-in-out]"
          aria-hidden="true"
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* 배지: 글래스모피즘 적용 */}
        <div
          className="inline-flex items-center gap-2 glass-card
                        rounded-full px-5 py-2 mb-10 text-brand-green text-sm
                        font-semibold tracking-tight shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          신뢰와 결과로 증명하는 디지털 파트너
        </div>

        {/* 메인 헤딩: 그라데이션 및 타이포그래피 강화 */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-text-1 leading-[1.1] mb-8 tracking-tighter">
          비즈니스 성장을
          <br />
          <span className="text-gradient-green">한 곳에서</span> 완성하세요
        </h1>

        {/* 서브 헤딩: 가독성 보강 */}
        <p className="text-text-2 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-14 font-medium opacity-90">
          {COMPANY.subTagline}
          <br />
          <span className="text-text-muted mt-2 block font-normal text-base md:text-lg">
            마케팅 · 디자인 · 개발 · 브랜드 — 준앤준솔루션이 당신의 성공 궤도를 함께 그립니다
          </span>
        </p>

        {/* CTA 버튼: 프리미엄 스타일 */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href={COMPANY.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center group"
          >
            톡톡 상담하기
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <Link
            href="/services"
            className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:bg-brand-blue-dark active:scale-95 flex items-center justify-center"
          >
            전체 서비스 보기
          </Link>
        </div>

        {/* 스크롤 인디케이터: 고급스러운 페이드 인-아웃 */}
        <div className="absolute top-[85vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-text-muted/60 text-xs font-semibold tracking-widest uppercase">
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-green to-transparent" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
