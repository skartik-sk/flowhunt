import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, Star, Coins } from "lucide-react"

interface HuntCardProps {
  title: string
  description: string
  reward: number
  participants: number
  maxParticipants: number
  timeLeft: string
  difficulty: "Easy" | "Medium" | "Hard"
  rating: number
  distance: string
  status: "Active" | "Starting Soon" | "Ending Soon"
}

export function HuntCard({
  title,
  description,
  reward,
  participants,
  maxParticipants,
  timeLeft,
  difficulty,
  rating,
  distance,
  status,
}: HuntCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-primary text-primary-foreground"
      case "Starting Soon":
        return "bg-accent text-accent-foreground"
      case "Ending Soon":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-primary text-primary-foreground"
      case "Medium":
        return "bg-accent text-accent-foreground"
      case "Hard":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <Card className="border-2 border-foreground retro-shadow bg-card hover:transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_oklch(var(--foreground))] transition-all">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Badge className={`retro-button text-xs ${getStatusColor(status)}`}>{status.toUpperCase()}</Badge>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-current" />
            <span className="font-mono text-sm">{rating}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold pixel-text text-lg">{title}</h3>
          <p className="text-muted-foreground font-mono text-sm line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center gap-4 text-sm font-mono">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{distance}</span>
          </div>
          <Badge className={`retro-button text-xs ${getDifficultyColor(difficulty)}`}>{difficulty.toUpperCase()}</Badge>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-mono text-sm">Reward Pool</span>
            <div className="flex items-center gap-1">
              <Coins className="w-4 h-4 text-accent" />
              <span className="font-bold pixel-text text-primary">{reward} FLOW</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-sm">Hunters</span>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-secondary" />
              <span className="font-bold pixel-text">
                {participants}/{maxParticipants}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-sm">Time Left</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent" />
              <span className="font-bold pixel-text text-accent">{timeLeft}</span>
            </div>
          </div>
        </div>

        <Button className="w-full retro-button">JOIN HUNT</Button>
      </CardContent>
    </Card>
  )
}
