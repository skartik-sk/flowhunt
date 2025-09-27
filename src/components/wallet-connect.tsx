"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, Shield, Zap, CheckCircle, AlertCircle } from "lucide-react"

interface WalletConnectProps {
  onConnect?: (address: string) => void
  onDisconnect?: () => void
}

export function WalletConnect({ onConnect, onDisconnect }: WalletConnectProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [error, setError] = useState("")

  const connectWallet = async () => {
    setIsConnecting(true)
    setError("")

    try {
      // Simulate wallet connection (in real app, this would use @blocto/fcl)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock wallet address
      const mockAddress = "0x1234...5678"
      setWalletAddress(mockAddress)
      setIsConnected(true)
      onConnect?.(mockAddress)
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
    setError("")
    onDisconnect?.()
  }

  if (isConnected) {
    return (
      <Card className="border-2 border-foreground retro-shadow bg-card">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary border-2 border-foreground rounded flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold pixel-text">Wallet Connected</h3>
                <p className="text-muted-foreground font-mono text-sm">{walletAddress}</p>
              </div>
            </div>
            <Badge className="retro-button bg-primary text-primary-foreground text-xs">CONNECTED</Badge>
          </div>
          <Button variant="outline" onClick={disconnectWallet} className="retro-button bg-background text-foreground">
            DISCONNECT
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-foreground retro-shadow bg-card">
      <CardHeader>
        <CardTitle className="pixel-text text-center">Connect Your Wallet</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
            <Wallet className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            Connect your Blocto wallet to start hunting for treasures and earning FLOW tokens.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">Secure blockchain authentication</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">No gas fees on Flow network</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">Instant FLOW token rewards</span>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive rounded">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="font-mono text-sm text-destructive">{error}</span>
          </div>
        )}

        <Button onClick={connectWallet} disabled={isConnecting} className="w-full retro-button" size="lg">
          {isConnecting ? "CONNECTING..." : "CONNECT BLOCTO WALLET"}
        </Button>

        <p className="text-center text-muted-foreground font-mono text-xs">
          Don't have a wallet?{" "}
          <a href="#" className="text-primary hover:underline">
            Create one here
          </a>
        </p>
      </CardContent>
    </Card>
  )
}
