import Link from "next/link"
import { Gamepad2, Twitter, Github, Diamond as Discord } from "lucide-react"

export function RetroFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary border-2 border-foreground flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="pixel-text text-xl">FLOWHUNT</span>
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              Web3 treasure hunts that blend real-world exploration with blockchain rewards.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-sm uppercase tracking-wider">Platform</h3>
            <div className="space-y-2">
              <Link href="/hunts" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                Browse Hunts
              </Link>
              <Link href="/create" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                Create Hunt
              </Link>
              <Link href="/leaderboard" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                Leaderboard
              </Link>
              <Link href="/how-it-works" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                How It Works
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-sm uppercase tracking-wider">Community</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                Blog
              </Link>
              <Link href="/docs" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                Documentation
              </Link>
              <Link href="/support" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                Support
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary font-mono text-sm">
                Terms
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-sm uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-8 h-8 bg-secondary border-2 border-foreground flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-secondary border-2 border-foreground flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Discord className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-secondary border-2 border-foreground flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-foreground mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2025 FlowHunt. Built on Flow blockchain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
