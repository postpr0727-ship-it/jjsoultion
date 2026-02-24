export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: "marketing" | "design" | "web" | "brand";
}

export const SERVICES: Service[] = [
  {
    id: "marketing",
    title: "온라인 홍보마케팅",
    subtitle: "Online Marketing",
    description:
      "블로그 마케팅, 검색광고(SA), SNS 마케팅을 통해 브랜드의 온라인 존재감을 높이고 실질적인 고객 유입을 창출합니다.",
    details: [
      "네이버·카카오 검색광고(SA) 운영 및 최적화",
      "인스타그램·페이스북·유튜브 SNS 마케팅",
      "네이버 블로그 콘텐츠 기획 및 발행",
      "광고 성과 분석 및 월별 보고서 제공",
      "키워드 리서치 및 타겟 전략 수립",
    ],
    iconName: "marketing",
  },
  {
    id: "design",
    title: "웹/인쇄디자인",
    subtitle: "Web & Print Design",
    description:
      "브랜드 정체성을 반영한 웹 UI/UX 디자인과 명함, 브로셔, 포스터 등 인쇄물 디자인을 전문적으로 제작합니다.",
    details: [
      "웹사이트 UI/UX 디자인 및 프로토타입",
      "반응형 모바일 디자인",
      "명함·레터헤드·봉투 디자인",
      "브로셔·카탈로그·포스터 제작",
      "배너·현수막·옥외광고물 디자인",
    ],
    iconName: "design",
  },
  {
    id: "web",
    title: "웹사이트 및 웹프로그램 개발",
    subtitle: "Web Development",
    description:
      "기업 홈페이지부터 맞춤형 웹 애플리케이션까지, 최신 기술 스택으로 성능과 보안을 모두 갖춘 웹 솔루션을 구축합니다.",
    details: [
      "기업 홈페이지 및 랜딩페이지 개발",
      "맞춤형 웹 애플리케이션 개발",
      "반응형·크로스브라우저 최적화",
      "유지보수 및 호스팅 관리",
    ],
    iconName: "web",
  },
  {
    id: "brand",
    title: "브랜드 디자인",
    subtitle: "Brand Design",
    description:
      "CI(Corporate Identity) 개발부터 브랜드 컨셉 디자인까지, 기업의 철학과 가치를 시각적으로 표현하는 일관된 브랜드 아이덴티티를 구축합니다.",
    details: [
      "로고 디자인 및 CI 시스템 개발",
      "브랜드 가이드라인 제작",
      "브랜드 컨셉 기획 및 스토리텔링",
      "패키지 디자인",
      "브랜드 리뉴얼 및 리브랜딩",
    ],
    iconName: "brand",
  },
];
