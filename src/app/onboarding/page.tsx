"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RetroHeader } from "@/components/retro-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { User, MapPin, Wallet, Trophy, ArrowRight, ArrowLeft, Upload, CheckCircle, Gamepad2, Coins } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Welcome to FlowHunt",
    description: "Let's get you started on your treasure hunting adventure",
  },
  {
    id: 2,
    title: "Create Your Profile",
    description: "Tell us about yourself and customize your hunter identity",
  },
  {
    id: 3,
    title: "Connect Your Wallet",
    description: "Link your Flow wallet to start earning FLOW tokens",
  },
  {
    id: 4,
    title: "Set Your Preferences",
    description: "Customize your hunting experience and location settings",
  },
  {
    id: 5,
    title: "You're Ready to Hunt!",
    description: "Everything is set up. Time to find your first treasure!",
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [profile, setProfile] = useState({
    username: "",
    bio: "",
    avatar: "/pixel-avatar-current.jpg",
    location: "",
    notifications: true,
    shareLocation: false,
  })
  const [walletConnected, setWalletConnected] = useState(false)

  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleWalletConnect = () => {
    // Simulate wallet connection
    setTimeout(() => {
      setWalletConnected(true)
    }, 1000)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-primary border-4 border-foreground rounded-lg flex items-center justify-center retro-shadow">
                <Trophy className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold pixel-text">Welcome to FlowHunt!</h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                The ultimate Web3 treasure hunting platform where real-world exploration meets blockchain rewards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold pixel-text">EXPLORE</h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Discover treasure hunts in your city and around the world
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                    <Gamepad2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold pixel-text">SOLVE</h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Follow clues and solve puzzles to unlock hidden treasures
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-secondary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                    <Coins className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-bold pixel-text">EARN</h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Win FLOW tokens and build your reputation as a legendary hunter
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary border-4 border-foreground rounded-lg flex items-center justify-center mx-auto retro-shadow">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold pixel-text">Create Your Profile</h2>
              <p className="text-muted-foreground font-mono">Set up your hunter identity and make it uniquely yours</p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-4 border-foreground">
                    <AvatarImage src={profile.avatar || "/placeholder.svg"} alt="Profile" />
                    <AvatarFallback className="font-mono text-2xl">
                      {profile.username[0]?.toUpperCase() || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute -bottom-2 -right-2 retro-button p-2">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="font-mono font-bold">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder="Enter your hunter name"
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    className="font-mono border-2 border-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="font-mono font-bold">
                    Bio (Optional)
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell other hunters about yourself..."
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="font-mono border-2 border-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="font-mono font-bold">
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="font-mono border-2 border-foreground"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary border-4 border-foreground rounded-lg flex items-center justify-center mx-auto retro-shadow">
                <Wallet className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold pixel-text">Connect Your Wallet</h2>
              <p className="text-muted-foreground font-mono">
                Link your Flow wallet to start earning and spending FLOW tokens
              </p>
            </div>

            {!walletConnected ? (
              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                      <Wallet className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold pixel-text">Blocto Wallet</h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      Secure, user-friendly wallet for the Flow blockchain
                    </p>
                    <Button onClick={handleWalletConnect} className="w-full retro-button">
                      CONNECT BLOCTO WALLET
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-primary retro-shadow bg-primary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto" />
                    <h3 className="font-bold pixel-text text-primary">Wallet Connected!</h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      Your Blocto wallet is now connected and ready to use
                    </p>
                    <div className="bg-background border-2 border-foreground rounded p-3">
                      <div className="font-mono text-sm text-muted-foreground">Wallet Address:</div>
                      <div className="font-mono text-sm font-bold">0x1234...5678</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case 4:
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent border-4 border-foreground rounded-lg flex items-center justify-center mx-auto retro-shadow">
                <MapPin className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold pixel-text">Set Your Preferences</h2>
              <p className="text-muted-foreground font-mono">Customize your hunting experience and privacy settings</p>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardHeader>
                  <CardTitle className="pixel-text text-lg">Location Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono font-bold">Share Location</div>
                      <div className="text-sm text-muted-foreground font-mono">
                        Allow other hunters to see your general location
                      </div>
                    </div>
                    <Button
                      variant={profile.shareLocation ? "default" : "outline"}
                      size="sm"
                      className="retro-button"
                      onClick={() => setProfile({ ...profile, shareLocation: !profile.shareLocation })}
                    >
                      {profile.shareLocation ? "ON" : "OFF"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardHeader>
                  <CardTitle className="pixel-text text-lg">Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono font-bold">Hunt Notifications</div>
                      <div className="text-sm text-muted-foreground font-mono">
                        Get notified about new hunts and updates
                      </div>
                    </div>
                    <Button
                      variant={profile.notifications ? "default" : "outline"}
                      size="sm"
                      className="retro-button"
                      onClick={() => setProfile({ ...profile, notifications: !profile.notifications })}
                    >
                      {profile.notifications ? "ON" : "OFF"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-primary border-4 border-foreground rounded-lg flex items-center justify-center retro-shadow">
                <CheckCircle className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold pixel-text">You're Ready to Hunt!</h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Your profile is set up and your wallet is connected. Time to start your treasure hunting adventure!
              </p>
            </div>

            <Card className="border-2 border-foreground retro-shadow bg-card max-w-md mx-auto">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold pixel-text">Quick Start Tips</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary border border-foreground rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-mono text-xs font-bold">1</span>
                    </div>
                    <span className="font-mono text-sm">Browse active hunts in your area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary border border-foreground rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-mono text-xs font-bold">2</span>
                    </div>
                    <span className="font-mono text-sm">Start with easier hunts to build experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary border border-foreground rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-mono text-xs font-bold">3</span>
                    </div>
                    <span className="font-mono text-sm">Join the community and share your adventures</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Progress Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className="retro-button bg-primary text-primary-foreground">
                STEP {currentStep} OF {steps.length}
              </Badge>
              <span className="font-mono text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>

            <Progress value={progress} className="h-3 border-2 border-foreground" />

            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold pixel-text">{steps[currentStep - 1].title}</h1>
              <p className="text-muted-foreground font-mono">{steps[currentStep - 1].description}</p>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto mb-12">{renderStepContent()}</div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="retro-button bg-background text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              PREVIOUS
            </Button>

            <Button onClick={handleNext} className="retro-button" disabled={currentStep === 3 && !walletConnected}>
              {currentStep === steps.length ? "START HUNTING" : "NEXT"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
