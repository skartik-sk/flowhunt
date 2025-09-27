"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Camera, Clock, Coins, CheckCircle, AlertTriangle, Upload, Key, Trophy, Timer } from "lucide-react"

interface ClueLocation {
  id: number
  title: string
  description: string
  latitude: number
  longitude: number
  address: string
  verified: boolean
  photo?: string
  verificationNote?: string
}

const mockHunt = {
  id: "hunt-123",
  title: "Downtown Mystery Hunt",
  description: "A challenging treasure hunt through the city center",
  totalStake: 500,
  yieldEarned: 25.5,
  deadline: "2024-01-15T23:59:59Z",
  status: "expired",
  clues: [
    {
      id: 1,
      title: "City Hall Steps",
      description: "Where democracy meets in our fair city",
      latitude: 40.7128,
      longitude: -74.006,
      address: "City Hall, 1 City Hall Plaza",
      verified: false,
    },
    {
      id: 2,
      title: "Historic Fountain",
      description: "Where coins are wished and dreams are made",
      latitude: 40.7589,
      longitude: -73.9851,
      address: "Central Park, Bethesda Fountain",
      verified: false,
    },
    {
      id: 3,
      title: "Old Library",
      description: "Knowledge keeper of ancient tales",
      latitude: 40.7532,
      longitude: -73.9822,
      address: "New York Public Library, 5th Ave",
      verified: false,
    },
  ] as ClueLocation[],
}

