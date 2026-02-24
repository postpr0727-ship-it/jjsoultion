# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

준앤준솔루션 기업 홈페이지. Next.js 16 + Tailwind CSS v4 + TypeScript.

**사업 영역 4가지**: 온라인 홍보마케팅 / 웹·인쇄디자인 / 웹사이트·웹프로그램 개발 / 브랜드 디자인

## 개발 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

## 기술 스택

- **Next.js 16** (App Router, `src/` 디렉토리)
- **Tailwind CSS v4** — `tailwind.config.ts` 없음. 모든 테마는 `src/app/globals.css`의 `@theme` 블록에서 관리
- **Noto Sans KR / Noto Serif KR** — `next/font/google`으로 빌드 타임 셀프 호스팅

## 아키텍처

### 디렉토리 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (폰트, 메타데이터, Header/Footer)
│   ├── globals.css         # Tailwind v4 테마 (@theme 블록) + 공통 클래스
│   ├── page.tsx            # 홈 페이지 (/)
│   └── services/page.tsx   # 서비스 소개 페이지 (/services)
├── components/
│   ├── layout/             # Header, MobileMenu, Footer
│   ├── home/               # HeroSection, ServicesOverview, WhyChooseUs, ContactCTA
│   ├── services/           # ServiceHero, ServiceCard, ServiceList
│   └── ui/                 # Button, GoldDivider, SectionTitle, ServiceIcon
├── constants/
│   ├── company.ts          # 회사 정보 (이름, 연락처, 태그라인)
│   ├── services.ts         # 4가지 서비스 데이터 — 단일 소스, 홈/서비스 페이지 공유
│   └── navigation.ts       # 네비게이션 링크
└── lib/utils.ts            # clsx 헬퍼
```

### 핵심 패턴

- **서비스 데이터**: `src/constants/services.ts`가 단일 소스. `ServicesOverview`(홈 카드)와 `ServiceCard`(서비스 상세)가 함께 소비.
- **해시 앵커**: `ServiceCard`의 `<article id={service.id}>` → `/services#marketing` 등 직접 링크 가능.
- **ContactCTA**: 홈·서비스 두 페이지에서 재사용되는 하단 CTA 섹션.
- **Header 투명→불투명**: 스크롤 20px 초과 시 `bg-navy-950/95 backdrop-blur` 전환.

### Tailwind CSS v4 커스텀 토큰

`globals.css`의 `@theme` 블록에서 정의:

| 클래스 | 색상 |
|---|---|
| `bg-navy-950` | `#0A1628` (페이지 배경) |
| `bg-navy-900` | `#0D1F3C` (히어로) |
| `bg-navy-800` | `#112D52` (카드) |
| `text-gold-400` | `#D4AF37` (주요 액센트) |
| `bg-gold-300` | `#E8C547` (호버) |

공통 컴포넌트 클래스: `.card-navy`, `.section-padding`, `.gold-divider`, `.bg-hero-gradient`

### 로고

`public/images/logo.png` (1366×436px RGBA PNG)
- Header: `width=180 height=57`
- Footer: `width=140 height=45`
- RGBA 채널이므로 다크 배경에 직접 렌더링 가능, 흰 박스 불필요.
