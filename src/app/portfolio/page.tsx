"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/constants/company";
import { useEffect, useState } from "react";

/* 픽셀로그 고유 브랜드 컬러 - 비비드 옐로우 중심 */
const BRAND_COLORS = {
  yellow: "#FFD200",    // 픽셀로그 로고와 일치하는 더 깊은 옐로우로 조정
  navy: "#0a192f",      // 대비색 (네이비/블랙)
  green: "#2E8B3C",    // 포인트 그린
  bgPattern: "rgba(10, 25, 47, 0.04)", // 배경 그리드용
};

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 92 ? prev + Math.random() * 0.6 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#FFD200]" />;

  return (
    <div className="relative min-h-screen bg-[#FFD200] text-[#0a192f] flex flex-col items-center justify-center overflow-hidden font-sans">

      {/* 1. 비비드 배경 레이어 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 미세한 그리드 (다크 톤) */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(${BRAND_COLORS.bgPattern} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_COLORS.bgPattern} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* 장식용 픽셀 파티클 (다크 톤으로 부유 효과) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#0a192f]/5 rounded-sm"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-pixel-slow ${Math.random() * 15 + 10}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* 수직 스캔라인 효과 (다크/소프트) */}
        <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
          <div className="w-full h-full bg-[linear-gradient(0deg,transparent_0%,rgba(10,25,47,0.2)_50%,transparent_100%)] bg-[length:100%_8px] animate-[scanline-subtle_8s_linear_infinite]" />
        </div>
      </div>

      {/* 2. 메인 컨텐츠 컴포넌트 */}
      <main className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">

        {/* 상단 엠블럼: 옐로우 배경에 최적화된 다크 벳지 */}
        <div className="relative mb-12">
          <div className="bg-[#0a192f] text-white px-6 py-2 rounded-full flex items-center gap-3 shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-[#FEE500] animate-pulse" />
            <span className="text-[10px] uppercase font-black tracking-[0.4em]">
              Design Label: Pixellog
            </span>
          </div>
        </div>

        {/* 로고 섹션: 옐로우 배경에서 선명하도록 그림자 조정 */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-6 bg-[#0a192f]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <Image
            src="/images/logo_2.png"
            alt="픽셀로그"
            width={320}
            height={110}
            className="relative object-contain drop-shadow-[0_4px_10px_rgba(10,25,47,0.1)] hover:scale-105 transition-transform duration-500 ease-out"
            priority
          />
        </div>

        {/* 메인 타이틀 & 설명 (다크 테마 텍스트) */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95] text-[#0a192f]">
            Always One Step <br />
            <span className="italic opacity-80 decoration-[#2E8B3C] decoration-4 underline underline-offset-8">Ahead of Design</span>
          </h1>
          <p className="text-[#0a192f]/60 text-base md:text-xl max-w-lg mx-auto font-bold leading-relaxed">
            준앤준솔루션의 디자인 레이블 &apos;픽셀로그&apos;가 <br />
            진정한 픽셀의 미학을 담은 포트폴리오를 준비 중입니다.
          </p>
        </div>

        {/* 3. 인버티드 로딩 디자인 */}
        <div className="w-full max-w-md mb-20">
          <div className="flex justify-between items-end mb-4 px-1">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-black text-[#0a192f]/40 uppercase tracking-widest mb-1">
                Data_Processing
              </span>
              <span className="text-xs font-mono font-bold text-[#2E8B3C] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2E8B3C] rounded-full animate-ping" />
                OPTIMIZING_RESOURCES
              </span>
            </div>
            <span className="text-3xl font-mono font-black text-[#0a192f]">
              {progress.toFixed(1)}%
            </span>
          </div>

          <div className="relative h-2 bg-[#0a192f]/10 rounded-full overflow-hidden p-[2px]">
            <div
              className="h-full bg-[#0a192f] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-[#0a192f]/5 p-4 rounded-xl border border-[#0a192f]/5">
              <p className="text-[9px] text-[#0a192f]/30 uppercase tracking-[0.2em] mb-1 font-bold">Status</p>
              <p className="text-sm font-black text-[#0a192f]/70">Refining UI...</p>
            </div>
            <div className="bg-[#2E8B3C]/5 p-4 rounded-xl border border-[#2E8B3C]/10">
              <p className="text-[9px] text-[#2E8B3C]/50 uppercase tracking-[0.2em] mb-1 font-bold">Quality</p>
              <p className="text-sm font-black text-[#2E8B3C]/80">Lossless V4</p>
            </div>
          </div>
        </div>

        {/* 4. 액션 버튼 (다크 코어 디자인) */}
        <div className="mt-auto">
          <Link
            href="/"
            className="group relative flex items-center justify-center bg-[#0a192f] text-white px-16 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-[#FFD200]">←</span>
              메인으로 돌아가기
            </span>
            {/* 호버 시 내부 글로우 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </div>

      </main>

      {/* 스타일 오버라이드 및 추가 애니메이션 */}
      <style jsx global>{`
        @keyframes scanline-subtle {
          0% { transform: translateY(-30%); }
          100% { transform: translateY(30%); }
        }
        @keyframes float-pixel-slow {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translate(100px, -200px) rotate(180deg); opacity: 0; }
        }
        body {
          background-color: #FFD200;
        }
      `}</style>
    </div>
  );
}
