"use client"

import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award, Crown, Star, TrendingUp, Users, Coins } from "lucide-react"

const topHunters = [
  {
    id: 1,
    username: "CryptoExplorer",
    avatar: "/pixel-avatar-1.jpg",
    huntsCompleted: 47,
    totalEarnings: 1250.5,
    winRate: 94,
    rank: 1,
    badge: "Legend",
  },
  {
    id: 2,
    username: "TreasureSeeker",
    avatar: "/pixel-avatar-2.jpg",
    huntsCompleted: 42,
    totalEarnings: 1180.2,
    winRate: 91,
    rank: 2,
    badge: "Master",
  },
  {
    id: 3,
    username: "FlowHunter",
    avatar: "/pixel-avatar-3.jpg",
    huntsCompleted: 38,
    totalEarnings: 980.7,
    winRate: 89,
    rank: 3,
    badge: "Expert",
  },
  {
    id: 4,
    username: "PixelPirate",
    avatar: "/pixel-avatar-4.jpg",
    huntsCompleted: 35,
    totalEarnings: 875.3,
    winRate: 87,
    rank: 4,
    badge: "Expert",
  },
  {
    id: 5,
    username: "RetroRaider",
    avatar: "/pixel-avatar-5.jpg",
    huntsCompleted: 32,
    totalEarnings: 720.8,
    winRate: 85,
    rank: 5,
    badge: "Advanced",
  },
]

const topCreators = [
  {
    id: 1,
    username: "HuntMaster",
    avatar: "/pixel-avatar-6.jpg",
    huntsCreated: 23,
    totalStaked: 5420.0,
    avgRating: 4.8,
    rank: 1,
    badge: "Creator Legend",
  },
  {
    id: 2,
    username: "PuzzleWizard",
    avatar: "/pixel-avatar-7.jpg",
    huntsCreated: 19,
    totalStaked: 4200.5,
    avgRating: 4.7,
    rank: 2,
    badge: "Master Creator",
  },
  {
    id: 3,
    username: "ClueKeeper",
    avatar: "/pixel-avatar-8.jpg",
    huntsCreated: 16,
    totalStaked: 3800.2,
    avgRating: 4.6,
    rank: 3,
    badge: "Expert Creator",
  },
]

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-yellow-500" />
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />
    case 3:
      return <Award className="w-6 h-6 text-amber-600" />
    default:
      return <Trophy className="w-5 h-5 text-muted-foreground" />
  }
}

function getBadgeColor(badge: string) {
  switch (badge) {
    case "Legend":
    case "Creator Legend":
      return "bg-yellow-500 text-yellow-900"
    case "Master":
    case "Master Creator":
      return "bg-purple-500 text-purple-100"
    case "Expert":
    case "Expert Creator":
      return "bg-blue-500 text-blue-100"
    case "Advanced":
      return "bg-green-500 text-green-100"
    default:
      return "bg-gray-500 text-gray-100"
  }
}

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary border-4 border-foreground rounded-lg flex items-center justify-center retro-shadow">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold pixel-text">LEADERBOARD</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Top hunters and creators in the FlowHunt community
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-6 text-center space-y-2">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <div className="text-2xl font-bold pixel-text text-primary">5,892</div>
              <div className="text-sm font-mono text-muted-foreground">Total Hunters</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-6 text-center space-y-2">
              <Trophy className="w-8 h-8 text-accent mx-auto" />
              <div className="text-2xl font-bold pixel-text text-accent">1,247</div>
              <div className="text-sm font-mono text-muted-foreground">Active Hunts</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-6 text-center space-y-2">
              <Coins className="w-8 h-8 text-secondary mx-auto" />
              <div className="text-2xl font-bold pixel-text text-secondary">12.5K</div>
              <div className="text-sm font-mono text-muted-foreground">FLOW Distributed</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-6 text-center space-y-2">
              <TrendingUp className="w-8 h-8 text-primary mx-auto" />
              <div className="text-2xl font-bold pixel-text text-primary">98%</div>
              <div className="text-sm font-mono text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="hunters" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-muted border-2 border-foreground">
            <TabsTrigger
              value="hunters"
              className="retro-button data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              TOP HUNTERS
            </TabsTrigger>
            <TabsTrigger
              value="creators"
              className="retro-button data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              TOP CREATORS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hunters" className="space-y-6">
            <div className="space-y-4">
              {topHunters.map((hunter, index) => (
                <Card key={hunter.id} className="border-2 border-foreground retro-shadow bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {getRankIcon(hunter.rank)}
                          <span className="text-2xl font-bold pixel-text">#{hunter.rank}</span>
                        </div>

                        <Avatar className="w-12 h-12 border-2 border-foreground">
                          <AvatarImage src={hunter.avatar || "/placeholder.svg"} alt={hunter.username} />
                          <AvatarFallback className="font-mono">{hunter.username[0]}</AvatarFallback>
                        </Avatar>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold pixel-text text-lg">{hunter.username}</h3>
                            <Badge className={`retro-button text-xs ${getBadgeColor(hunter.badge)}`}>
                              {hunter.badge}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                            <span>{hunter.huntsCompleted} hunts completed</span>
                            <span>{hunter.winRate}% win rate</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right space-y-1">
                        <div className="text-2xl font-bold pixel-text text-primary">
                          {hunter.totalEarnings.toFixed(1)} FLOW
                        </div>
                        <div className="text-sm font-mono text-muted-foreground">Total Earned</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creators" className="space-y-6">
            <div className="space-y-4">
              {topCreators.map((creator, index) => (
                <Card key={creator.id} className="border-2 border-foreground retro-shadow bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {getRankIcon(creator.rank)}
                          <span className="text-2xl font-bold pixel-text">#{creator.rank}</span>
                        </div>

                        <Avatar className="w-12 h-12 border-2 border-foreground">
                          <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.username} />
                          <AvatarFallback className="font-mono">{creator.username[0]}</AvatarFallback>
                        </Avatar>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold pixel-text text-lg">{creator.username}</h3>
                            <Badge className={`retro-button text-xs ${getBadgeColor(creator.badge)}`}>
                              {creator.badge}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                            <span>{creator.huntsCreated} hunts created</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-current" />
                              <span>{creator.avgRating}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right space-y-1">
                        <div className="text-2xl font-bold pixel-text text-secondary">
                          {creator.totalStaked.toFixed(0)} FLOW
                        </div>
                        <div className="text-sm font-mono text-muted-foreground">Total Staked</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <Card className="border-2 border-foreground retro-shadow bg-card max-w-2xl mx-auto">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold pixel-text">JOIN THE COMPETITION</h2>
              <p className="text-muted-foreground font-mono">
                Start hunting treasures and climb the leaderboard to earn your place among the legends!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="retro-button">
                  START HUNTING
                </Button>
                <Button variant="outline" size="lg" className="retro-button bg-background text-foreground">
                  CREATE HUNT
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
