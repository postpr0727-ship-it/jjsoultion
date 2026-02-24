import { COMPANY } from "@/constants/company";

export interface NavItem {
  label: string;
  href: string;
  /** true면 새 탭에서 열리는 외부 링크 */
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "서비스 소개", href: "/services" },
  { label: "작업 사례", href: "/portfolio" },
];
