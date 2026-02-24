import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/constants/company";

const serviceLinks = [
  "온라인 홍보마케팅",
  "웹/인쇄디자인",
  "웹사이트 및 웹프로그램 개발",
  "브랜드 디자인",
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 브랜드 컬럼 */}
          <div>
            <Image
              src="/images/logo.png"
              alt="준앤준솔루션"
              width={140}
              height={45}
              className="object-contain mb-4"
            />
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {COMPANY.tagline}
              <br />
              마케팅·디자인·개발·브랜드 통합 솔루션
            </p>

          </div>

          {/* 서비스 컬럼 */}
          <div>
            <h3 className="text-text-1 font-semibold text-sm uppercase tracking-wider mb-6">
              서비스
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-text-muted text-sm hover:text-brand-green transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 컬럼 */}
          <div>
            <h3 className="text-text-1 font-semibold text-sm uppercase tracking-wider mb-6">
              연락처
            </h3>
            <ul className="space-y-3 text-text-muted text-sm">
              <li>
                <a
                  href={COMPANY.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  {COMPANY.blogName} — {COMPANY.blogDesc} (톡톡 상담)
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-green transition-colors">
                  이메일: {COMPANY.email}
                </a>
              </li>
              <li>영업시간: {COMPANY.businessHours}</li>
            </ul>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="border-t border-border pt-8 space-y-3 text-text-muted text-xs">
          <p className="leading-relaxed">
            {COMPANY.name} &nbsp;|&nbsp; 대표 {COMPANY.ceo} &nbsp;|&nbsp; 사업자등록번호 {COMPANY.bizNo}
            <br className="sm:hidden" />
            <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
            {COMPANY.address}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-brand-green transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-brand-green transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
