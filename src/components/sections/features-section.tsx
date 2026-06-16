import {
  Zap,
  Shield,
  Palette,
  Moon,
  Layout,
  Code2,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description:
      "최신 App Router, Server Components, Streaming 등 Next.js 최신 기능을 완벽하게 지원합니다.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description:
      "Strict 모드 TypeScript로 타입 안전성을 보장합니다. 자동완성과 오류 감지로 생산성이 높아집니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4 + shadcn/ui",
    description:
      "최신 Tailwind CSS v4와 shadcn/ui 컴포넌트로 아름다운 UI를 빠르게 구성하세요.",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description:
      "next-themes 기반 다크/라이트/시스템 테마를 지원합니다. 새로고침해도 설정이 유지됩니다.",
  },
  {
    icon: Layout,
    title: "레이아웃 시스템",
    description:
      "마케팅, 대시보드, 인증 페이지에 최적화된 3가지 레이아웃이 준비되어 있습니다.",
  },
  {
    icon: Shield,
    title: "폼 & 검증",
    description:
      "react-hook-form + zod 조합으로 타입 안전한 폼 검증을 간편하게 구현할 수 있습니다.",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            개발에 필요한 모든 것
          </h2>
          <p className="mt-4 text-muted-foreground">
            검증된 라이브러리와 베스트 프랙티스를 기반으로 구성된 스타터킷입니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
