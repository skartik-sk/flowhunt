import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Coins, Users, Trophy, Zap, Shield, Gamepad2, ArrowRight, Camera, Clock, Wallet } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <Badge className="retro-button bg-secondary text-secondary-foreground">Tutorial</Badge>
          <h1 className="text-4xl md:text-6xl font-bold pixel-text text-balance">
            How <span className="text-primary">FlowHunt</span>
            <br />
            Works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto text-pretty">
            Master the art of Web3 treasure hunting in just a few simple steps
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-20">
          {/* Step 1: Getting Started */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center">
                  <span className="font-bold pixel-text text-primary-foreground">1</span>
                </div>
                <h2 className="text-3xl font-bold pixel-text">Connect Your Wallet</h2>
              </div>
              <p className="text-lg text-muted-foreground font-mono">
                Start by connecting your Blocto wallet to FlowHunt. This secure connection allows you to receive FLOW
                token rewards and participate in hunts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Secure blockchain authentication</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">No gas fees on Flow network</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Instant setup in seconds</span>
                </div>
              </div>
            </div>
            <Card className="border-4 border-foreground retro-shadow bg-card">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Wallet className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text text-xl">Blocto Wallet</h3>
                  <p className="text-muted-foreground font-mono text-sm">Connected</p>
                </div>
                <Button className="retro-button w-full">CONNECT WALLET</Button>
              </CardContent>
            </Card>
          </div>

          {/* Step 2: Browse Hunts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="border-4 border-foreground retro-shadow bg-card lg:order-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="retro-button bg-accent text-accent-foreground text-xs">HOT</Badge>
                  <span className="font-mono text-sm text-muted-foreground">2.5km away</span>
                </div>
                <h3 className="font-bold pixel-text text-lg">City Center Mystery</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Follow ancient clues through downtown to discover the hidden treasure vault.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-bold pixel-text text-primary">500 FLOW</div>
                    <div className="text-xs font-mono text-muted-foreground">Reward</div>
                  </div>
                  <div>
                    <div className="font-bold pixel-text text-accent">5 Clues</div>
                    <div className="text-xs font-mono text-muted-foreground">Difficulty</div>
                  </div>
                </div>
                <Button className="retro-button w-full">JOIN HUNT</Button>
              </CardContent>
            </Card>
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center">
                  <span className="font-bold pixel-text text-accent-foreground">2</span>
                </div>
                <h2 className="text-3xl font-bold pixel-text">Browse Active Hunts</h2>
              </div>
              <p className="text-lg text-muted-foreground font-mono">
                Explore treasure hunts in your area. Each hunt shows the reward pool, difficulty level, and number of
                participants.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-mono text-sm">Location-based hunt discovery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="font-mono text-sm">Difficulty ratings and rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-mono text-sm">Real-time participant tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Solve Clues */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary border-2 border-foreground rounded-lg flex items-center justify-center">
                  <span className="font-bold pixel-text text-secondary-foreground">3</span>
                </div>
                <h2 className="text-3xl font-bold pixel-text">Solve Clues & Explore</h2>
              </div>
              <p className="text-lg text-muted-foreground font-mono">
                Follow riddles and clues to real-world locations. Use your phone's camera to verify discoveries and
                unlock the next clue in the chain.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-secondary" />
                  <span className="font-mono text-sm">Photo verification at locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="font-mono text-sm">Time-locked clue progression</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-secondary" />
                  <span className="font-mono text-sm">Interactive puzzle solving</span>
                </div>
              </div>
            </div>
            <Card className="border-4 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <Badge className="retro-button bg-secondary text-secondary-foreground text-xs">CLUE 3/5</Badge>
                  <h3 className="font-bold pixel-text">The Ancient Oak</h3>
                </div>
                <div className="bg-muted border-2 border-foreground p-4 rounded">
                  <p className="font-mono text-sm text-center">
                    "Where shadows dance at noon,
                    <br />
                    And roots run deeper than time,
                    <br />
                    Seek the mark of the crescent moon."
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm font-mono">
                  <span>Distance: 0.3km</span>
                  <span className="text-accent">+100 FLOW</span>
                </div>
                <Button className="retro-button w-full">VERIFY LOCATION</Button>
              </CardContent>
            </Card>
          </div>

          {/* Step 4: Earn Rewards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="border-4 border-foreground retro-shadow bg-card lg:order-1">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Trophy className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text text-2xl text-primary">HUNT COMPLETE!</h3>
                  <p className="text-muted-foreground font-mono text-sm">Congratulations, treasure hunter!</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Base Reward</span>
                    <span className="font-bold pixel-text">400 FLOW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Speed Bonus</span>
                    <span className="font-bold pixel-text text-accent">+100 FLOW</span>
                  </div>
                  <div className="border-t-2 border-foreground pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold">Total Earned</span>
                      <span className="font-bold pixel-text text-primary text-xl">500 FLOW</span>
                    </div>
                  </div>
                </div>
                <Button className="retro-button w-full">CLAIM REWARDS</Button>
              </CardContent>
            </Card>
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center">
                  <span className="font-bold pixel-text text-primary-foreground">4</span>
                </div>
                <h2 className="text-3xl font-bold pixel-text">Earn FLOW Rewards</h2>
              </div>
              <p className="text-lg text-muted-foreground font-mono">
                Complete hunts to earn FLOW tokens instantly. Faster completion times earn bonus rewards, and all
                payments are secured by smart contracts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Coins className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Instant FLOW token rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Speed bonuses for quick completion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Smart contract guaranteed payouts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-4 border-foreground retro-shadow bg-primary">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold pixel-text text-primary-foreground">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-lg text-primary-foreground/80 font-mono max-w-2xl mx-auto">
              Join thousands of treasure hunters earning FLOW tokens while exploring the real world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="retro-button bg-background text-foreground">
                START HUNTING NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="retro-button bg-primary text-primary-foreground border-primary-foreground"
              >
                BROWSE HUNTS
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <RetroFooter />
    </div>
  )
}
