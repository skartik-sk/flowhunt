"use client"

import { useState } from "react"
import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { HuntCard } from "@/components/hunt-card"
import { Search, Filter, MapPin, Coins, Clock, Users, Star, Zap, Target } from "lucide-react"

export default function HuntsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [maxDistance, setMaxDistance] = useState([10])
  const [minReward, setMinReward] = useState([0])
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  // Mock data for demonstration
  const hunts = [
    {
      title: "Downtown Mystery",
      description: "Solve ancient riddles in the city center to unlock the treasure vault",
      reward: 250,
      participants: 12,
      maxParticipants: 20,
      timeLeft: "2d 14h",
      difficulty: "Medium" as const,
      rating: 4.8,
      distance: "0.5km",
      status: "Active" as const,
      category: "urban",
      createdAt: "2024-01-15",
    },
    {
      title: "Park Adventure",
      description: "Nature-based treasure hunt through Central Park with wildlife clues",
      reward: 150,
      participants: 8,
      maxParticipants: 15,
      timeLeft: "5d 2h",
      difficulty: "Easy" as const,
      rating: 4.6,
      distance: "1.2km",
      status: "Starting Soon" as const,
      category: "nature",
      createdAt: "2024-01-18",
    },
    {
      title: "Historical Quest",
      description: "Discover the city's hidden historical secrets and forgotten landmarks",
      reward: 400,
      participants: 18,
      maxParticipants: 25,
      timeLeft: "1d 8h",
      difficulty: "Hard" as const,
      rating: 4.9,
      distance: "2.1km",
      status: "Ending Soon" as const,
      category: "historical",
      createdAt: "2024-01-12",
    },
    {
      title: "Night Hunter",
      description: "Explore the city after dark with UV light clues and hidden messages",
      reward: 300,
      participants: 5,
      maxParticipants: 12,
      timeLeft: "3d 16h",
      difficulty: "Hard" as const,
      rating: 4.7,
      distance: "1.8km",
      status: "Active" as const,
      category: "mystery",
      createdAt: "2024-01-20",
    },
    {
      title: "Tech Trail",
      description: "QR codes and AR clues lead you through the innovation district",
      reward: 200,
      participants: 15,
      maxParticipants: 20,
      timeLeft: "4d 12h",
      difficulty: "Medium" as const,
      rating: 4.5,
      distance: "0.8km",
      status: "Active" as const,
      category: "tech",
      createdAt: "2024-01-16",
    },
    {
      title: "Riverside Quest",
      description: "Follow the river path solving water-themed puzzles and riddles",
      reward: 180,
      participants: 10,
      maxParticipants: 18,
      timeLeft: "6d 4h",
      difficulty: "Easy" as const,
      rating: 4.4,
      distance: "2.5km",
      status: "Active" as const,
      category: "nature",
      createdAt: "2024-01-14",
    },
  ]

  const filteredHunts = hunts.filter((hunt) => {
    const matchesSearch =
      hunt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hunt.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || hunt.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || hunt.difficulty.toLowerCase() === selectedDifficulty
    const matchesDistance = Number.parseFloat(hunt.distance) <= maxDistance[0]
    const matchesReward = hunt.reward >= minReward[0]

    return matchesSearch && matchesCategory && matchesDifficulty && matchesDistance && matchesReward
  })

  const sortedHunts = [...filteredHunts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case "oldest":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case "reward-high":
        return b.reward - a.reward
      case "reward-low":
        return a.reward - b.reward
      case "distance":
        return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold pixel-text mb-2">Discover Hunts</h1>
          <p className="text-muted-foreground font-mono">Find your next treasure hunting adventure</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center mx-auto">
                <Target className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-primary">{hunts.length}</div>
              <div className="text-xs font-mono text-muted-foreground">Active Hunts</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-accent border border-foreground rounded flex items-center justify-center mx-auto">
                <Users className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-accent">
                {hunts.reduce((sum, hunt) => sum + hunt.participants, 0)}
              </div>
              <div className="text-xs font-mono text-muted-foreground">Active Hunters</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-secondary border border-foreground rounded flex items-center justify-center mx-auto">
                <Coins className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-secondary">
                {hunts.reduce((sum, hunt) => sum + hunt.reward, 0)}
              </div>
              <div className="text-xs font-mono text-muted-foreground">FLOW Available</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center mx-auto">
                <Star className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-lg font-bold pixel-text text-primary">
                {(hunts.reduce((sum, hunt) => sum + hunt.rating, 0) / hunts.length).toFixed(1)}
              </div>
              <div className="text-xs font-mono text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search hunts by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-foreground font-mono"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 border-2 border-foreground font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="reward-high">Highest Reward</SelectItem>
                  <SelectItem value="reward-low">Lowest Reward</SelectItem>
                  <SelectItem value="distance">Nearest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="retro-button bg-background text-foreground"
              >
                <Filter className="w-4 h-4 mr-2" />
                FILTERS
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono font-bold text-sm">CATEGORY</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="border-2 border-foreground font-mono">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="urban">Urban Explorer</SelectItem>
                        <SelectItem value="nature">Nature Adventure</SelectItem>
                        <SelectItem value="historical">Historical Quest</SelectItem>
                        <SelectItem value="mystery">Mystery Hunt</SelectItem>
                        <SelectItem value="tech">Tech Trail</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono font-bold text-sm">DIFFICULTY</label>
                    <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                      <SelectTrigger className="border-2 border-foreground font-mono">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono font-bold text-sm">MAX DISTANCE</label>
                    <div className="space-y-2">
                      <Slider
                        value={maxDistance}
                        onValueChange={setMaxDistance}
                        max={20}
                        min={0.5}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="text-center font-mono text-sm">{maxDistance[0]}km</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono font-bold text-sm">MIN REWARD</label>
                    <div className="space-y-2">
                      <Slider
                        value={minReward}
                        onValueChange={setMinReward}
                        max={500}
                        min={0}
                        step={50}
                        className="w-full"
                      />
                      <div className="text-center font-mono text-sm">{minReward[0]} FLOW</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground font-mono text-sm">
            Showing {sortedHunts.length} of {hunts.length} hunts
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Hunt Grid */}
        {sortedHunts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedHunts.map((hunt, index) => (
              <HuntCard key={index} {...hunt} />
            ))}
          </div>
        ) : (
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-muted border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-bold pixel-text text-lg">No Hunts Found</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Try adjusting your search terms or filters to find more treasure hunts.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedDifficulty("all")
                  setMaxDistance([10])
                  setMinReward([0])
                }}
                className="retro-button"
              >
                CLEAR FILTERS
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Featured Categories */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold pixel-text">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Urban Explorer", icon: MapPin, count: 12, color: "bg-primary" },
              { name: "Nature Adventure", icon: Target, count: 8, color: "bg-accent" },
              { name: "Historical Quest", icon: Clock, count: 6, color: "bg-secondary" },
              { name: "Mystery Hunt", icon: Zap, count: 9, color: "bg-primary" },
              { name: "Tech Trail", icon: Users, count: 4, color: "bg-accent" },
            ].map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.name}
                  className="border-2 border-foreground retro-shadow bg-card hover:transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_oklch(var(--foreground))] transition-all cursor-pointer"
                >
                  <CardContent className="p-4 text-center space-y-3">
                    <div
                      className={`w-12 h-12 ${category.color} border-2 border-foreground rounded-lg flex items-center justify-center mx-auto`}
                    >
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold pixel-text text-sm">{category.name}</h3>
                      <p className="text-muted-foreground font-mono text-xs">{category.count} hunts</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
