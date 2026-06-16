import { BarChart3, TrendingUp, Eye, MousePointerClick, Clock } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    title: "페이지 조회수",
    value: "128,430",
    change: "+12.5% 지난달 대비",
    changeType: "positive" as const,
    icon: Eye,
  },
  {
    title: "순 방문자",
    value: "34,210",
    change: "+8.2% 지난달 대비",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "클릭률",
    value: "3.24%",
    change: "-0.4% 지난달 대비",
    changeType: "negative" as const,
    icon: MousePointerClick,
  },
  {
    title: "평균 체류 시간",
    value: "2분 34초",
    change: "+18.7% 지난달 대비",
    changeType: "positive" as const,
    icon: Clock,
  },
]

const topPages = [
  { page: "/dashboard", views: 42130, bounce: "32%" },
  { page: "/", views: 38920, bounce: "45%" },
  { page: "/login", views: 21050, bounce: "28%" },
  { page: "/signup", views: 15340, bounce: "22%" },
  { page: "/settings", views: 11000, bounce: "38%" },
]

const trafficSources = [
  { source: "직접 유입", visits: 45230, rate: "35.2%" },
  { source: "검색 엔진", visits: 38410, rate: "29.9%" },
  { source: "소셜 미디어", visits: 24180, rate: "18.8%" },
  { source: "이메일", visits: 12300, rate: "9.6%" },
  { source: "기타 참조", visits: 8310, rate: "6.5%" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">분석</h1>
        <p className="text-muted-foreground">트래픽 및 사용자 행동 데이터를 분석하세요.</p>
      </div>

      {/* 핵심 지표 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 인기 페이지 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              인기 페이지
            </CardTitle>
            <CardDescription>이번 달 가장 많이 방문된 페이지입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPages.map((item, index) => (
                <div key={item.page} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm font-mono">{item.page}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{item.views.toLocaleString()} 뷰</span>
                    <Badge variant="outline">이탈 {item.bounce}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 트래픽 소스 */}
        <Card>
          <CardHeader>
            <CardTitle>트래픽 소스</CardTitle>
            <CardDescription>방문자가 어디에서 유입되었는지 확인하세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((item) => (
                <div key={item.source} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.source}</span>
                    <span className="font-medium">{item.rate}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: item.rate }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.visits.toLocaleString()}회 방문
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
