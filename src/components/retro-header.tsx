"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AuthModal } from "./auth-modal"
import { useAuth } from "@/hooks/use-auth"
import { Menu, X, Gamepad2, User, Settings, LogOut, Wallet } from "lucide-react"

export function RetroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, login, logout } = useAuth()

  const handleAuthSuccess = (userData: any) => {
    login(userData)
  }

  return (
    <>
      <header className="border-b-2 border-foreground bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-primary border-2 border-foreground flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="pixel-text">FLOWHUNT</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/hunts" className="font-mono font-bold hover:text-primary transition-colors">
                HUNTS
              </Link>
              <Link href="/create" className="font-mono font-bold hover:text-primary transition-colors">
                CREATE
              </Link>
              <Link href="/leaderboard" className="font-mono font-bold hover:text-primary transition-colors">
                LEADERBOARD
              </Link>
              {user && (
                <Link href="/dashboard" className="font-mono font-bold hover:text-primary transition-colors">
                  DASHBOARD
                </Link>
              )}
            </nav>

            {/* Auth Section */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
                      <Avatar className="w-8 h-8 border-2 border-foreground">
                        <AvatarFallback className="bg-primary text-primary-foreground font-mono font-bold">
                          {user.username.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-mono font-bold">{user.username}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-2 border-foreground retro-shadow bg-background">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="flex items-center gap-2 font-mono">
                        <User className="w-4 h-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="flex items-center gap-2 font-mono">
                        <Gamepad2 className="w-4 h-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    {user.walletAddress && (
                      <DropdownMenuItem className="flex items-center gap-2 font-mono">
                        <Wallet className="w-4 h-4" />
                        {user.walletAddress.slice(0, 6)}...{user.walletAddress.slice(-4)}
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="flex items-center gap-2 font-mono">
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="flex items-center gap-2 font-mono text-destructive">
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setIsAuthModalOpen(true)}
                    className="retro-button bg-background text-foreground"
                  >
                    SIGN IN
                  </Button>
                  <Button onClick={() => setIsAuthModalOpen(true)} className="retro-button">
                    START HUNTING
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t-2 border-foreground bg-card">
              <nav className="flex flex-col gap-4 p-4">
                <Link href="/hunts" className="font-mono font-bold hover:text-primary">
                  HUNTS
                </Link>
                <Link href="/create" className="font-mono font-bold hover:text-primary">
                  CREATE
                </Link>
                <Link href="/leaderboard" className="font-mono font-bold hover:text-primary">
                  LEADERBOARD
                </Link>
                {user && (
                  <Link href="/dashboard" className="font-mono font-bold hover:text-primary">
                    DASHBOARD
                  </Link>
                )}
                <div className="flex flex-col gap-2 pt-2">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded border border-foreground">
                        <Avatar className="w-6 h-6 border border-foreground">
                          <AvatarFallback className="bg-primary text-primary-foreground font-mono text-xs">
                            {user.username.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-mono text-sm">{user.username}</span>
                      </div>
                      <Button onClick={logout} variant="outline" className="retro-button bg-background text-foreground">
                        SIGN OUT
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        onClick={() => setIsAuthModalOpen(true)}
                        className="retro-button bg-background text-foreground"
                      >
                        SIGN IN
                      </Button>
                      <Button onClick={() => setIsAuthModalOpen(true)} className="retro-button">
                        START HUNTING
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onAuthSuccess={handleAuthSuccess} />
    </>
  )
}
