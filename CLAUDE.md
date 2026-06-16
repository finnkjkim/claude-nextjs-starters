# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처

### 3-레이아웃 시스템 (Route Groups)

Next.js App Router의 Route Groups를 사용해 레이아웃을 분리한다:

| 그룹 | 경로 | 레이아웃 구성 |
|------|------|-------------|
| `(marketing)` | `/`, `/about` | Header + Footer |
| `(auth)` | `/login`, `/signup` | 전체 화면 (레이아웃 없음) |
| `(dashboard)` | `/dashboard/*`, `/settings` | AppSidebar + SidebarInset + Breadcrumb |

루트 `layout.tsx`에 ThemeProvider, TooltipProvider, Toaster가 전역 설정되어 있어 모든 레이아웃에 적용된다.

### 네비게이션 데이터 중앙화

모든 메뉴 링크는 `src/lib/constants.ts`에서 관리된다:
- `NAV_LINKS` — Header/MobileNav에서 사용 (마케팅 페이지용)
- `SIDEBAR_LINKS` — AppSidebar에서 사용 (대시보드용)

**새 메뉴를 추가할 때**: constants.ts에 링크를 추가한 뒤 반드시 해당 경로의 `page.tsx`를 생성해야 한다. 파일이 없으면 404 발생.

### 컴포넌트 구조

- `src/components/ui/` — shadcn/ui 컴포넌트 (직접 수정 최소화)
- `src/components/layout/` — Header, Footer, AppSidebar, MobileNav
- `src/components/sections/` — 마케팅 페이지 섹션 컴포넌트
- `src/components/forms/` — react-hook-form + zod 기반 폼 컴포넌트
- `src/components/dashboard/` — StatsCard, RecentActivity 등 대시보드 전용 컴포넌트

### 경로 별칭

`@/` → `src/` (tsconfig.json paths 설정)

### 폼 패턴

모든 폼은 `react-hook-form` + `zod`를 사용한다. `src/components/forms/login-form.tsx`를 참고해 동일한 패턴을 따른다.

### shadcn/ui 설정

- 스타일: `radix-nova`, 기본 색상: `neutral`
- CSS 변수 기반 테마 (`src/app/globals.css`)
- 아이콘: `lucide-react`
