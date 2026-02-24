"use client";

import { useEffect, useState } from "react";

export default function ServiceHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="pt-40 pb-24 bg-[#0a192f]" />;

  return (
    <section className="relative pt-40 pb-24 px-6 md:px-8 overflow-hidden bg-[#0a192f]">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 미세한 디지털 그리드 */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* 브랜디드 글로우 (그린/블루) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-green/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-[150px] animate-[pulse-glow_15s_infinite]" />

        {/* 움직이는 스캔라인 */}
        <div className="absolute inset-0 opacity-[0.02] overflow-hidden">
          <div className="w-full h-full bg-[linear-gradient(0deg,transparent_0%,white_50%,transparent_100%)] bg-[length:100%_4px] animate-[scanline-subtle_12s_linear_infinite]" />
        </div>
      </div>

      {/* 실질적 콘텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#FFD200] text-[#0a192f] px-5 py-2 rounded-full mb-10 text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(255,210,0,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a192f] opacity-30"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0a192f]"></span>
          </span>
          Our Core Solutions
        </div>

        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-10 tracking-tighter">
          Beyond the <br />
          <span className="text-[#FFD200] italic underline decoration-[#2E8B3C] decoration-8 underline-offset-[12px]">Ordinary.</span>
        </h1>

        <div className="w-24 h-2 bg-[#FFD200] mx-auto mb-12 rounded-full" />

        <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold">
          준앤준솔루션은 단순한 작업을 넘어, <br className="hidden md:block" />
          비즈니스의 가치를 높이는 독보적인 통합 솔루션을 제공합니다.
        </p>
      </div>

      <style jsx>{`
        @keyframes scanline-subtle {
          0% { transform: translateY(-30%); }
          100% { transform: translateY(30%); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
