import { UserPlus, Users, UserCheck, UserX } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const stats = [
  {
    title: "전체 사용자",
    value: "2,350",
    change: "+180 이번 달",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "신규 가입",
    value: "180",
    change: "+22.4% 지난달 대비",
    changeType: "positive" as const,
    icon: UserPlus,
  },
  {
    title: "활성 사용자",
    value: "1,847",
    change: "+5.1% 지난달 대비",
    changeType: "positive" as const,
    icon: UserCheck,
  },
  {
    title: "비활성 사용자",
    value: "503",
    change: "-3.2% 지난달 대비",
    changeType: "positive" as const,
    icon: UserX,
  },
]

const users = [
  { id: "1", name: "김민준", email: "minjun@example.com", role: "관리자", status: "활성", joined: "2024-01-10" },
  { id: "2", name: "이서연", email: "seoyeon@example.com", role: "편집자", status: "활성", joined: "2024-01-12" },
  { id: "3", name: "박지훈", email: "jihun@example.com", role: "사용자", status: "활성", joined: "2024-01-14" },
  { id: "4", name: "최수아", email: "sua@example.com", role: "사용자", status: "비활성", joined: "2024-01-15" },
  { id: "5", name: "정도현", email: "dohyun@example.com", role: "편집자", status: "활성", joined: "2024-01-16" },
  { id: "6", name: "강예린", email: "yerin@example.com", role: "사용자", status: "활성", joined: "2024-01-17" },
  { id: "7", name: "윤성호", email: "sungho@example.com", role: "사용자", status: "대기", joined: "2024-01-18" },
]

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  활성: "default",
  비활성: "secondary",
  대기: "outline",
}

const roleVariant: Record<string, "default" | "secondary" | "outline"> = {
  관리자: "default",
  편집자: "secondary",
  사용자: "outline",
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">사용자</h1>
        <p className="text-muted-foreground">사용자 계정을 관리하고 활동을 모니터링하세요.</p>
      </div>

      {/* 통계 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* 사용자 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>전체 {users.length}명의 사용자가 등록되어 있습니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>사용자</TableHead>
                <TableHead>역할</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">가입일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={roleVariant[user.role] ?? "outline"}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[user.status] ?? "outline"}>{user.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">
                    {user.joined}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
