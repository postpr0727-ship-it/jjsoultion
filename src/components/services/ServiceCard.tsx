"use client";

import Image from "next/image";
import { Service } from "@/constants/services";
import ServiceIcon from "@/components/ui/ServiceIcon";

interface Props {
  service: Service;
  reversed?: boolean;
}

// 서비스별 로컬 이미지 매핑
const serviceImages: Record<string, string> = {
  marketing: "/images/service-web.jpg", // 이미 존재하는 이미지 활용
  design: "/images/service-design.jpg",
  web: "/images/service-web.jpg",
  brand: "/images/service-brand.jpg",
};

export default function ServiceCard({ service, reversed = false }: Props) {
  const imageUrl = serviceImages[service.id] || "/images/hero.jpg";

  return (
    <article
      id={service.id}
      className={`relative flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch gap-0 mb-24 last:mb-0 rounded-[2rem] overflow-hidden bg-white group min-h-[500px] shadow-2xl`}
    >
      {/* 1. 이미지 영역 (카드 전체 높이를 차지하도록) */}
      <div className="relative w-full lg:w-3/5 h-[350px] lg:h-auto overflow-hidden">
        <Image
          src={imageUrl}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* 이미지 위 그라데이션 오버레이 (텍스트 반대쪽) */}
        <div
          className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${reversed ? "from-transparent to-[#0a192f]/20" : "from-[#0a192f]/20 to-transparent"
            }`}
        />
      </div>

      {/* 2. 텍스트 콘텐츠 영역 */}
      <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center relative bg-white">
        {/* 상단 액센트 라인 (픽셀로그 옐로우) */}
        <div className="absolute top-0 inset-x-0 h-2 bg-[#FFD200]" />

        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#0a192f] flex items-center justify-center text-[#FFD200] shadow-lg group-hover:rotate-6 transition-transform">
            <ServiceIcon name={service.iconName} className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[#FFD200] text-[10px] font-black uppercase tracking-[0.3em] bg-[#0a192f] px-3 py-1 rounded-full w-fit">
              {service.subtitle}
            </p>
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-[#0a192f] mb-8 tracking-tighter leading-[1.1]">
          {service.title.split(' ').map((word, i) => (
            <span key={i}>
              {word === "전문" || word === "Solution" ? <span className="text-brand-green">{word}</span> : word}
              {i !== service.title.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h2>

        <p className="text-[#0a192f]/70 text-lg leading-relaxed mb-10 font-medium">
          {service.description}
        </p>

        <div className="space-y-4">
          <h3 className="text-[#0a192f] font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-4 h-[2px] bg-brand-green" />
            Core Capabilities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.details.map((detail) => (
              <li key={detail} className="flex items-center gap-3 text-[#0a192f]/80 text-sm font-bold bg-[#0a192f]/5 px-4 py-3 rounded-xl border border-transparent hover:border-brand-green/20 hover:bg-white transition-all">
                <span className="text-brand-green">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
