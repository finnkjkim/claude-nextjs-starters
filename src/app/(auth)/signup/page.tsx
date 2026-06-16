import { SignupForm } from "@/components/forms/signup-form"
import { Zap } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata = {
  title: "회원가입",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted/30 px-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Zap className="h-5 w-5 text-primary" />
        <span>{SITE_CONFIG.name}</span>
      </Link>
      <SignupForm />
    </div>
  )
}
