import { Zap, Users, Target, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  { name: "김민준", role: "리드 개발자", description: "Next.js와 TypeScript 전문가" },
  { name: "이서연", role: "UI/UX 디자이너", description: "사용자 경험 최적화 담당" },
  { name: "박지훈", role: "백엔드 개발자", description: "API 및 데이터베이스 설계" },
]

const values = [
  {
    icon: Zap,
    title: "빠른 개발",
    description: "검증된 스타터킷으로 프로젝트 초기 설정 시간을 최소화하고 핵심 개발에 집중하세요.",
  },
  {
    icon: Target,
    title: "최신 기술",
    description: "Next.js 16, React 19, Tailwind CSS v4 등 최신 기술 스택으로 구성되었습니다.",
  },
  {
    icon: Users,
    title: "팀 협업",
    description: "TypeScript와 일관된 코드 구조로 팀 전체의 생산성을 높입니다.",
  },
  {
    icon: Heart,
    title: "개발자 경험",
    description: "shadcn/ui, react-hook-form, zod 등 개발자가 좋아하는 라이브러리를 기본 탑재했습니다.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* 히어로 섹션 */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Next Starter 소개
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Next.js 기반 프로젝트를 빠르게 시작할 수 있도록 설계된 모던 스타터킷입니다.
          설정에 시간을 낭비하지 말고, 바로 개발을 시작하세요.
        </p>
      </section>

      {/* 핵심 가치 */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">핵심 가치</h2>
          <p className="text-muted-foreground">Next Starter가 추구하는 개발 철학입니다.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title}>
              <CardContent className="pt-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">기술 스택</h2>
          <p className="text-muted-foreground">검증된 최신 기술로 구성되었습니다.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Next.js 16", desc: "App Router, Server Components" },
            { name: "React 19", desc: "최신 React 기능 지원" },
            { name: "TypeScript", desc: "Strict 모드 타입 안전성" },
            { name: "Tailwind CSS v4", desc: "유틸리티 퍼스트 스타일링" },
            { name: "shadcn/ui", desc: "재사용 가능한 컴포넌트" },
            { name: "next-themes", desc: "다크/라이트 모드 지원" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <div>
                <p className="font-medium">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">팀 소개</h2>
          <p className="text-muted-foreground">Next Starter를 만들어가는 사람들입니다.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name}>
              <CardContent className="pt-6 text-center space-y-2">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted text-2xl font-bold">
                  {member.name[0]}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
