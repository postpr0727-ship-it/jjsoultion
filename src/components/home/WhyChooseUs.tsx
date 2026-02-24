import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { COMPANY } from "@/constants/company";

const STRENGTHS = [
  {
    stat: "4년+",
    label: "업계 베테랑",
    desc: "100개 이상의 프로젝트 성공 노하우",
    color: "text-brand-green",
    bg: "bg-brand-green-light/30",
    border: "group-hover:border-brand-green/30",
  },
  {
    stat: "4 In 1",
    label: "올인원 케어",
    desc: "기획·디자인·개발·마케팅 통합 솔루션",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light/30",
    border: "group-hover:border-brand-blue/30",
  },
  {
    stat: "100%",
    label: "책임 책임제",
    desc: "대표가 직접 검수하는 최고 수준의 퀄리티",
    color: "text-brand-green",
    bg: "bg-brand-green-light/30",
    border: "group-hover:border-brand-green/30",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* 왼쪽 — 텍스트 콘텐츠 */}
          <div className="max-w-xl">
            <SectionTitle
              label="Why JJSolution"
              title="비즈니스 성공을 위한"
              highlight="최상의 선택"
              subtitle="준앤준솔루션은 단순한 기술 제공을 넘어 파트너사의 성장을 진심으로 고민합니다. 로컬 비즈니스부터 대형 프로젝트까지, 실질적인 매출로 이어지는 전략적 파트너가 되어 드립니다."
            />

            <div className="mt-10 flex flex-col gap-6">
              {[
                "정해진 예산 내 최고의 퍼포먼스를 약속합니다",
                "불필요한 작업은 권하지 않는 정직한 컨설팅",
                "트렌드를 앞서가는 감각적인 디자인과 기술력",
                "마케팅·디자인·개발·브랜드 네 분야의 체계적인 원스톱 솔루션",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-1 font-medium text-lg">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/services"
                className="btn-primary"
              >
                우리의 가치 더 알아보기
              </Link>
            </div>
          </div>

          {/* 오른쪽 — 강점 카드 레이아웃 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* 배경 그리드 장식 */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 -m-4 opacity-5 pointer-events-none">
              <div className="border-r border-b border-brand-green" />
              <div className="border-b border-brand-blue" />
              <div className="border-r border-brand-blue" />
              <div className="border-brand-green" />
            </div>

            {STRENGTHS.map((item, idx) => (
              <div
                key={item.stat}
                className={`card-premium group relative ${item.bg} border-transparent ${item.border}
                           ${idx === 0 ? "sm:row-span-2 flex flex-col justify-center" : ""}`}
              >
                <div className={`font-black text-5xl mb-3 tracking-tighter ${item.color} group-hover:scale-110 transition-transform origin-left duration-500`}>
                  {item.stat}
                </div>
                <div className="text-text-1 font-bold text-xl mb-3">
                  {item.label}
                </div>
                <div className="text-text-2 text-[15px] leading-relaxed opacity-80">
                  {item.desc}
                </div>

                {/* 호버 시 나타나는 미세한 배광 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
