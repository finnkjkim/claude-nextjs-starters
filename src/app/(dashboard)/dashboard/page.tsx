import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { RecentActivity } from "@/components/dashboard/recent-activity"

const stats = [
  {
    title: "총 매출",
    value: "₩45,231,890",
    change: "+20.1% 지난달 대비",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "구독자",
    value: "2,350",
    change: "+180.1% 지난달 대비",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "주문",
    value: "12,234",
    change: "+19% 지난달 대비",
    changeType: "positive" as const,
    icon: ShoppingCart,
  },
  {
    title: "활성 사용자",
    value: "573",
    change: "-2.4% 지난달 대비",
    changeType: "negative" as const,
    icon: Activity,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">서비스 현황을 한눈에 확인하세요.</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* 최근 활동 */}
      <RecentActivity />
    </div>
  )
}
