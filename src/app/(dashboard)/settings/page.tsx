import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">계정 및 알림 설정을 관리하세요.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">프로필</TabsTrigger>
          <TabsTrigger value="notifications">알림</TabsTrigger>
          <TabsTrigger value="security">보안</TabsTrigger>
        </TabsList>

        {/* 프로필 탭 */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>프로필</CardTitle>
              <CardDescription>프로필 정보를 수정할 수 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" defaultValue="사용자" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" defaultValue="user@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">소개</Label>
                <Textarea id="bio" placeholder="자기소개를 입력하세요." rows={3} />
              </div>
              <Button>저장</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 알림 탭 */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>받을 알림의 종류를 선택하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { id: "email-notif", label: "이메일 알림", description: "중요 업데이트를 이메일로 받습니다." },
                { id: "push-notif", label: "푸시 알림", description: "브라우저 푸시 알림을 받습니다." },
                { id: "marketing-notif", label: "마케팅 알림", description: "새 기능 및 프로모션 소식을 받습니다." },
              ].map((item, i) => (
                <div key={item.id}>
                  {i > 0 && <Separator className="mb-4" />}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor={item.id}>{item.label}</Label>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch id={item.id} defaultChecked={i === 0} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* 보안 탭 */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>비밀번호 변경</CardTitle>
              <CardDescription>보안을 위해 주기적으로 비밀번호를 변경하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-pw">현재 비밀번호</Label>
                <Input id="current-pw" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-pw">새 비밀번호</Label>
                <Input id="new-pw" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-pw">새 비밀번호 확인</Label>
                <Input id="confirm-pw" type="password" />
              </div>
              <Button>변경하기</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