export default function ReclaimHuntPage() {
  const params = useParams()
  const huntId = params.id as string
  const [clues, setClues] = useState<ClueLocation[]>(mockHunt.clues)
  const [currentClue, setCurrentClue] = useState<number>(0)
  const [uploading, setUploading] = useState(false)
  const [verificationNote, setVerificationNote] = useState("")

  const verifiedCount = clues.filter((clue) => clue.verified).length
  const progress = (verifiedCount / clues.length) * 100
  const canReclaim = verifiedCount === clues.length

  const handlePhotoUpload = async (clueId: number) => {
    setUploading(true)
    // Simulate photo upload
    setTimeout(() => {
      setClues((prev) =>
        prev.map((clue) =>
          clue.id === clueId ? { ...clue, verified: true, verificationNote, photo: "/placeholder.jpg" } : clue,
        ),
      )
      setVerificationNote("")
      setUploading(false)

      // Move to next unverified clue
      const nextUnverified = clues.findIndex((clue) => !clue.verified && clue.id !== clueId)
      if (nextUnverified !== -1) {
        setCurrentClue(nextUnverified)
      }
    }, 2000)
  }

  const handleFinalReclaim = async () => {
    // Simulate blockchain transaction
    alert("Hunt reclaimed successfully! Your stake + yield has been returned to your wallet.")
  }

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-destructive border-4 border-foreground rounded-lg flex items-center justify-center retro-shadow">
              <Timer className="w-8 h-8 text-destructive-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold pixel-text">RECLAIM HUNT</h1>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Your hunt has expired. Visit each location to reclaim your stake and yield.
          </p>
        </div>

        {/* Hunt Info */}
        <Card className="border-2 border-foreground retro-shadow bg-card mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="pixel-text text-xl">{mockHunt.title}</CardTitle>
              <Badge className="retro-button bg-destructive text-destructive-foreground">EXPIRED</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground font-mono">{mockHunt.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold pixel-text">{mockHunt.totalStake} FLOW</div>
                  <div className="text-sm text-muted-foreground font-mono">Original Stake</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-bold pixel-text text-accent">+{mockHunt.yieldEarned} FLOW</div>
                  <div className="text-sm text-muted-foreground font-mono">Yield Earned</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-bold pixel-text">{new Date(mockHunt.deadline).toLocaleDateString()}</div>
                  <div className="text-sm text-muted-foreground font-mono">Expired On</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="border-2 border-foreground retro-shadow bg-card mb-8">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold pixel-text text-lg">RECLAIM PROGRESS</h3>
              <span className="font-mono text-sm text-muted-foreground">
                {verifiedCount}/{clues.length} locations verified
              </span>
            </div>

            <Progress value={progress} className="h-3 border border-foreground" />

            {canReclaim && (
              <Alert className="border-2 border-primary bg-primary/10">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription className="font-mono">
                  All locations verified! You can now reclaim your stake and yield.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Clue List */}
          <div className="space-y-4">
            <h3 className="font-bold pixel-text text-xl mb-4">LOCATIONS TO VERIFY</h3>

            {clues.map((clue, index) => (
              <Card
                key={clue.id}
                className={`border-2 border-foreground retro-shadow cursor-pointer transition-all ${
                  currentClue === index ? "bg-primary/10 border-primary" : "bg-card"
                } ${clue.verified ? "opacity-75" : ""}`}
                onClick={() => setCurrentClue(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold pixel-text">{clue.title}</h4>
                    {clue.verified ? (
                      <Badge className="retro-button bg-primary text-primary-foreground text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        VERIFIED
                      </Badge>
                    ) : (
                      <Badge className="retro-button bg-muted text-muted-foreground text-xs">
                        <Key className="w-3 h-3 mr-1" />
                        PENDING
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground font-mono mb-2">{clue.description}</p>

                  <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {clue.address}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Verification Panel */}
          <div className="space-y-6">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  VERIFY LOCATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {clues[currentClue] && (
                  <>
                    <div className="space-y-2">
                      <h4 className="font-bold pixel-text">{clues[currentClue].title}</h4>
                      <p className="text-sm text-muted-foreground font-mono">{clues[currentClue].description}</p>
                      <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {clues[currentClue].address}
                      </div>
                    </div>

                    {!clues[currentClue].verified ? (
                      <div className="space-y-4">
                        <Alert className="border-2 border-accent bg-accent/10">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription className="font-mono text-sm">
                            Visit this location and take a photo to verify your presence. Include any notes about
                            accessibility or changes.
                          </AlertDescription>
                        </Alert>

                        <div className="space-y-2">
                          <label className="text-sm font-mono font-bold">Verification Notes (Optional)</label>
                          <Textarea
                            placeholder="Add any notes about the location, accessibility, or changes..."
                            value={verificationNote}
                            onChange={(e) => setVerificationNote(e.target.value)}
                            className="font-mono text-sm border-2 border-foreground"
                          />
                        </div>

                        <Button
                          onClick={() => handlePhotoUpload(clues[currentClue].id)}
                          disabled={uploading}
                          className="w-full retro-button"
                        >
                          {uploading ? (
                            <>
                              <Upload className="w-4 h-4 mr-2 animate-spin" />
                              UPLOADING PHOTO...
                            </>
                          ) : (
                            <>
                              <Camera className="w-4 h-4 mr-2" />
                              TAKE PHOTO & VERIFY
                            </>
                          )}
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Alert className="border-2 border-primary bg-primary/10">
                          <CheckCircle className="h-4 w-4" />
                          <AlertDescription className="font-mono">Location verified successfully!</AlertDescription>
                        </Alert>

                        {clues[currentClue].verificationNote && (
                          <div className="space-y-2">
                            <label className="text-sm font-mono font-bold">Your Notes:</label>
                            <div className="p-3 bg-muted border-2 border-foreground rounded font-mono text-sm">
                              {clues[currentClue].verificationNote}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            {/* Final Reclaim */}
            {canReclaim && (
              <Card className="border-2 border-primary retro-shadow bg-primary/5">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                    <Trophy className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="font-bold pixel-text text-xl">READY TO RECLAIM</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    All locations verified! Reclaim your stake plus yield earnings.
                  </p>

                  <div className="text-center space-y-1">
                    <div className="text-2xl font-bold pixel-text text-primary">
                      {mockHunt.totalStake + mockHunt.yieldEarned} FLOW
                    </div>
                    <div className="text-sm font-mono text-muted-foreground">
                      {mockHunt.totalStake} FLOW stake + {mockHunt.yieldEarned} FLOW yield
                    </div>
                  </div>

                  <Button onClick={handleFinalReclaim} size="lg" className="retro-button w-full">
                    <Coins className="w-5 h-5 mr-2" />
                    RECLAIM HUNT REWARDS
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
