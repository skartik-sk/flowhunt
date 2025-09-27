"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"

interface Reply {
  id: number
  author: string
  authorAvatar: string
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
}

export default function ForumPostPage() {
  const params = useParams()
  const router = useRouter()
  const [newReply, setNewReply] = useState("")
  const [replies, setReplies] = useState<Reply[]>([
    {
      id: 1,
      author: "RiddleMaster",
      authorAvatar: "/pixel-avatar-6.jpg",
      content:
        "Here are some proven strategies I've developed over 50+ hunts:\n\n1. Always read the riddle multiple times\n2. Look for wordplay and double meanings\n3. Research the area's history if stuck\n4. Use Google Street View to scout locations\n\nHope this helps fellow hunters!",
      timestamp: "2 hours ago",
      likes: 15,
      isLiked: false,
    },
    {
      id: 2,
      author: "QuickSolver",
      authorAvatar: "/pixel-avatar-10.jpg",
      content:
        "Great tips! I'd add that taking notes on your phone while reading clues helps a lot. Sometimes the answer comes to you later when you review your notes.",
      timestamp: "1 hour ago",
      likes: 8,
      isLiked: true,
    },
    {
      id: 3,
      author: "NewHunter",
      authorAvatar: "/pixel-avatar-11.jpg",
      content:
        "Thanks for sharing! As someone new to FlowHunt, these tips are incredibly valuable. Just completed my first hunt using your advice!",
      timestamp: "45 minutes ago",
      likes: 3,
      isLiked: false,
    },
  ])

  const post = {
    id: params.id,
    title: "Tips for solving riddles faster",
    author: "RiddleMaster",
    authorAvatar: "/pixel-avatar-6.jpg",
    category: "Strategy",
    content:
      "After completing over 50 treasure hunts, I've learned some valuable techniques that have significantly improved my solving speed. I wanted to share these with the community to help everyone become better hunters.\n\nThe key is to approach each riddle systematically rather than just guessing randomly. What strategies have worked best for you?",
    timestamp: "3 hours ago",
    views: 156,
    likes: 23,
    isLiked: false,
  }

  const handleLike = (replyId: number) => {
    setReplies(
      replies.map((reply) =>
        reply.id === replyId
          ? { ...reply, isLiked: !reply.isLiked, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 }
          : reply,
      ),
    )
  }

  const handleReply = () => {
    if (newReply.trim()) {
      const reply: Reply = {
        id: replies.length + 1,
        author: "CurrentUser",
        authorAvatar: "/pixel-avatar-current.jpg",
        content: newReply,
        timestamp: "Just now",
        likes: 0,
        isLiked: false,
      }
      setReplies([...replies, reply])
      setNewReply("")
    }
  }

  return (
    <div className="min-h-screen bg-retro-dark text-retro-green p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="retro-panel p-4 mb-6">
          <button onClick={() => router.back()} className="retro-button-secondary mb-4">
            ← Back to Forum
          </button>
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-retro-yellow text-retro-dark px-2 py-1 rounded text-sm">{post.category}</span>
            <span className="text-sm opacity-75">{post.views} views</span>
          </div>
          <h1 className="text-2xl font-bold text-retro-yellow">{post.title}</h1>
        </div>

        {/* Original Post */}
        <div className="retro-panel p-6 mb-6">
          <div className="flex items-start space-x-4">
            <img
              src={post.authorAvatar || "/placeholder.svg"}
              alt={post.author}
              className="w-12 h-12 rounded pixelated"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold text-retro-green">{post.author}</span>
                <span className="text-sm opacity-75">{post.timestamp}</span>
              </div>
              <div className="text-retro-green mb-4 whitespace-pre-line">{post.content}</div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-sm hover:text-retro-yellow">
                  <span>{post.isLiked ? "❤️" : "🤍"}</span>
                  <span>{post.likes}</span>
                </button>
                <button className="text-sm hover:text-retro-yellow">Reply</button>
                <button className="text-sm hover:text-retro-yellow">Share</button>
              </div>
            </div>
          </div>
        </div>

        {/* Replies */}
        <div className="retro-panel p-6 mb-6">
          <h2 className="text-xl font-bold text-retro-yellow mb-4">Replies ({replies.length})</h2>
          <div className="space-y-6">
            {replies.map((reply) => (
              <div key={reply.id} className="flex items-start space-x-4 p-4 bg-retro-darker rounded">
                <img
                  src={reply.authorAvatar || "/placeholder.svg"}
                  alt={reply.author}
                  className="w-10 h-10 rounded pixelated"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-bold text-retro-green">{reply.author}</span>
                    <span className="text-sm opacity-75">{reply.timestamp}</span>
                  </div>
                  <div className="text-retro-green mb-3 whitespace-pre-line">{reply.content}</div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(reply.id)}
                      className="flex items-center space-x-1 text-sm hover:text-retro-yellow"
                    >
                      <span>{reply.isLiked ? "❤️" : "🤍"}</span>
                      <span>{reply.likes}</span>
                    </button>
                    <button className="text-sm hover:text-retro-yellow">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reply Form */}
        <div className="retro-panel p-6">
          <h3 className="text-lg font-bold text-retro-yellow mb-4">Add a Reply</h3>
          <div className="space-y-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-3 bg-retro-darker border border-retro-green rounded text-retro-green h-32 resize-none"
            />
            <div className="flex justify-between items-center">
              <div className="text-sm opacity-75">{newReply.length}/1000 characters</div>
              <button
                onClick={handleReply}
                disabled={!newReply.trim()}
                className="retro-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
