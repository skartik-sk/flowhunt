import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Shield, Gamepad2, ArrowRight, Target, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <Badge className="retro-button bg-accent text-accent-foreground">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold pixel-text text-balance">
            About <span className="text-primary">FlowHunt</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-3xl mx-auto text-pretty">
            We're building the future of real-world gaming by combining blockchain technology with the timeless thrill
            of treasure hunting.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold pixel-text">Our Mission</h2>
              <p className="text-lg text-muted-foreground font-mono">
                FlowHunt exists to bridge the digital and physical worlds, creating meaningful adventures that reward
                exploration and community building.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary border-2 border-foreground rounded flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Gamify Real Life</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Transform everyday locations into exciting gaming experiences with blockchain-powered rewards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent border-2 border-foreground rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Connect Communities</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Bring people together through shared adventures and collaborative treasure hunting experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary border-2 border-foreground rounded flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Reward Adventure</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Make exploration financially rewarding while encouraging people to discover their surroundings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="border-4 border-foreground retro-shadow bg-card w-80 h-96">
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                    <Gamepad2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold pixel-text text-xl">FlowHunt Platform</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Active Hunters</span>
                    <span className="font-bold pixel-text text-primary">5,892</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Hunts Created</span>
                    <span className="font-bold pixel-text text-accent">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">FLOW Distributed</span>
                    <span className="font-bold pixel-text text-secondary">12.5K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Cities Active</span>
                    <span className="font-bold pixel-text">47</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full retro-button">JOIN COMMUNITY</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold pixel-text">Our Values</h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
              The principles that guide everything we build at FlowHunt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold pixel-text">SECURITY FIRST</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  All funds and rewards are protected by audited smart contracts on the Flow blockchain.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold pixel-text">COMMUNITY DRIVEN</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Our platform is built by and for treasure hunters, with community feedback driving development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold pixel-text">INNOVATION</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  We're constantly pushing the boundaries of what's possible with Web3 gaming and real-world
                  interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold pixel-text">Built by Adventurers</h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
              Our team combines expertise in blockchain technology, game design, and community building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <span className="font-bold pixel-text text-2xl text-primary-foreground">AK</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Alex Kim</h3>
                  <p className="text-muted-foreground font-mono text-sm">Founder & CEO</p>
                  <p className="text-muted-foreground font-mono text-xs">
                    Former blockchain engineer at Flow. Passionate about gamifying real-world experiences.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <span className="font-bold pixel-text text-2xl text-accent-foreground">SM</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Sarah Martinez</h3>
                  <p className="text-muted-foreground font-mono text-sm">CTO</p>
                  <p className="text-muted-foreground font-mono text-xs">
                    Full-stack developer with 8 years in Web3. Expert in smart contract security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-secondary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <span className="font-bold pixel-text text-2xl text-secondary-foreground">JL</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold pixel-text">Jordan Lee</h3>
                  <p className="text-muted-foreground font-mono text-sm">Head of Design</p>
                  <p className="text-muted-foreground font-mono text-xs">
                    Game designer from indie gaming background. Creates engaging user experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-4 border-foreground retro-shadow bg-secondary">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold pixel-text text-secondary-foreground">
              Join the FlowHunt Revolution
            </h2>
            <p className="text-lg text-secondary-foreground/80 font-mono max-w-2xl mx-auto">
              Be part of the community that's redefining how we explore and interact with the world around us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="retro-button bg-background text-foreground">
                START YOUR JOURNEY
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="retro-button bg-secondary text-secondary-foreground border-secondary-foreground"
              >
                LEARN MORE
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <RetroFooter />
    </div>
  )
}
