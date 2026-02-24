"use client";

import Image from "next/image";
import Link from "next/link";

export default function PixelogBanner() {
    return (
        <section className="px-6 py-10 md:py-16">
            <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl relative group">
                {/* 배경: 픽셀로그 옐로우 */}
                <div className="absolute inset-0 bg-[#FFD200] transition-transform duration-700 group-hover:scale-[1.02]" />

                {/* 장식용 패턴 (미세한 그리드) */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(#0a192f 1px, transparent 1px), linear-gradient(90deg, #0a192f 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                />

                <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* 텍스트 영역 */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#0a192f] text-white px-4 py-1.5 rounded-full mb-6 text-[10px] font-black uppercase tracking-widest shadow-lg">
                            <span className="w-1.5 h-1.5 bg-[#FFD200] rounded-full animate-pulse" />
                            Design Studio Label
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-[#0a192f] leading-[1.1] mb-6 tracking-tighter">
                            진정한 고퀄리티의 미학, <br className="hidden md:block" />
                            <span className="italic">Pixelog</span> 작업 사례를 확인하세요
                        </h2>

                        <p className="text-[#0a192f]/60 text-base md:text-lg font-bold max-w-xl mb-0">
                            준앤준솔루션의 디자인 레이블 &apos;픽셀로그&apos;는 <br className="md:hidden" />
                            디테일과 감각이 살아있는 최상의 결과물을 지향합니다.
                        </p>
                    </div>

                    {/* 비주얼 및 버튼 영역 */}
                    <div className="flex flex-col items-center gap-6 shrink-0">
                        <div className="relative w-48 md:w-64 h-24 mb-2 drop-shadow-xl hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/images/logo_2.png"
                                alt="Pixelog Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <Link
                            href="/portfolio"
                            className="bg-[#0a192f] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-[#1a2b4a] hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-3 group/btn"
                        >
                            포트폴리오 바로가기
                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* 장식용 픽셀 (우측 하단) */}
                <div className="absolute bottom-[-20px] right-[-20px] w-40 h-40 bg-[#0a192f]/5 rounded-sm rotate-12 blur-sm pointer-events-none" />
            </div>
        </section>
    );
}
