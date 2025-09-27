"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/hooks/use-auth"
import {
  MapPin,
  Star,
  Coins,
  Trophy,
  Camera,
  Navigation,
  Share2,
  Heart,
  Flag,
  User,
  Calendar,
  Target,
  Shield,
} from "lucide-react"

export default function HuntDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [isJoining, setIsJoining] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)

  // Mock data for demonstration
  const hunt = {
    id: params.id,
    title: "Downtown Mystery",
    description:
      "Embark on an epic adventure through the heart of the city. Solve ancient riddles, discover hidden landmarks, and unlock the secrets of the downtown district. This multi-stage treasure hunt will take you through historic buildings, secret alleyways, and iconic locations that most tourists never see.",
    creator: {
      username: "TreasureMaster",
      avatar: "TM",
      huntsCreated: 15,
      rating: 4.9,
    },
    category: "Urban Explorer",
    difficulty: "Medium",
    reward: 250,
    participants: 12,
    maxParticipants: 20,
    timeLeft: "2d 14h",
    rating: 4.8,
    reviews: 23,
    distance: "0.5km",
    estimatedTime: "2-3 hours",
    createdAt: "2024-01-15",
    status: "Active",
    clues: [
      {
        id: 1,
        title: "The Guardian of Time",
        description: "Find the ancient timekeeper in the city's heart",
        location: "Union Square",
        unlocked: true,
        completed: false,
        reward: 50,
      },
      {
        id: 2,
        title: "Whispers in Stone",
        description: "Decode the message carved in marble",
        location: "City Hall",
        unlocked: false,
        completed: false,
        reward: 75,
      },
      {
        id: 3,
        title: "The Final Vault",
        description: "Unlock the treasure chamber",
        location: "Financial District",
        unlocked: false,
        completed: false,
        reward: 125,
      },
    ],
    features: [
      "Photo verification required",
      "GPS location tracking",
      "Real-time progress updates",
      "Team collaboration allowed",
      "Hint system available",
    ],
    requirements: ["Smartphone with camera", "GPS enabled", "Comfortable walking shoes", "2-3 hours available"],
  }

  const handleJoinHunt = async () => {
    if (!user) {
      router.push("/login")
      return
    }

    setIsJoining(true)
    try {
      // Simulate joining process
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setHasJoined(true)
      router.push(`/hunts/${hunt.id}/solve`)
    } catch (error) {
      console.error("Failed to join hunt:", error)
    } finally {
      setIsJoining(false)
    }
  }

  const progressPercentage = (hunt.participants / hunt.maxParticipants) * 100

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Hunt Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="retro-button bg-primary text-primary-foreground text-xs">
              {hunt.status.toUpperCase()}
            </Badge>
            <Badge className="retro-button bg-accent text-accent-foreground text-xs">
              {hunt.category.toUpperCase()}
            </Badge>
            <Badge className="retro-button bg-secondary text-secondary-foreground text-xs">
              {hunt.difficulty.toUpperCase()}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold pixel-text mb-4">{hunt.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>by {hunt.creator.username}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Created {hunt.createdAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent fill-current" />
              <span>
                {hunt.rating} ({hunt.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{hunt.distance} walking distance</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text">About This Hunt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-mono leading-relaxed">{hunt.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold pixel-text text-sm">FEATURES</h4>
                    <ul className="space-y-2">
                      {hunt.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm font-mono">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold pixel-text text-sm">REQUIREMENTS</h4>
                    <ul className="space-y-2">
                      {hunt.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm font-mono">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clue Preview */}
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text">Hunt Stages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hunt.clues.map((clue, index) => (
                  <div
                    key={clue.id}
                    className={`flex items-center gap-4 p-4 border-2 border-foreground rounded ${
                      clue.completed ? "bg-primary/10" : clue.unlocked ? "bg-accent/10" : "bg-muted opacity-60"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 border-2 border-foreground rounded-lg flex items-center justify-center ${
                        clue.completed
                          ? "bg-primary text-primary-foreground"
                          : clue.unlocked
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <span className="font-bold pixel-text">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold pixel-text text-sm">{clue.title}</h4>
                      <p className="text-muted-foreground font-mono text-xs">{clue.description}</p>
                      <p className="text-muted-foreground font-mono text-xs">{clue.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold pixel-text text-primary text-sm">+{clue.reward} FLOW</div>
                      {clue.completed && (
                        <Badge className="retro-button bg-primary text-primary-foreground text-xs mt-1">
                          COMPLETED
                        </Badge>
                      )}
                      {clue.unlocked && !clue.completed && (
                        <Badge className="retro-button bg-accent text-accent-foreground text-xs mt-1">ACTIVE</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Creator Info */}
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text">Hunt Creator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-foreground">
                    <AvatarFallback className="bg-primary text-primary-foreground font-mono font-bold text-lg">
                      {hunt.creator.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold pixel-text text-lg">{hunt.creator.username}</h4>
                    <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        <span>{hunt.creator.huntsCreated} hunts created</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span>{hunt.creator.rating} rating</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="retro-button bg-background text-foreground">
                    VIEW PROFILE
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Hunt Card */}
            <Card className="border-4 border-primary retro-shadow bg-card">
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                    <Coins className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold pixel-text text-primary">{hunt.reward} FLOW</div>
                    <div className="text-sm font-mono text-muted-foreground">Total Reward Pool</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Participants</span>
                    <span className="font-bold pixel-text">
                      {hunt.participants}/{hunt.maxParticipants}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Time Remaining</span>
                    <span className="font-bold pixel-text text-accent">{hunt.timeLeft}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Estimated Time</span>
                    <span className="font-bold pixel-text">{hunt.estimatedTime}</span>
                  </div>
                </div>

                <Button
                  onClick={handleJoinHunt}
                  disabled={isJoining || hasJoined}
                  className="w-full retro-button"
                  size="lg"
                >
                  {isJoining ? "JOINING..." : hasJoined ? "JOINED!" : "JOIN HUNT"}
                  {!isJoining && !hasJoined && <Target className="w-5 h-5 ml-2" />}
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 retro-button bg-background text-foreground">
                    <Heart className="w-4 h-4 mr-1" />
                    SAVE
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 retro-button bg-background text-foreground">
                    <Share2 className="w-4 h-4 mr-1" />
                    SHARE
                  </Button>
                  <Button variant="outline" size="sm" className="retro-button bg-background text-foreground">
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hunt Stats */}
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text text-sm">Hunt Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted border border-foreground rounded">
                    <div className="text-lg font-bold pixel-text text-primary">87%</div>
                    <div className="text-xs font-mono text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-muted border border-foreground rounded">
                    <div className="text-lg font-bold pixel-text text-accent">2.5h</div>
                    <div className="text-xs font-mono text-muted-foreground">Avg Time</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-mono text-sm font-bold">Secure Rewards</p>
                      <p className="text-muted-foreground font-mono text-xs">Smart contract protected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-mono text-sm font-bold">Photo Verification</p>
                      <p className="text-muted-foreground font-mono text-xs">Proof required at each location</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Navigation className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-mono text-sm font-bold">GPS Tracking</p>
                      <p className="text-muted-foreground font-mono text-xs">Real-time location updates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Notice */}
            <Card className="border-2 border-accent retro-shadow bg-accent/10">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <h4 className="font-bold pixel-text text-sm">Safety First</h4>
                </div>
                <p className="text-muted-foreground font-mono text-xs">
                  Always prioritize your safety. Hunt during daylight hours, stay in public areas, and inform someone of
                  your plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
