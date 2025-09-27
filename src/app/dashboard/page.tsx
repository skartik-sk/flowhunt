"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/hooks/use-auth"
import { HuntCard } from "@/components/hunt-card"
import { Trophy, Coins, MapPin, Clock, TrendingUp, Star, Target, Zap, Users, Calendar, Award, Plus } from "lucide-react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto animate-pulse">
            <Trophy className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="font-mono">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  // Mock data for demonstration
  const stats = {
    totalEarnings: 1247.5,
    huntsCompleted: 23,
    huntsCreated: 5,
    currentRank: 42,
    successRate: 87,
    avgCompletionTime: "2h 15m",
  }

  const recentHunts = [
    {
      title: "Downtown Mystery",
      description: "Solve ancient riddles in the city center",
      reward: 250,
      participants: 12,
      maxParticipants: 20,
      timeLeft: "2d 14h",
      difficulty: "Medium" as const,
      rating: 4.8,
      distance: "0.5km",
      status: "Active" as const,
    },
    {
      title: "Park Adventure",
      description: "Nature-based treasure hunt through Central Park",
      reward: 150,
      participants: 8,
      maxParticipants: 15,
      timeLeft: "5d 2h",
      difficulty: "Easy" as const,
      rating: 4.6,
      distance: "1.2km",
      status: "Starting Soon" as const,
    },
  ]

  const achievements = [
    { name: "First Hunt", description: "Complete your first treasure hunt", unlocked: true, icon: Target },
    { name: "Speed Demon", description: "Complete 5 hunts in under 1 hour", unlocked: true, icon: Zap },
    { name: "Social Hunter", description: "Complete 10 team hunts", unlocked: false, icon: Users },
    { name: "Master Explorer", description: "Complete 50 hunts", unlocked: false, icon: Trophy },
  ]

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold pixel-text mb-2">
            Welcome back, <span className="text-primary">{user.username}</span>!
          </h1>
          <p className="text-muted-foreground font-mono">Ready for your next treasure hunting adventure?</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center mx-auto">
                <Coins className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-primary">{stats.totalEarnings}</div>
              <div className="text-xs font-mono text-muted-foreground">FLOW Earned</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-accent border border-foreground rounded flex items-center justify-center mx-auto">
                <Trophy className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-accent">{stats.huntsCompleted}</div>
              <div className="text-xs font-mono text-muted-foreground">Completed</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-secondary border border-foreground rounded flex items-center justify-center mx-auto">
                <MapPin className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-secondary">{stats.huntsCreated}</div>
              <div className="text-xs font-mono text-muted-foreground">Created</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center mx-auto">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-primary">#{stats.currentRank}</div>
              <div className="text-xs font-mono text-muted-foreground">Global Rank</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-accent border border-foreground rounded flex items-center justify-center mx-auto">
                <Star className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-accent">{stats.successRate}%</div>
              <div className="text-xs font-mono text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-secondary border border-foreground rounded flex items-center justify-center mx-auto">
                <Clock className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-secondary">{stats.avgCompletionTime}</div>
              <div className="text-xs font-mono text-muted-foreground">Avg Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted border-2 border-foreground">
            <TabsTrigger value="active" className="font-mono font-bold">
              ACTIVE HUNTS
            </TabsTrigger>
            <TabsTrigger value="history" className="font-mono font-bold">
              HISTORY
            </TabsTrigger>
            <TabsTrigger value="achievements" className="font-mono font-bold">
              ACHIEVEMENTS
            </TabsTrigger>
            <TabsTrigger value="analytics" className="font-mono font-bold">
              ANALYTICS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold pixel-text">Active Hunts</h2>
              <Button className="retro-button">
                <Plus className="w-4 h-4 mr-2" />
                CREATE HUNT
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentHunts.map((hunt, index) => (
                <HuntCard key={index} {...hunt} />
              ))}
            </div>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-muted border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-bold pixel-text text-lg">No More Active Hunts</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  You've completed all available hunts in your area. Check back later for new adventures!
                </p>
                <Button className="retro-button">BROWSE ALL HUNTS</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <h2 className="text-2xl font-bold pixel-text">Hunt History</h2>

            <div className="space-y-4">
              {[
                {
                  title: "Riverside Quest",
                  completedAt: "2 days ago",
                  reward: 300,
                  time: "1h 45m",
                  status: "completed",
                },
                {
                  title: "Urban Explorer",
                  completedAt: "1 week ago",
                  reward: 450,
                  time: "2h 30m",
                  status: "completed",
                },
                {
                  title: "Night Hunter",
                  completedAt: "2 weeks ago",
                  reward: 0,
                  time: "3h 15m",
                  status: "failed",
                },
              ].map((hunt, index) => (
                <Card key={index} className="border-2 border-foreground retro-shadow bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-bold pixel-text">{hunt.title}</h3>
                        <p className="text-muted-foreground font-mono text-sm">{hunt.completedAt}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge
                            className={`retro-button text-xs ${
                              hunt.status === "completed"
                                ? "bg-primary text-primary-foreground"
                                : "bg-destructive text-destructive-foreground"
                            }`}
                          >
                            {hunt.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="font-mono text-sm">
                          {hunt.reward > 0 ? `+${hunt.reward} FLOW` : "No reward"} • {hunt.time}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-2xl font-bold pixel-text">Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <Card
                    key={index}
                    className={`border-2 border-foreground retro-shadow ${
                      achievement.unlocked ? "bg-card" : "bg-muted opacity-60"
                    }`}
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div
                        className={`w-12 h-12 border-2 border-foreground rounded-lg flex items-center justify-center ${
                          achievement.unlocked ? "bg-primary" : "bg-muted-foreground"
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${achievement.unlocked ? "text-primary-foreground" : "text-background"}`}
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold pixel-text">{achievement.name}</h3>
                        <p className="text-muted-foreground font-mono text-sm">{achievement.description}</p>
                        {achievement.unlocked && (
                          <Badge className="retro-button bg-primary text-primary-foreground text-xs">UNLOCKED</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold pixel-text">Performance Analytics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardHeader>
                  <CardTitle className="pixel-text flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Monthly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Hunts Completed</span>
                      <span>8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>FLOW Earned</span>
                      <span>450/500</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>Success Rate</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardHeader>
                  <CardTitle className="pixel-text flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Recent Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-mono text-sm">Reached Top 50 globally</p>
                        <p className="text-muted-foreground font-mono text-xs">3 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent border border-foreground rounded flex items-center justify-center">
                        <Coins className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-mono text-sm">Earned 1000+ FLOW tokens</p>
                        <p className="text-muted-foreground font-mono text-xs">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary border border-foreground rounded flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-mono text-sm">20 day hunting streak</p>
                        <p className="text-muted-foreground font-mono text-xs">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <RetroFooter />
    </div>
  )
}
