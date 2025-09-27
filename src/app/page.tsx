import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Coins, Users, Trophy, Zap, Shield, Gamepad2, ArrowRight, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Hero Device */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-48 bg-muted border-4 border-foreground rounded-lg flex items-center justify-center retro-shadow">
                <div className="w-48 h-32 bg-primary border-2 border-foreground rounded flex items-center justify-center">
                  <div className="text-primary-foreground font-mono text-xs space-y-1 text-center">
                    <div className="flex justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>TREASURE</div>
                    <div>LOCATED!</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent border-2 border-foreground rounded-full flex items-center justify-center">
                <Coins className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6">
            <Badge className="retro-button bg-secondary text-secondary-foreground">Web3 × Real World</Badge>

            <h1 className="text-4xl md:text-6xl font-bold pixel-text text-balance">
              The Unmistakably
              <br />
              <span className="text-primary">Original</span> Treasure
              <br />
              <span className="text-accent">Hunt</span> Platform
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto text-pretty">
              Discover crypto treasures in the real world. Create blockchain-powered treasure hunts, solve clues, and
              earn FLOW tokens while exploring your city.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="retro-button text-lg px-8">
              START HUNTING
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="retro-button bg-background text-foreground text-lg px-8">
              EXPLORE HUNTS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold pixel-text text-primary">1,247</div>
              <div className="text-sm font-mono text-muted-foreground">Active Hunts</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold pixel-text text-accent">5,892</div>
              <div className="text-sm font-mono text-muted-foreground">Hunters</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold pixel-text text-secondary">12.5K</div>
              <div className="text-sm font-mono text-muted-foreground">FLOW Earned</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold pixel-text text-primary">98%</div>
              <div className="text-sm font-mono text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold pixel-text">How FlowHunt Works</h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
              Three simple steps to start your treasure hunting adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold pixel-text">1. DISCOVER</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Browse active treasure hunts in your area. Each hunt has clues, rewards, and difficulty levels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Gamepad2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold pixel-text">2. SOLVE</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Follow clues to real-world locations. Use your phone to verify your discoveries and unlock rewards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Coins className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold pixel-text">3. EARN</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Complete hunts to earn FLOW tokens. The faster you solve, the bigger your reward!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="retro-button bg-accent text-accent-foreground">Why FlowHunt?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold pixel-text">
                Real Adventure.
                <br />
                Real Rewards.
              </h2>
              <p className="text-lg text-muted-foreground font-mono">
                FlowHunt combines the thrill of treasure hunting with the security and rewards of blockchain technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary border-2 border-foreground rounded flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Blockchain Security</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    All rewards are secured by Flow blockchain smart contracts. Your earnings are guaranteed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent border-2 border-foreground rounded flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Instant Rewards</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Complete hunts and receive FLOW tokens instantly. No waiting, no fees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary border-2 border-foreground rounded flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Community Driven</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Join a global community of treasure hunters. Create, share, and discover together.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="retro-button">
              JOIN THE HUNT
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Card className="border-4 border-foreground retro-shadow bg-card w-80 h-96">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className="retro-button bg-primary text-primary-foreground text-xs">ACTIVE</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="font-mono text-sm">4.8</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold pixel-text text-lg">Downtown Mystery</h3>
                    <p className="text-muted-foreground font-mono text-sm">
                      Solve 5 clues around the city center to unlock the treasure vault.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">Reward Pool</span>
                      <span className="font-bold pixel-text text-primary">250 FLOW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">Hunters</span>
                      <span className="font-bold pixel-text">12/20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">Time Left</span>
                      <span className="font-bold pixel-text text-accent">2d 14h</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full retro-button">JOIN HUNT</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent border-2 border-foreground rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RetroFooter />
    </div>
  )
}
