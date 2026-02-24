import Link from "next/link";
import { SERVICES } from "@/constants/services";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceIcon from "@/components/ui/ServiceIcon";

// 서비스별 포인트 컬러스키마 (그린/블루 기반 메쉬 그라데이션 컨셉)
const serviceStyles: Record<string, { text: string; iconBg: string; border: string; imageUrl: string }> = {
  marketing: {
    text: "text-brand-green",
    iconBg: "bg-brand-green-light/50 group-hover:bg-brand-green/10",
    border: "group-hover:border-brand-green/30",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  design: {
    text: "text-brand-blue",
    iconBg: "bg-brand-blue-light/50 group-hover:bg-brand-blue/10",
    border: "group-hover:border-brand-blue/30",
    imageUrl: "/images/service-design.jpg"
  },
  web: {
    text: "text-brand-green",
    iconBg: "bg-brand-green-light/50 group-hover:bg-brand-green/10",
    border: "group-hover:border-brand-green/30",
    imageUrl: "/images/service-web.jpg"
  },
  brand: {
    text: "text-brand-blue",
    iconBg: "bg-brand-blue-light/50 group-hover:bg-brand-blue/10",
    border: "group-hover:border-brand-blue/30",
    imageUrl: "/images/service-brand.jpg"
  },
};

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-surface/30 relative">
      {/* 장식용 배경 요소 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          label="Our Services"
          title="준앤준솔루션이 드리는"
          highlight="핵심 솔루션"
          subtitle="단순한 대행을 넘어 브랜드의 본질을 강화하고 매출 성장을 견인하는 차별화된 서비스를 제공합니다."
          align="center"
        />

        {/* 4카드 그리드 */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`card-premium group cursor-pointer border-transparent p-0 overflow-hidden ${serviceStyles[service.id].border}`}
            >
              {/* 섬네일 이미지 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={serviceStyles[service.id].imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-8">
                {/* 아이콘: 더 세련된 컨테이너 */}
                <div
                  className={`-mt-16 relative z-10 mb-8 w-16 h-16 rounded-2xl flex items-center justify-center
                              transition-all duration-500 shadow-xl group-hover:shadow-2xl
                              group-hover:-rotate-6 bg-white ${serviceStyles[service.id].iconBg}`}
                >
                  <ServiceIcon
                    name={service.iconName}
                    className={`w-8 h-8 ${serviceStyles[service.id].text} transition-transform group-hover:scale-110`}
                  />
                </div>

                {/* 타이틀 및 서브타이틀 */}
                <h3 className="text-text-1 font-bold text-xl mb-2 leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-5 opacity-80 ${serviceStyles[service.id].text}`}>
                  {service.subtitle}
                </p>

                {/* 설명 */}
                <p className="text-text-2 text-[15px] leading-relaxed line-clamp-3 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>

                {/* 링크: 더 역동적인 화살표 */}
                <Link
                  href={`/services#${service.id}`}
                  className={`text-sm font-bold inline-flex items-center gap-2
                           transition-all duration-300 ${serviceStyles[service.id].text}`}
                >
                  더 알아보기
                  <div className="w-8 h-[2px] bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
