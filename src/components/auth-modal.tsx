"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WalletConnect } from "./wallet-connect"
import { Mail, User, Lock, Gamepad2 } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onAuthSuccess?: (user: any) => void
}

export function AuthModal({ isOpen, onClose, onAuthSuccess }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const handleEmailAuth = async (isSignUp: boolean) => {
    setIsLoading(true)
    try {
      // Simulate auth process
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const mockUser = {
        id: "user_123",
        email,
        username: username || email.split("@")[0],
        walletAddress: null,
      }

      onAuthSuccess?.(mockUser)
      onClose()
    } catch (error) {
      console.error("Auth error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleWalletConnect = (address: string) => {
    const mockUser = {
      id: "user_wallet_123",
      email: null,
      username: `Hunter_${address.slice(-4)}`,
      walletAddress: address,
    }

    onAuthSuccess?.(mockUser)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-4 border-foreground retro-shadow bg-background max-w-md">
        <DialogHeader>
          <DialogTitle className="pixel-text text-center text-2xl flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-primary border-2 border-foreground flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            JOIN FLOWHUNT
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="wallet" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-muted border-2 border-foreground">
            <TabsTrigger value="wallet" className="font-mono font-bold">
              WALLET
            </TabsTrigger>
            <TabsTrigger value="email" className="font-mono font-bold">
              EMAIL
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wallet" className="space-y-4">
            <WalletConnect onConnect={handleWalletConnect} />
          </TabsContent>

          <TabsContent value="email" className="space-y-4">
            <Tabs defaultValue="signin" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2 bg-muted border-2 border-foreground">
                <TabsTrigger value="signin" className="font-mono text-sm">
                  SIGN IN
                </TabsTrigger>
                <TabsTrigger value="signup" className="font-mono text-sm">
                  SIGN UP
                </TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="font-mono font-bold text-sm">
                      EMAIL
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="hunter@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 border-2 border-foreground font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="font-mono font-bold text-sm">
                      PASSWORD
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="signin-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 border-2 border-foreground font-mono"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => handleEmailAuth(false)}
                    disabled={isLoading || !email || !password}
                    className="w-full retro-button"
                  >
                    {isLoading ? "SIGNING IN..." : "SIGN IN"}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-username" className="font-mono font-bold text-sm">
                      USERNAME
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="signup-username"
                        type="text"
                        placeholder="TreasureHunter123"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="pl-10 border-2 border-foreground font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="font-mono font-bold text-sm">
                      EMAIL
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="hunter@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 border-2 border-foreground font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="font-mono font-bold text-sm">
                      PASSWORD
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 border-2 border-foreground font-mono"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => handleEmailAuth(true)}
                    disabled={isLoading || !email || !password || !username}
                    className="w-full retro-button"
                  >
                    {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>

        <p className="text-center text-muted-foreground font-mono text-xs">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-primary hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </DialogContent>
    </Dialog>
  )
}
