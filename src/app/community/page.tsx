"use client"

import { useState } from "react"
import Link from "next/link"

interface ForumPost {
  id: number
  title: string
  author: string
  authorAvatar: string
  category: string
  replies: number
  views: number
  lastActivity: string
  isSticky?: boolean
  isLocked?: boolean
}

interface LeaderboardEntry {
  rank: number
  username: string
  avatar: string
  huntsCompleted: number
  totalEarnings: number
  successRate: number
  level: number
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"leaderboard" | "forum" | "events">("leaderboard")

  const leaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      username: "TreasureHunter99",
      avatar: "/pixel-avatar-1.jpg",
      huntsCompleted: 47,
      totalEarnings: 2850,
      successRate: 94,
      level: 15,
    },
    {
      rank: 2,
      username: "CryptoExplorer",
      avatar: "/pixel-avatar-2.jpg",
      huntsCompleted: 42,
      totalEarnings: 2640,
      successRate: 89,
      level: 14,
    },
    {
      rank: 3,
      username: "PixelPirate",
      avatar: "/pixel-avatar-3.jpg",
      huntsCompleted: 38,
      totalEarnings: 2420,
      successRate: 92,
      level: 13,
    },
    {
      rank: 4,
      username: "QuestMaster",
      avatar: "/pixel-avatar-4.jpg",
      huntsCompleted: 35,
      totalEarnings: 2180,
      successRate: 87,
      level: 12,
    },
    {
      rank: 5,
      username: "AdventureSeeker",
      avatar: "/pixel-avatar-5.jpg",
      huntsCompleted: 33,
      totalEarnings: 1980,
      successRate: 91,
      level: 11,
    },
  ]

  const forumPosts: ForumPost[] = [
    {
      id: 1,
      title: "Tips for solving riddles faster",
      author: "RiddleMaster",
      authorAvatar: "/pixel-avatar-6.jpg",
      category: "Strategy",
      replies: 23,
      views: 156,
      lastActivity: "2 hours ago",
      isSticky: true,
    },
    {
      id: 2,
      title: "Best locations for creating hunts",
      author: "HuntCreator",
      authorAvatar: "/pixel-avatar-7.jpg",
      category: "Hunt Creation",
      replies: 18,
      views: 89,
      lastActivity: "4 hours ago",
    },
    {
      id: 3,
      title: "Flow blockchain integration discussion",
      author: "BlockchainDev",
      authorAvatar: "/pixel-avatar-8.jpg",
      category: "Technical",
      replies: 31,
      views: 203,
      lastActivity: "6 hours ago",
    },
    {
      id: 4,
      title: "Weekly hunt recommendations",
      author: "CommunityMod",
      authorAvatar: "/pixel-avatar-9.jpg",
      category: "General",
      replies: 45,
      views: 312,
      lastActivity: "1 day ago",
      isSticky: true,
    },
  ]

  return (
    <div className="min-h-screen bg-retro-dark text-retro-green p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="retro-panel p-6 mb-6">
          <h1 className="text-3xl font-bold text-retro-yellow mb-2">Community Hub</h1>
          <p className="opacity-75">Connect with fellow treasure hunters, share strategies, and compete for glory!</p>
        </div>

        {/* Navigation Tabs */}
        <div className="retro-panel p-4 mb-6">
          <div className="flex space-x-4">
            {[
              { key: "leaderboard", label: "Leaderboard", icon: "🏆" },
              { key: "forum", label: "Forum", icon: "💬" },
              { key: "events", label: "Events", icon: "📅" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded transition-all ${
                  activeTab === tab.key
                    ? "bg-retro-yellow text-retro-dark"
                    : "bg-retro-darker text-retro-green hover:bg-retro-green hover:text-retro-dark"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="retro-panel p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-xl font-bold text-retro-yellow">1,247</div>
                <div className="text-sm opacity-75">Active Hunters</div>
              </div>
              <div className="retro-panel p-4 text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-xl font-bold text-retro-yellow">45,680 FLOW</div>
                <div className="text-sm opacity-75">Total Rewards Distributed</div>
              </div>
              <div className="retro-panel p-4 text-center">
                <div className="text-2xl mb-2">🗺️</div>
                <div className="text-xl font-bold text-retro-yellow">892</div>
                <div className="text-sm opacity-75">Hunts Completed Today</div>
              </div>
            </div>

            <div className="retro-panel p-6">
              <h2 className="text-xl font-bold text-retro-yellow mb-4">Top Treasure Hunters</h2>
              <div className="space-y-4">
                {leaderboard.map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between p-4 bg-retro-darker rounded">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded flex items-center justify-center font-bold ${
                          entry.rank === 1
                            ? "bg-yellow-500 text-black"
                            : entry.rank === 2
                              ? "bg-gray-400 text-black"
                              : entry.rank === 3
                                ? "bg-orange-600 text-white"
                                : "bg-retro-green text-retro-dark"
                        }`}
                      >
                        {entry.rank}
                      </div>
                      <img
                        src={entry.avatar || "/placeholder.svg"}
                        alt={entry.username}
                        className="w-10 h-10 rounded pixelated"
                      />
                      <div>
                        <div className="font-bold text-retro-green">{entry.username}</div>
                        <div className="text-sm opacity-75">Level {entry.level}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-retro-yellow">{entry.totalEarnings} FLOW</div>
                      <div className="text-sm opacity-75">
                        {entry.huntsCompleted} hunts • {entry.successRate}% success
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Forum Tab */}
        {activeTab === "forum" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <select className="px-3 py-2 bg-retro-darker border border-retro-green rounded text-retro-green">
                  <option>All Categories</option>
                  <option>Strategy</option>
                  <option>Hunt Creation</option>
                  <option>Technical</option>
                  <option>General</option>
                </select>
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="px-3 py-2 bg-retro-darker border border-retro-green rounded text-retro-green"
                />
              </div>
              <button className="retro-button">New Post</button>
            </div>

            <div className="retro-panel p-6">
              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 bg-retro-darker rounded hover:bg-opacity-80 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={post.authorAvatar || "/placeholder.svg"}
                        alt={post.author}
                        className="w-8 h-8 rounded pixelated"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          {post.isSticky && <span className="text-retro-yellow text-sm">📌</span>}
                          {post.isLocked && <span className="text-red-400 text-sm">🔒</span>}
                          <Link
                            href={`/community/forum/${post.id}`}
                            className="font-bold text-retro-green hover:text-retro-yellow"
                          >
                            {post.title}
                          </Link>
                        </div>
                        <div className="text-sm opacity-75">
                          by {post.author} in {post.category} • {post.lastActivity}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-retro-green">{post.replies} replies</div>
                      <div className="opacity-75">{post.views} views</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="retro-panel p-6">
              <h2 className="text-xl font-bold text-retro-yellow mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="p-4 bg-retro-darker rounded">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-retro-green">Weekly Challenge: Downtown Explorer</h3>
                    <span className="text-sm bg-retro-yellow text-retro-dark px-2 py-1 rounded">LIVE</span>
                  </div>
                  <p className="text-sm opacity-75 mb-2">Complete 5 downtown hunts to win bonus rewards</p>
                  <div className="text-sm">
                    <span className="text-retro-purple">Ends in: 3 days, 14 hours</span>
                    <span className="ml-4 text-retro-yellow">Prize Pool: 500 FLOW</span>
                  </div>
                </div>

                <div className="p-4 bg-retro-darker rounded">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-retro-green">Community Hunt Creation Contest</h3>
                    <span className="text-sm bg-retro-green text-retro-dark px-2 py-1 rounded">UPCOMING</span>
                  </div>
                  <p className="text-sm opacity-75 mb-2">Design the most creative treasure hunt and win big!</p>
                  <div className="text-sm">
                    <span className="text-retro-purple">Starts in: 1 week</span>
                    <span className="ml-4 text-retro-yellow">Prize Pool: 1,000 FLOW</span>
                  </div>
                </div>

                <div className="p-4 bg-retro-darker rounded">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-retro-green">Monthly Leaderboard Reset</h3>
                    <span className="text-sm bg-retro-purple text-white px-2 py-1 rounded">SCHEDULED</span>
                  </div>
                  <p className="text-sm opacity-75 mb-2">New month, new chances to climb the leaderboard!</p>
                  <div className="text-sm">
                    <span className="text-retro-purple">Next reset: 2 weeks</span>
                    <span className="ml-4 text-retro-yellow">Top 10 get special badges</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="retro-panel p-6">
              <h2 className="text-xl font-bold text-retro-yellow mb-4">Past Events</h2>
              <div className="space-y-3">
                <div className="p-3 bg-retro-darker rounded opacity-75">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Holiday Hunt Spectacular</span>
                    <span className="text-sm text-retro-purple">Completed</span>
                  </div>
                  <div className="text-sm opacity-75">Winner: TreasureHunter99 • Prize: 750 FLOW</div>
                </div>
                <div className="p-3 bg-retro-darker rounded opacity-75">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Speed Hunt Championship</span>
                    <span className="text-sm text-retro-purple">Completed</span>
                  </div>
                  <div className="text-sm opacity-75">Winner: CryptoExplorer • Prize: 600 FLOW</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
