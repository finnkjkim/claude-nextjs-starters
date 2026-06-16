import { FileText, BookOpen, Code2, Rocket, Settings, Layout } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    icon: Rocket,
    title: "시작하기",
    description: "프로젝트 설치 및 기본 설정 방법을 알아보세요.",
    articles: [
      { title: "설치 및 초기 설정", badge: "필수", badgeVariant: "default" as const },
      { title: "환경 변수 설정", badge: "필수", badgeVariant: "default" as const },
      { title: "배포 가이드", badge: "권장", badgeVariant: "secondary" as const },
    ],
  },
  {
    icon: Layout,
    title: "레이아웃 & 라우팅",
    description: "App Router 기반 레이아웃 구조를 이해하세요.",
    articles: [
      { title: "마케팅 레이아웃", badge: "가이드", badgeVariant: "outline" as const },
      { title: "대시보드 레이아웃", badge: "가이드", badgeVariant: "outline" as const },
      { title: "인증 레이아웃", badge: "가이드", badgeVariant: "outline" as const },
    ],
  },
  {
    icon: Code2,
    title: "컴포넌트",
    description: "shadcn/ui 기반 컴포넌트 사용법을 확인하세요.",
    articles: [
      { title: "UI 컴포넌트 목록", badge: "참조", badgeVariant: "outline" as const },
      { title: "폼 & 검증 (react-hook-form + zod)", badge: "가이드", badgeVariant: "outline" as const },
      { title: "커스텀 컴포넌트 만들기", badge: "심화", badgeVariant: "secondary" as const },
    ],
  },
  {
    icon: Settings,
    title: "설정 & 커스터마이징",
    description: "테마, 스타일, 설정을 자신만의 방식으로 변경하세요.",
    articles: [
      { title: "Tailwind CSS v4 설정", badge: "설정", badgeVariant: "outline" as const },
      { title: "다크모드 커스터마이징", badge: "설정", badgeVariant: "outline" as const },
      { title: "메뉴 & 네비게이션 수정", badge: "설정", badgeVariant: "outline" as const },
    ],
  },
]

const recentDocs = [
  { title: "Next.js 16 업그레이드 노트", date: "2024-01-15", type: "업데이트" },
  { title: "Tailwind CSS v4 마이그레이션", date: "2024-01-12", type: "가이드" },
  { title: "shadcn/ui 컴포넌트 추가 방법", date: "2024-01-10", type: "튜토리얼" },
  { title: "배포 체크리스트", date: "2024-01-08", type: "참조" },
]

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">문서</h1>
        <p className="text-muted-foreground">Next Starter 사용 가이드 및 API 문서입니다.</p>
      </div>

      {/* 최근 업데이트 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            최근 업데이트된 문서
          </CardTitle>
          <CardDescription>최근에 추가되거나 수정된 문서입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {recentDocs.map((doc) => (
              <div key={doc.title} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium hover:underline cursor-pointer">
                    {doc.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{doc.type}</Badge>
                  <span className="text-xs text-muted-foreground">{doc.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 문서 카테고리 */}
      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <category.icon className="h-4 w-4 text-primary" />
                {category.title}
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.articles.map((article) => (
                  <li
                    key={article.title}
                    className="flex items-center justify-between rounded-md p-2 hover:bg-muted cursor-pointer transition-colors"
                  >
                    <span className="text-sm">{article.title}</span>
                    <Badge variant={article.badgeVariant} className="text-xs">
                      {article.badge}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
