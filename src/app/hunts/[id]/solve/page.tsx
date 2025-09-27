"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

interface Clue {
  id: number
  title: string
  riddle: string
  description: string
  location: string
  coordinates: { lat: number; lng: number }
  unlocked: boolean
  completed: boolean
  reward: number
  unlockTime?: string
  verificationMethod: "photo" | "qr" | "manual"
  hint?: string
}

export default function SolveHuntPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [currentClueIndex, setCurrentClueIndex] = useState(0)
  const [isVerifying, setIsVerifying] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [verificationPhoto, setVerificationPhoto] = useState<File | null>(null)
  const [verificationText, setVerificationText] = useState("")
  const [huntCompleted, setHuntCompleted] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  // Mock data for demonstration
  const hunt = {
    id: params.id,
    title: "Downtown Mystery",
    totalReward: 250,
    clues: [
      {
        id: 1,
        title: "The Guardian of Time",
        riddle:
          "Where the city's heart beats strongest, seek the guardian of time. Four faces watch the world, marking moments sublime.",
        description: "Find the iconic clock tower in the city center",
        location: "Union Square Clock Tower",
        coordinates: { lat: 37.7879, lng: -122.4075 },
        unlocked: true,
        completed: false,
        reward: 50,
        verificationMethod: "photo" as const,
        hint: "Look for the tallest structure with four clock faces in Union Square",
      },
      {
        id: 2,
        title: "Whispers in Stone",
        riddle:
          "In marble halls where justice dwells, ancient words in stone do tell. Seek the inscription carved with care, wisdom's message waiting there.",
        description: "Decode the Latin inscription at City Hall",
        location: "City Hall Main Entrance",
        coordinates: { lat: 37.7793, lng: -122.4193 },
        unlocked: false,
        completed: false,
        reward: 75,
        unlockTime: "2024-01-15T15:30:00Z",
        verificationMethod: "manual" as const,
        hint: "The inscription is above the main entrance columns",
      },
      {
        id: 3,
        title: "The Final Prize",
        riddle:
          "Where art and nature dance as one, beneath the golden setting sun. The treasure waits where waters flow, and city lights begin to glow.",
        description: "Find the hidden treasure at the waterfront",
        location: "Pier 39 Fountain",
        coordinates: { lat: 37.8087, lng: -122.4098 },
        unlocked: false,
        completed: false,
        reward: 125,
        verificationMethod: "qr" as const,
        hint: "Look for the fountain with the golden dolphin statue",
      },
    ] as Clue[],
  }

  const currentClue = hunt.clues[currentClueIndex]
  const progress = ((currentClueIndex + (currentClue?.completed ? 1 : 0)) / hunt.clues.length) * 100

  const handleVerification = async () => {
    setIsVerifying(true)

    // Simulate verification process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mark current clue as completed
    hunt.clues[currentClueIndex].completed = true

    // Check if this was the last clue
    if (currentClueIndex === hunt.clues.length - 1) {
      setHuntCompleted(true)
    } else {
      // Unlock next clue
      if (hunt.clues[currentClueIndex + 1]) {
        hunt.clues[currentClueIndex + 1].unlocked = true
      }
      setCurrentClueIndex(currentClueIndex + 1)
    }

    setIsVerifying(false)
    setVerificationPhoto(null)
    setVerificationText("")
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVerificationPhoto(e.target.files[0])
    }
  }

  if (huntCompleted) {
    return (
      <div className="min-h-screen bg-retro-dark text-retro-green p-4">
        <div className="max-w-2xl mx-auto">
          <div className="retro-panel p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h1 className="text-3xl font-bold mb-4 text-retro-yellow">HUNT COMPLETED!</h1>
            <p className="text-xl mb-6">
              Congratulations! You've successfully completed the {hunt.title} treasure hunt!
            </p>

            <div className="retro-panel bg-retro-darker p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-retro-yellow">Your Rewards</h2>
              <div className="text-3xl font-bold text-retro-green mb-2">{hunt.totalReward} FLOW</div>
              <p className="text-sm opacity-75">Rewards will be transferred to your wallet within 24 hours</p>
            </div>

            <div className="space-y-4">
              <button onClick={() => router.push("/hunts")} className="retro-button w-full">
                Find More Hunts
              </button>
              <button onClick={() => router.push("/dashboard")} className="retro-button-secondary w-full">
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!currentClue) {
    return <div className="min-h-screen bg-retro-dark text-retro-green p-4">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-retro-dark text-retro-green p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="retro-panel p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => router.back()} className="retro-button-secondary">
              ← Back
            </button>
            <h1 className="text-2xl font-bold text-retro-yellow">{hunt.title}</h1>
            <div className="text-right">
              <div className="text-sm opacity-75">Progress</div>
              <div className="text-lg font-bold">{Math.round(progress)}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-retro-darker rounded-full h-3 mb-4">
            <div
              className="bg-retro-yellow h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Clue Navigation */}
          <div className="flex space-x-2">
            {hunt.clues.map((clue, index) => (
              <button
                key={clue.id}
                onClick={() => clue.unlocked && setCurrentClueIndex(index)}
                className={`px-3 py-1 text-sm rounded ${
                  index === currentClueIndex
                    ? "bg-retro-yellow text-retro-dark"
                    : clue.completed
                      ? "bg-retro-green text-retro-dark"
                      : clue.unlocked
                        ? "bg-retro-darker text-retro-green border border-retro-green"
                        : "bg-retro-darker text-gray-500"
                }`}
                disabled={!clue.unlocked}
              >
                Clue {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Current Clue */}
          <div className="retro-panel p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-retro-yellow">{currentClue.title}</h2>
              <div className="text-retro-green font-bold">{currentClue.reward} FLOW</div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Riddle:</h3>
                <p className="text-retro-green bg-retro-darker p-4 rounded italic">"{currentClue.riddle}"</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Description:</h3>
                <p className="opacity-75">{currentClue.description}</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Location:</h3>
                <p className="text-retro-yellow">{currentClue.location}</p>
              </div>

              {currentClue.hint && (
                <div>
                  <button onClick={() => setShowHint(!showHint)} className="retro-button-secondary mb-2">
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </button>
                  {showHint && <p className="text-retro-purple bg-retro-darker p-3 rounded">💡 {currentClue.hint}</p>}
                </div>
              )}

              {currentClue.unlockTime && new Date(currentClue.unlockTime) > new Date() && (
                <div className="text-retro-purple">
                  ⏰ Unlocks at: {new Date(currentClue.unlockTime).toLocaleString()}
                </div>
              )}
            </div>
          </div>

          {/* Verification */}
          <div className="retro-panel p-6">
            <h2 className="text-xl font-bold text-retro-yellow mb-4">Verification</h2>

            {currentClue.verificationMethod === "photo" && (
              <div className="space-y-4">
                <p className="text-sm opacity-75">Upload a photo to verify you found the location:</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="w-full p-2 bg-retro-darker border border-retro-green rounded text-retro-green"
                />
                {verificationPhoto && (
                  <div className="text-sm text-retro-green">✓ Photo selected: {verificationPhoto.name}</div>
                )}
              </div>
            )}

            {currentClue.verificationMethod === "manual" && (
              <div className="space-y-4">
                <p className="text-sm opacity-75">Enter what you found at the location:</p>
                <textarea
                  value={verificationText}
                  onChange={(e) => setVerificationText(e.target.value)}
                  placeholder="Describe what you found..."
                  className="w-full p-3 bg-retro-darker border border-retro-green rounded text-retro-green h-24 resize-none"
                />
              </div>
            )}

            {currentClue.verificationMethod === "qr" && (
              <div className="space-y-4">
                <p className="text-sm opacity-75">Scan the QR code at the location:</p>
                <div className="bg-retro-darker p-8 rounded text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-sm">QR Scanner will open when you're at the location</p>
                </div>
              </div>
            )}

            <button
              onClick={handleVerification}
              disabled={
                isVerifying ||
                (currentClue.verificationMethod === "photo" && !verificationPhoto) ||
                (currentClue.verificationMethod === "manual" && verificationText.trim() === "") ||
                (currentClue.unlockTime ? new Date(currentClue.unlockTime) > new Date() : false)
              }
              className={`retro-button w-full mt-6 ${isVerifying ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isVerifying ? "Verifying..." : "Submit Verification"}
            </button>

            {/* Map placeholder */}
            <div className="mt-6">
              <h3 className="font-bold mb-2">Location Map:</h3>
              <div className="bg-retro-darker p-8 rounded text-center">
                <div className="text-2xl mb-2">🗺️</div>
                <p className="text-sm opacity-75">Interactive map would show here</p>
                <p className="text-xs mt-2">
                  Coordinates: {currentClue.coordinates.lat}, {currentClue.coordinates.lng}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
