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

const activities = [
  {
    id: "1",
    user: "김민준",
    action: "새 프로젝트 생성",
    status: "완료",
    date: "2024-01-15",
  },
  {
    id: "2",
    user: "이서연",
    action: "파일 업로드",
    status: "진행 중",
    date: "2024-01-15",
  },
  {
    id: "3",
    user: "박지훈",
    action: "보고서 내보내기",
    status: "완료",
    date: "2024-01-14",
  },
  {
    id: "4",
    user: "최수아",
    action: "사용자 초대",
    status: "대기",
    date: "2024-01-14",
  },
  {
    id: "5",
    user: "정도현",
    action: "설정 변경",
    status: "완료",
    date: "2024-01-13",
  },
]

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  완료: "default",
  "진행 중": "secondary",
  대기: "outline",
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
        <CardDescription>최근 5건의 활동 내역입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>사용자</TableHead>
              <TableHead>활동</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">날짜</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[activity.status] ?? "outline"}>
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {activity.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
