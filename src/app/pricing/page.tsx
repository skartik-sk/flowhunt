import { RetroHeader } from "@/components/retro-header"
import { RetroFooter } from "@/components/retro-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Crown, Rocket } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <Badge className="retro-button bg-primary text-primary-foreground">Pricing Plans</Badge>
          <h1 className="text-4xl md:text-6xl font-bold pixel-text text-balance">
            Choose Your <span className="text-primary">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto text-pretty">
            Start hunting for free, or unlock premium features to maximize your treasure hunting potential
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-muted border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold pixel-text">EXPLORER</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold pixel-text">FREE</div>
                  <p className="text-muted-foreground font-mono text-sm">Perfect for getting started</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Join up to 3 hunts per month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Basic hunt discovery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Standard FLOW rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Community leaderboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-muted-foreground" />
                  <span className="font-mono text-sm text-muted-foreground">Create hunts</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-muted-foreground" />
                  <span className="font-mono text-sm text-muted-foreground">Premium hunt filters</span>
                </div>
              </div>

              <Button className="w-full retro-button">GET STARTED</Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-4 border-primary retro-shadow bg-card relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="retro-button bg-primary text-primary-foreground">MOST POPULAR</Badge>
            </div>
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Crown className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold pixel-text">HUNTER PRO</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold pixel-text text-primary">10 FLOW</div>
                  <p className="text-muted-foreground font-mono text-sm">per month</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Unlimited hunt participation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Create up to 5 hunts per month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Advanced hunt filters</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Priority hunt notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">15% bonus FLOW rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Detailed analytics dashboard</span>
                </div>
              </div>

              <Button className="w-full retro-button">UPGRADE TO PRO</Button>
            </CardContent>
          </Card>

          {/* Elite Plan */}
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold pixel-text">TREASURE MASTER</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold pixel-text text-accent">25 FLOW</div>
                  <p className="text-muted-foreground font-mono text-sm">per month</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Everything in Hunter Pro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Unlimited hunt creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Custom hunt themes & NFTs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">25% bonus FLOW rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Early access to new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Direct support channel</span>
                </div>
              </div>

              <Button className="w-full retro-button bg-accent text-accent-foreground">GO ELITE</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold pixel-text">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold pixel-text">How do FLOW payments work?</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  All subscription payments are processed through Flow blockchain smart contracts. You can pay with FLOW
                  tokens from your connected wallet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold pixel-text">Can I cancel anytime?</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Yes! You can cancel your subscription at any time. Your premium features will remain active until the
                  end of your current billing period.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold pixel-text">What happens to my created hunts?</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Your created hunts remain active even if you downgrade. However, you won't be able to create new hunts
                  without a premium subscription.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold pixel-text">Are there any hidden fees?</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  No hidden fees! The prices shown include all features. Flow blockchain transactions have minimal gas
                  fees, typically less than $0.01.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <RetroFooter />
    </div>
  )
}
