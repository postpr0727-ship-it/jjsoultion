import { COMPANY } from "@/constants/company";

export interface NavItem {
  label: string;
  href: string;
  /** true면 새 탭에서 열리는 외부 링크 */
  external?: boolean;
  /** true면 강조 버튼 스타일 */
  highlight?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "서비스 소개", href: "/services" },
  { label: "포트폴리오", href: "https://pixel-log-ten.vercel.app/", external: true, highlight: true },
];
