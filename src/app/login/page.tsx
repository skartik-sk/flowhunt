"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { AuthModal } from "@/components/auth-modal"
import { useAuth } from "@/hooks/use-auth"

export default function LoginPage() {
  const router = useRouter()
  const { user, login } = useAuth()

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  const handleAuthSuccess = (userData: any) => {
    login(userData)
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <AuthModal isOpen={true} onClose={() => router.push("/")} onAuthSuccess={handleAuthSuccess} />
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
