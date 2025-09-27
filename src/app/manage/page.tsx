"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/use-auth"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Users,
  Coins,
  Clock,
  MapPin,
  TrendingUp,
  Pause,
  Play,
  BarChart3,
  Settings,
} from "lucide-react"

interface Hunt {
  id: string
  title: string
  description: string
  status: "active" | "paused" | "completed" | "draft"
  participants: number
  maxParticipants: number
  reward: number
  timeLeft: string
  createdAt: string
  completionRate: number
  totalEarnings: number
}

export default function ManageHuntsPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

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
            <Settings className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="font-mono">Loading hunt manager...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  // Mock data for demonstration
  const hunts: Hunt[] = [
    {
      id: "1",
      title: "Downtown Mystery",
      description: "Solve ancient riddles in the city center",
      status: "active",
      participants: 12,
      maxParticipants: 20,
      reward: 500,
      timeLeft: "2d 14h",
      createdAt: "2024-01-15",
      completionRate: 65,
      totalEarnings: 325,
    },
    {
      id: "2",
      title: "Park Adventure",
      description: "Nature-based treasure hunt through Central Park",
      status: "completed",
      participants: 15,
      maxParticipants: 15,
      reward: 300,
      timeLeft: "Completed",
      createdAt: "2024-01-10",
      completionRate: 100,
      totalEarnings: 300,
    },
    {
      id: "3",
      title: "Historical Quest",
      description: "Discover the city's hidden historical secrets",
      status: "draft",
      participants: 0,
      maxParticipants: 25,
      reward: 750,
      timeLeft: "Draft",
      createdAt: "2024-01-20",
      completionRate: 0,
      totalEarnings: 0,
    },
  ]

  const filteredHunts = hunts.filter((hunt) => {
    const matchesSearch = hunt.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || hunt.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "completed":
        return "bg-accent text-accent-foreground"
      case "paused":
        return "bg-secondary text-secondary-foreground"
      case "draft":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const totalStats = {
    totalHunts: hunts.length,
    activeHunts: hunts.filter((h) => h.status === "active").length,
    totalParticipants: hunts.reduce((sum, h) => sum + h.participants, 0),
    totalEarnings: hunts.reduce((sum, h) => sum + h.totalEarnings, 0),
  }

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold pixel-text mb-2">Manage Hunts</h1>
            <p className="text-muted-foreground font-mono">Track and manage your treasure hunt creations</p>
          </div>
          <Button onClick={() => router.push("/create")} className="retro-button">
            <Plus className="w-4 h-4 mr-2" />
            CREATE NEW HUNT
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center mx-auto">
                <MapPin className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-primary">{totalStats.totalHunts}</div>
              <div className="text-xs font-mono text-muted-foreground">Total Hunts</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-accent border border-foreground rounded flex items-center justify-center mx-auto">
                <Play className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-accent">{totalStats.activeHunts}</div>
              <div className="text-xs font-mono text-muted-foreground">Active</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-secondary border border-foreground rounded flex items-center justify-center mx-auto">
                <Users className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-secondary">{totalStats.totalParticipants}</div>
              <div className="text-xs font-mono text-muted-foreground">Participants</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center mx-auto">
                <Coins className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-primary">{totalStats.totalEarnings}</div>
              <div className="text-xs font-mono text-muted-foreground">FLOW Distributed</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search hunts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-2 border-foreground font-mono"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {["all", "active", "completed", "paused", "draft"].map((status) => (
              <Button
                key={status}
                onClick={() => setSelectedStatus(status)}
                variant={selectedStatus === status ? "default" : "outline"}
                className={`retro-button ${selectedStatus === status ? "" : "bg-background text-foreground"}`}
              >
                {status.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>

        {/* Hunts List */}
        <div className="space-y-4">
          {filteredHunts.map((hunt) => (
            <Card key={hunt.id} className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className={`retro-button text-xs ${getStatusColor(hunt.status)}`}>
                      {hunt.status.toUpperCase()}
                    </Badge>
                    <h3 className="font-bold pixel-text text-lg">{hunt.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="retro-button bg-background text-foreground">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="retro-button bg-background text-foreground">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="retro-button bg-background text-foreground">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                    {hunt.status === "active" ? (
                      <Button size="sm" variant="outline" className="retro-button bg-background text-foreground">
                        <Pause className="w-4 h-4" />
                      </Button>
                    ) : hunt.status === "paused" ? (
                      <Button size="sm" variant="outline" className="retro-button bg-background text-foreground">
                        <Play className="w-4 h-4" />
                      </Button>
                    ) : null}
                    <Button
                      size="sm"
                      variant="destructive"
                      className="retro-button bg-destructive text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground font-mono text-sm mb-4">{hunt.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="font-bold pixel-text text-secondary">
                      {hunt.participants}/{hunt.maxParticipants}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">Hunters</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Coins className="w-4 h-4 text-primary" />
                    </div>
                    <div className="font-bold pixel-text text-primary">{hunt.reward}</div>
                    <div className="text-xs font-mono text-muted-foreground">FLOW Pool</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    <div className="font-bold pixel-text text-accent">{hunt.timeLeft}</div>
                    <div className="text-xs font-mono text-muted-foreground">Time Left</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="font-bold pixel-text text-secondary">{hunt.completionRate}%</div>
                    <div className="text-xs font-mono text-muted-foreground">Completion</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Coins className="w-4 h-4 text-accent" />
                    </div>
                    <div className="font-bold pixel-text text-accent">{hunt.totalEarnings}</div>
                    <div className="text-xs font-mono text-muted-foreground">Distributed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHunts.length === 0 && (
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-muted border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-bold pixel-text text-lg">No Hunts Found</h3>
              <p className="text-muted-foreground font-mono text-sm">
                {searchTerm || selectedStatus !== "all"
                  ? "Try adjusting your search or filters"
                  : "Create your first treasure hunt to get started!"}
              </p>
              <Button onClick={() => router.push("/create")} className="retro-button">
                <Plus className="w-4 h-4 mr-2" />
                CREATE YOUR FIRST HUNT
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <RetroFooter />
    </div>
  )
}
