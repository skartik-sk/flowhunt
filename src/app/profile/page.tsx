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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { WalletConnect } from "@/components/wallet-connect"
import { useAuth } from "@/hooks/use-auth"
import {
  User,
  MapPin,
  Calendar,
  Trophy,
  Coins,
  Settings,
  Bell,
  Shield,
  Eye,
  Smartphone,
  Save,
  Edit,
} from "lucide-react"

export default function ProfilePage() {
  const { user, isLoading, updateUser } = useAuth()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    bio: "",
    location: "",
  })
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    locationSharing: true,
    profileVisibility: true,
  })

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        bio: "Passionate treasure hunter exploring the world one clue at a time!",
        location: "San Francisco, CA",
      })
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary border-2 border-foreground rounded-lg flex items-center justify-center mx-auto animate-pulse">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="font-mono">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleSave = () => {
    updateUser({
      username: formData.username,
      email: formData.email,
    })
    setIsEditing(false)
  }

  const handleWalletConnect = (address: string) => {
    updateUser({ walletAddress: address })
  }

  const handleWalletDisconnect = () => {
    updateUser({ walletAddress: undefined })
  }

  return (
    <div className="min-h-screen bg-background">
      <RetroHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="border-2 border-foreground retro-shadow bg-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-24 h-24 border-4 border-foreground">
                  <AvatarFallback className="bg-primary text-primary-foreground font-mono font-bold text-2xl">
                    {user.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold pixel-text">{user.username}</h1>
                    <p className="text-muted-foreground font-mono">{formData.bio}</p>
                    <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                      <div className="flex items-center gap-1 text-sm font-mono">
                        <MapPin className="w-4 h-4 text-primary" />
                        {formData.location}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-mono">
                        <Calendar className="w-4 h-4 text-accent" />
                        Joined Dec 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge className="retro-button bg-primary text-primary-foreground">TREASURE HUNTER</Badge>
                    <Badge className="retro-button bg-accent text-accent-foreground">TOP 50</Badge>
                    <Badge className="retro-button bg-secondary text-secondary-foreground">VERIFIED</Badge>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold pixel-text text-primary">23</div>
                      <div className="text-xs font-mono text-muted-foreground">Hunts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold pixel-text text-accent">1.2K</div>
                      <div className="text-xs font-mono text-muted-foreground">FLOW</div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    className="retro-button bg-background text-foreground"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    {isEditing ? "CANCEL" : "EDIT PROFILE"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted border-2 border-foreground">
            <TabsTrigger value="overview" className="font-mono font-bold">
              OVERVIEW
            </TabsTrigger>
            <TabsTrigger value="edit" className="font-mono font-bold">
              EDIT
            </TabsTrigger>
            <TabsTrigger value="wallet" className="font-mono font-bold">
              WALLET
            </TabsTrigger>
            <TabsTrigger value="settings" className="font-mono font-bold">
              SETTINGS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardHeader>
                  <CardTitle className="pixel-text flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary border border-foreground rounded flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-mono text-sm font-bold">Speed Demon</p>
                        <p className="text-muted-foreground font-mono text-xs">Complete 5 hunts under 1 hour</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent border border-foreground rounded flex items-center justify-center">
                        <Coins className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-mono text-sm font-bold">Treasure Collector</p>
                        <p className="text-muted-foreground font-mono text-xs">Earn 1000+ FLOW tokens</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground retro-shadow bg-card">
                <CardHeader>
                  <CardTitle className="pixel-text flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Hunt Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">Success Rate</span>
                      <span className="font-bold pixel-text text-primary">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">Avg Completion Time</span>
                      <span className="font-bold pixel-text text-accent">2h 15m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">Favorite Difficulty</span>
                      <span className="font-bold pixel-text text-secondary">Medium</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">Cities Explored</span>
                      <span className="font-bold pixel-text">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="edit" className="space-y-6">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text">Edit Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="font-mono font-bold text-sm">
                      USERNAME
                    </Label>
                    <Input
                      id="username"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="border-2 border-foreground font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono font-bold text-sm">
                      EMAIL
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-2 border-foreground font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="font-mono font-bold text-sm">
                    LOCATION
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="border-2 border-foreground font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="font-mono font-bold text-sm">
                    BIO
                  </Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="border-2 border-foreground font-mono min-h-[100px]"
                    placeholder="Tell other hunters about yourself..."
                  />
                </div>

                <Button onClick={handleSave} className="retro-button">
                  <Save className="w-4 h-4 mr-2" />
                  SAVE CHANGES
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text">Wallet Connection</CardTitle>
              </CardHeader>
              <CardContent>
                {user.walletAddress ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted border-2 border-foreground rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary border-2 border-foreground rounded flex items-center justify-center">
                          <Shield className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-bold pixel-text">Wallet Connected</p>
                          <p className="text-muted-foreground font-mono text-sm">{user.walletAddress}</p>
                        </div>
                      </div>
                      <Button
                        onClick={handleWalletDisconnect}
                        variant="outline"
                        className="retro-button bg-background text-foreground"
                      >
                        DISCONNECT
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted border border-foreground rounded">
                        <div className="text-2xl font-bold pixel-text text-primary">1,247.5</div>
                        <div className="text-sm font-mono text-muted-foreground">FLOW Balance</div>
                      </div>
                      <div className="text-center p-4 bg-muted border border-foreground rounded">
                        <div className="text-2xl font-bold pixel-text text-accent">23</div>
                        <div className="text-sm font-mono text-muted-foreground">Hunt NFTs</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <WalletConnect onConnect={handleWalletConnect} />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-2 border-foreground retro-shadow bg-card">
              <CardHeader>
                <CardTitle className="pixel-text flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-mono font-bold text-sm">Email Notifications</p>
                        <p className="text-muted-foreground font-mono text-xs">Receive hunt updates via email</p>
                      </div>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-mono font-bold text-sm">Push Notifications</p>
                        <p className="text-muted-foreground font-mono text-xs">Get notified about nearby hunts</p>
                      </div>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="font-mono font-bold text-sm">Location Sharing</p>
                        <p className="text-muted-foreground font-mono text-xs">
                          Share location for hunt recommendations
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={settings.locationSharing}
                      onCheckedChange={(checked) => setSettings({ ...settings, locationSharing: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-mono font-bold text-sm">Public Profile</p>
                        <p className="text-muted-foreground font-mono text-xs">Make your profile visible to others</p>
                      </div>
                    </div>
                    <Switch
                      checked={settings.profileVisibility}
                      onCheckedChange={(checked) => setSettings({ ...settings, profileVisibility: checked })}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-foreground">
                  <Button variant="destructive" className="retro-button bg-destructive text-destructive-foreground">
                    DELETE ACCOUNT
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <RetroFooter />
    </div>
  )
}
