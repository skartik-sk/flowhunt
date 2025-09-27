"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useAuth } from "@/hooks/use-auth"
import { MapPin, Coins, Clock, Plus, Trash2, Eye, Target, Zap, Shield, ArrowRight, ArrowLeft } from "lucide-react"

interface Clue {
  id: string
  title: string
  description: string
  riddle: string
  location: {
    lat: number
    lng: number
    address: string
  }
  unlockDelay: number // hours
  reward: number
  verificationMethod: "photo" | "qr" | "manual"
}

export default function CreateHuntPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isCreating, setIsCreating] = useState(false)

  // Hunt basic info
  const [huntData, setHuntData] = useState({
    title: "",
    description: "",
    difficulty: "medium",
    duration: 7, // days
    maxParticipants: 20,
    stakeAmount: 100,
    category: "urban",
  })

  // Clues data
  const [clues, setClues] = useState<Clue[]>([
    {
      id: "1",
      title: "Starting Point",
      description: "The adventure begins here",
      riddle: "Where the city's heart beats strongest, seek the guardian of time.",
      location: {
        lat: 37.7749,
        lng: -122.4194,
        address: "Union Square, San Francisco, CA",
      },
      unlockDelay: 0,
      reward: 50,
      verificationMethod: "photo",
    },
  ])

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
            <Plus className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="font-mono">Loading hunt creator...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const addClue = () => {
    const newClue: Clue = {
      id: Date.now().toString(),
      title: `Clue ${clues.length + 1}`,
      description: "",
      riddle: "",
      location: {
        lat: 37.7749,
        lng: -122.4194,
        address: "",
      },
      unlockDelay: clues.length * 24, // 24 hours per clue
      reward: 50,
      verificationMethod: "photo",
    }
    setClues([...clues, newClue])
  }

  const removeClue = (id: string) => {
    if (clues.length > 1) {
      setClues(clues.filter((clue) => clue.id !== id))
    }
  }

  const updateClue = (id: string, updates: Partial<Clue>) => {
    setClues(clues.map((clue) => (clue.id === id ? { ...clue, ...updates } : clue)))
  }

  const handleCreateHunt = async () => {
    setIsCreating(true)
    try {
      // Simulate hunt creation process
      await new Promise((resolve) => setTimeout(resolve, 3000))
      router.push("/dashboard")
    } catch (error) {
      console.error("Failed to create hunt:", error)
    } finally {
      setIsCreating(false)
    }
  }

  const steps = [
    { title: "Basic Info", icon: Target },
    { title: "Clues & Locations", icon: MapPin },
    { title: "Rewards & Stakes", icon: Coins },
    { title: "Review & Launch", icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold pixel-text mb-2">Create New Hunt</h1>
          <p className="text-muted-foreground font-mono">Design an epic treasure hunt for the FlowHunt community</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = index === currentStep
              const isCompleted = index < currentStep

              return (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-12 h-12 border-2 border-foreground rounded-lg flex items-center justify-center ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : isCompleted
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className={`font-mono text-sm ${isActive ? "font-bold" : ""}`}>{step.title}</p>
                  </div>
                  {index < steps.length - 1 && <div className="w-8 h-0.5 bg-border mx-4 hidden md:block"></div>}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-8">
          {/* Step 1: Basic Info */}
          {currentStep === 0 && (
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text">Hunt Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="font-mono font-bold text-sm">
                      HUNT TITLE
                    </Label>
                    <Input
                      id="title"
                      value={huntData.title}
                      onChange={(e) => setHuntData({ ...huntData, title: e.target.value })}
                      placeholder="Downtown Mystery Adventure"
                      className="border-2 border-foreground font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="font-mono font-bold text-sm">
                      CATEGORY
                    </Label>
                    <Select
                      value={huntData.category}
                      onValueChange={(value) => setHuntData({ ...huntData, category: value })}
                    >
                      <SelectTrigger className="border-2 border-foreground font-mono">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urban">Urban Explorer</SelectItem>
                        <SelectItem value="nature">Nature Adventure</SelectItem>
                        <SelectItem value="historical">Historical Quest</SelectItem>
                        <SelectItem value="mystery">Mystery Hunt</SelectItem>
                        <SelectItem value="educational">Educational Tour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="font-mono font-bold text-sm">
                    DESCRIPTION
                  </Label>
                  <Textarea
                    id="description"
                    value={huntData.description}
                    onChange={(e) => setHuntData({ ...huntData, description: e.target.value })}
                    placeholder="Describe your hunt adventure..."
                    className="border-2 border-foreground font-mono min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="font-mono font-bold text-sm">DIFFICULTY</Label>
                    <Select
                      value={huntData.difficulty}
                      onValueChange={(value) => setHuntData({ ...huntData, difficulty: value })}
                    >
                      <SelectTrigger className="border-2 border-foreground font-mono">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-mono font-bold text-sm">DURATION (DAYS)</Label>
                    <div className="space-y-2">
                      <Slider
                        value={[huntData.duration]}
                        onValueChange={(value) => setHuntData({ ...huntData, duration: value[0] })}
                        max={30}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center font-mono text-sm">{huntData.duration} days</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-mono font-bold text-sm">MAX PARTICIPANTS</Label>
                    <div className="space-y-2">
                      <Slider
                        value={[huntData.maxParticipants]}
                        onValueChange={(value) => setHuntData({ ...huntData, maxParticipants: value[0] })}
                        max={100}
                        min={5}
                        step={5}
                        className="w-full"
                      />
                      <div className="text-center font-mono text-sm">{huntData.maxParticipants} hunters</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Clues & Locations */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold pixel-text">Design Your Clues</h2>
                <Button onClick={addClue} className="retro-button">
                  <Plus className="w-4 h-4 mr-2" />
                  ADD CLUE
                </Button>
              </div>

              {clues.map((clue, index) => (
                <Card key={clue.id} className="border-2 border-foreground retro-shadow bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="pixel-text flex items-center gap-2">
                        <Badge className="retro-button bg-primary text-primary-foreground text-xs">
                          CLUE {index + 1}
                        </Badge>
                        {clue.title}
                      </CardTitle>
                      {clues.length > 1 && (
                        <Button
                          onClick={() => removeClue(clue.id)}
                          variant="destructive"
                          size="sm"
                          className="retro-button bg-destructive text-destructive-foreground"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-mono font-bold text-sm">CLUE TITLE</Label>
                        <Input
                          value={clue.title}
                          onChange={(e) => updateClue(clue.id, { title: e.target.value })}
                          className="border-2 border-foreground font-mono"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-mono font-bold text-sm">VERIFICATION METHOD</Label>
                        <Select
                          value={clue.verificationMethod}
                          onValueChange={(value: "photo" | "qr" | "manual") =>
                            updateClue(clue.id, { verificationMethod: value })
                          }
                        >
                          <SelectTrigger className="border-2 border-foreground font-mono">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="photo">Photo Verification</SelectItem>
                            <SelectItem value="qr">QR Code Scan</SelectItem>
                            <SelectItem value="manual">Manual Check-in</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-mono font-bold text-sm">RIDDLE / CLUE TEXT</Label>
                      <Textarea
                        value={clue.riddle}
                        onChange={(e) => updateClue(clue.id, { riddle: e.target.value })}
                        placeholder="Write your riddle or clue here..."
                        className="border-2 border-foreground font-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="font-mono font-bold text-sm">LOCATION ADDRESS</Label>
                      <Input
                        value={clue.location.address}
                        onChange={(e) =>
                          updateClue(clue.id, {
                            location: { ...clue.location, address: e.target.value },
                          })
                        }
                        placeholder="123 Main St, City, State"
                        className="border-2 border-foreground font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-mono font-bold text-sm">UNLOCK DELAY (HOURS)</Label>
                        <div className="space-y-2">
                          <Slider
                            value={[clue.unlockDelay]}
                            onValueChange={(value) => updateClue(clue.id, { unlockDelay: value[0] })}
                            max={168}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                          <div className="text-center font-mono text-sm">{clue.unlockDelay}h</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-mono font-bold text-sm">CLUE REWARD (FLOW)</Label>
                        <div className="space-y-2">
                          <Slider
                            value={[clue.reward]}
                            onValueChange={(value) => updateClue(clue.id, { reward: value[0] })}
                            max={200}
                            min={10}
                            step={10}
                            className="w-full"
                          />
                          <div className="text-center font-mono text-sm">{clue.reward} FLOW</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Step 3: Rewards & Stakes */}
          {currentStep === 2 && (
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text">Rewards & Staking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold pixel-text text-lg">Stake Configuration</h3>
                    <div className="space-y-2">
                      <Label className="font-mono font-bold text-sm">STAKE AMOUNT (FLOW)</Label>
                      <div className="space-y-2">
                        <Slider
                          value={[huntData.stakeAmount]}
                          onValueChange={(value) => setHuntData({ ...huntData, stakeAmount: value[0] })}
                          max={1000}
                          min={50}
                          step={50}
                          className="w-full"
                        />
                        <div className="text-center font-mono text-sm">{huntData.stakeAmount} FLOW</div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted border border-foreground rounded">
                      <p className="font-mono text-sm">
                        This amount will be locked in a smart contract. If hunters complete the quest, they earn the
                        rewards. If not, you can reclaim your stake plus any yield earned.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold pixel-text text-lg">Reward Breakdown</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Total Clue Rewards</span>
                        <span className="font-bold pixel-text text-primary">
                          {clues.reduce((sum, clue) => sum + clue.reward, 0)} FLOW
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Completion Bonus</span>
                        <span className="font-bold pixel-text text-accent">
                          {huntData.stakeAmount - clues.reduce((sum, clue) => sum + clue.reward, 0)} FLOW
                        </span>
                      </div>
                      <div className="border-t border-foreground pt-2">
                        <div className="flex justify-between items-center">
                          <span className="font-mono font-bold">Total Reward Pool</span>
                          <span className="font-bold pixel-text text-secondary text-lg">
                            {huntData.stakeAmount} FLOW
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border border-foreground bg-muted">
                    <CardContent className="p-4 text-center space-y-2">
                      <Shield className="w-8 h-8 mx-auto text-primary" />
                      <h4 className="font-bold pixel-text text-sm">SECURE</h4>
                      <p className="font-mono text-xs text-muted-foreground">Smart contract protected</p>
                    </CardContent>
                  </Card>

                  <Card className="border border-foreground bg-muted">
                    <CardContent className="p-4 text-center space-y-2">
                      <Coins className="w-8 h-8 mx-auto text-accent" />
                      <h4 className="font-bold pixel-text text-sm">YIELD</h4>
                      <p className="font-mono text-xs text-muted-foreground">Earn interest while locked</p>
                    </CardContent>
                  </Card>

                  <Card className="border border-foreground bg-muted">
                    <CardContent className="p-4 text-center space-y-2">
                      <Clock className="w-8 h-8 mx-auto text-secondary" />
                      <h4 className="font-bold pixel-text text-sm">RECLAIM</h4>
                      <p className="font-mono text-xs text-muted-foreground">Get back if unsolved</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Review & Launch */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardHeader>
                  <CardTitle className="pixel-text">Hunt Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-bold pixel-text text-lg">{huntData.title}</h3>
                      <p className="text-muted-foreground font-mono text-sm">{huntData.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="retro-button bg-primary text-primary-foreground text-xs">
                          {huntData.difficulty.toUpperCase()}
                        </Badge>
                        <Badge className="retro-button bg-accent text-accent-foreground text-xs">
                          {huntData.category.toUpperCase()}
                        </Badge>
                        <Badge className="retro-button bg-secondary text-secondary-foreground text-xs">
                          {clues.length} CLUES
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-muted border border-foreground rounded">
                          <div className="text-lg font-bold pixel-text text-primary">{huntData.stakeAmount}</div>
                          <div className="text-xs font-mono text-muted-foreground">FLOW Reward</div>
                        </div>
                        <div className="text-center p-3 bg-muted border border-foreground rounded">
                          <div className="text-lg font-bold pixel-text text-accent">{huntData.duration}</div>
                          <div className="text-xs font-mono text-muted-foreground">Days Active</div>
                        </div>
                      </div>
                      <div className="text-center p-3 bg-muted border border-foreground rounded">
                        <div className="text-lg font-bold pixel-text text-secondary">{huntData.maxParticipants}</div>
                        <div className="text-xs font-mono text-muted-foreground">Max Hunters</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold pixel-text">Clue Chain Preview</h4>
                    <div className="space-y-2">
                      {clues.map((clue, index) => (
                        <div
                          key={clue.id}
                          className="flex items-center gap-3 p-3 bg-muted border border-foreground rounded"
                        >
                          <Badge className="retro-button bg-primary text-primary-foreground text-xs">{index + 1}</Badge>
                          <div className="flex-1">
                            <p className="font-mono text-sm font-bold">{clue.title}</p>
                            <p className="font-mono text-xs text-muted-foreground">{clue.location.address}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-mono text-xs">+{clue.reward} FLOW</p>
                            <p className="font-mono text-xs text-muted-foreground">{clue.unlockDelay}h delay</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-primary retro-shadow bg-primary">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-2xl font-bold pixel-text text-primary-foreground">Ready to Launch?</h3>
                  <p className="text-primary-foreground/80 font-mono">
                    Your hunt will be deployed to the Flow blockchain and made available to hunters worldwide.
                  </p>
                  <Button
                    onClick={handleCreateHunt}
                    disabled={isCreating}
                    size="lg"
                    className="retro-button bg-background text-foreground"
                  >
                    {isCreating ? "DEPLOYING TO BLOCKCHAIN..." : "LAUNCH HUNT"}
                    {!isCreating && <Zap className="w-5 h-5 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            variant="outline"
            className="retro-button bg-background text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            PREVIOUS
          </Button>

          <div className="flex items-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full border border-foreground ${
                  index === currentStep ? "bg-primary" : index < currentStep ? "bg-accent" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {currentStep < steps.length - 1 ? (
            <Button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              className="retro-button"
            >
              NEXT
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button variant="outline" className="retro-button bg-background text-foreground">
              <Eye className="w-4 h-4 mr-2" />
              PREVIEW
            </Button>
          )}
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
