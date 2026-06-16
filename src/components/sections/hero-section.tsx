import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:py-36">
      {/* 배경 그라디언트 */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklch, var(--primary) 15%, transparent), transparent)",
        }}
      />

      <Badge variant="outline" className="mb-6 gap-1.5 px-3 py-1 text-sm">
        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
        v1.0 출시 — 지금 바로 시작해보세요
      </Badge>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        빠르고 아름다운{" "}
        <span className="text-primary">Next.js</span>{" "}
        스타터킷
      </h1>

      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
        Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · 다크모드까지.
        <br />
        프로젝트 설정 시간을 줄이고 개발에만 집중하세요.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/dashboard">
            대시보드 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>

      {/* 기술 뱃지 */}
      <div className="mt-14 flex flex-wrap justify-center gap-2">
        {["Next.js 16", "TypeScript", "Tailwind v4", "shadcn/ui", "React 19", "lucide-react"].map(
          (tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs">
              {tech}
            </Badge>
          )
        )}
      </div>
    </section>
  )
}
