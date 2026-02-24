import { Service } from "@/constants/services";
import ServiceIcon from "@/components/ui/ServiceIcon";

interface Props {
  service: Service;
  reversed?: boolean;
}

// 서비스별 포인트 컬러 (그린/블루 교차)
const accentColor: Record<string, { text: string; bg: string; checkBg: string; checkBorder: string }> = {
  marketing: {
    text: "text-brand-green",
    bg: "bg-brand-green-light",
    checkBg: "rgba(46, 139, 60, 0.1)",
    checkBorder: "rgba(46, 139, 60, 0.3)",
  },
  design: {
    text: "text-brand-blue",
    bg: "bg-brand-blue-light",
    checkBg: "rgba(26, 92, 179, 0.1)",
    checkBorder: "rgba(26, 92, 179, 0.3)",
  },
  web: {
    text: "text-brand-green",
    bg: "bg-brand-green-light",
    checkBg: "rgba(46, 139, 60, 0.1)",
    checkBorder: "rgba(46, 139, 60, 0.3)",
  },
  brand: {
    text: "text-brand-blue",
    bg: "bg-brand-blue-light",
    checkBg: "rgba(26, 92, 179, 0.1)",
    checkBorder: "rgba(26, 92, 179, 0.3)",
  },
};

export default function ServiceCard({ service, reversed = false }: Props) {
  const colors = accentColor[service.id];

  return (
    <article
      id={service.id}
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 items-start py-20 border-b border-border last:border-0`}
    >
      {/* 아이콘 및 타이틀 블록 */}
      <div className="flex-shrink-0 w-full lg:w-64">
        <div
          className={`w-20 h-20 rounded-2xl ${colors.bg} flex items-center justify-center mb-6
                      shadow-sm`}
        >
          <ServiceIcon name={service.iconName} className={`w-10 h-10 ${colors.text}`} />
        </div>
        <p className={`text-xs font-medium tracking-widest uppercase mb-2 ${colors.text}`}>
          {service.subtitle}
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-1 mb-4">
          {service.title}
        </h2>
        <div className="green-divider" style={{ backgroundColor: colors.text === "text-brand-blue" ? "#1A5CB3" : "#2E8B3C" }} />
      </div>

      {/* 콘텐츠 블록 */}
      <div className="flex-1">
        <p className="text-text-2 leading-relaxed text-base mb-8">
          {service.description}
        </p>

        <h3 className="text-text-1 font-semibold text-sm uppercase tracking-wider mb-4">
          주요 서비스 항목
        </h3>
        <ul className="space-y-3">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3 text-text-2 text-sm">
              <span
                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: colors.checkBg,
                  border: `1px solid ${colors.checkBorder}`,
                }}
              >
                <svg
                  className={`w-3 h-3 ${colors.text}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
