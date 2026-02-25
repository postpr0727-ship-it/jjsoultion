import { COMPANY } from "@/constants/company";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-brand-green to-brand-blue-dark py-12 md:py-24 px-6 md:px-16 text-center text-white shadow-2xl">
          {/* 장식용 애니메이션 배경 */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-[pulse-glow_8s_infinite]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl animate-[pulse-glow_12s_infinite_delayed]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/80 text-sm font-bold tracking-[0.3em] uppercase mb-6">
              Contact Us
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-[1.15] tracking-tighter">
              프로젝트를 현실로 <br className="hidden sm:block" /> 만들 준비가 되셨나요?
            </h2>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto font-medium">
              준앤준솔루션의 온라인 디자인 레이블인{" "}
              <strong className="text-white">&apos;{COMPANY.blogName}&apos;</strong> 네이버 톡톡으로{" "}
              <br className="hidden md:block" />
              편하게 상담하시거나 이메일로 문의해 주시면 빠르게 답변드리겠습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <a
                href={COMPANY.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-green px-8 py-4 rounded-xl font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-center"
              >
                톡톡 상담하기
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all duration-300 text-center break-all sm:break-normal"
              >
                이메일 문의: {COMPANY.email}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
