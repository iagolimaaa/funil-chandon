"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RotateCcw, Sparkles, Rocket } from "lucide-react"
import Image from "next/image"

type CardType = {
  id: number
  name: string
  image: string
  tagline: string
  isFlipped: boolean
  isMatched: boolean
}

const champagneKits = [
  { name: "Saleny Edition", image: "/kit-1-saleny.png", tagline: "Edição Azul Cósmico" },
  { name: "Colane Edition", image: "/kit-2-colane.png", tagline: "Edição Rosa Galáxia" },
  { name: "Souany Edition", image: "/kit-3-souany.png", tagline: "Edição Magenta Estrelada" },
  { name: "Sauky Edition", image: "/kit-4-sauky.png", tagline: "Edição Prateada Sideral" },
  { name: "Galaxia Edition", image: "/kit-5-galaxia.png", tagline: "Edição Preta Luminosa" },
  { name: "Legacy Edition", image: "/kit-6-legacy.png", tagline: "Edição Dourada Premium" },
]

export function MemoryGame() {
  const router = useRouter()
  const [cards, setCards] = useState<CardType[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [moves, setMoves] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [lastMatchedId, setLastMatchedId] = useState<number | null>(null)
  const [canProceed, setCanProceed] = useState(false)
  const [celebrationProgress, setCelebrationProgress] = useState(0)

  const playSound = (frequency = 800, duration = 100) => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = "sine"

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration / 1000)
    } catch (e) {
      console.log("[v0] Audio not supported")
    }
  }

  const initializeGame = () => {
    const duplicatedCards = [...champagneKits, ...champagneKits]
      .map((card, index) => ({
        id: index,
        name: card.name,
        image: card.image,
        tagline: card.tagline,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5)

    setCards(duplicatedCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setTimeElapsed(0)
    setClicks(0)
    setGameStarted(false)
    setShowCelebration(false)
    setLastMatchedId(null)
    setCanProceed(false)
  }

  const handleProceed = () => {
    if (canProceed) {
      router.push("/loja")
    }
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleCardClick = (cardId: number) => {
    if (!gameStarted) setGameStarted(true)

    const card = cards.find((c) => c.id === cardId)
    if (!card || card.isFlipped || card.isMatched || flippedCards.length === 2) return

    playSound(600, 80)
    setClicks(clicks + 1)

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    setCards(cards.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c)))

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1)
      const [firstId, secondId] = newFlippedCards
      const firstCard = cards.find((c) => c.id === firstId)
      const secondCard = cards.find((c) => c.id === secondId)

      if (firstCard?.name === secondCard?.name) {
        playSound(1200, 150)

        setTimeout(() => {
          setCards(cards.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c)))
          setMatchedPairs(matchedPairs + 1)
          setLastMatchedId(firstId)
          setFlippedCards([])
        }, 600)
      } else {
        playSound(300, 120)

        setTimeout(() => {
          setCards(cards.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c)))
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (gameStarted && !showCelebration) {
      const timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [gameStarted, showCelebration])

  useEffect(() => {
    if (matchedPairs === champagneKits.length && gameStarted) {
      setShowCelebration(true)
      setCanProceed(true)
      setCelebrationProgress(0)
      playSound(1600, 200)
      setTimeout(() => playSound(1200, 200), 200)
      setTimeout(() => playSound(1400, 300), 400)
    }
  }, [matchedPairs, gameStarted])

  useEffect(() => {
    if (showCelebration && celebrationProgress < 100) {
      const timer = setTimeout(() => {
        setCelebrationProgress((prev) => Math.min(prev + Math.random() * 30, 100))
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [showCelebration, celebrationProgress])

  const progressPercentage = (matchedPairs / champagneKits.length) * 100

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-bold text-yellow-200 tracking-widest">PROGRESSO CÓSMICO</p>
            <span className="text-sm text-yellow-300 font-bold">
              {matchedPairs}/{champagneKits.length}
            </span>
          </div>
          <div className="h-2 bg-purple-900/40 rounded-full overflow-hidden border border-purple-700/50">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-purple-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {gameStarted && (
          <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-lg p-3 border border-yellow-400/30">
              <p className="text-xs text-yellow-300/70 font-semibold">TEMPO</p>
              <p className="text-2xl font-bold text-yellow-300">{timeElapsed}s</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-lg p-3 border border-yellow-400/30">
              <p className="text-xs text-yellow-300/70 font-semibold">CLIQUES</p>
              <p className="text-2xl font-bold text-yellow-300">{clicks}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-lg p-3 border border-yellow-400/30">
              <p className="text-xs text-yellow-300/70 font-semibold">MOVIMENTOS</p>
              <p className="text-2xl font-bold text-yellow-300">{moves}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-lg p-3 border border-yellow-400/30">
              <p className="text-xs text-yellow-300/70 font-semibold">STATUS</p>
              <p className="text-lg font-bold text-yellow-300">
                {matchedPairs}/{champagneKits.length}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5 md:gap-2 max-w-2xl mx-auto">
        {cards.map((card) => (
          <div key={card.id} className="relative cursor-pointer" onClick={() => handleCardClick(card.id)}>
            <Card
              className={`transition-all duration-300 overflow-hidden ${
                card.isFlipped || card.isMatched
                  ? "bg-gradient-to-br from-purple-600/30 via-purple-700/40 to-yellow-600/20 border-2 border-yellow-400/60 shadow-lg shadow-yellow-400/10"
                  : "bg-gradient-to-br from-purple-900/30 to-purple-950/50 border-2 border-purple-700/50 hover:border-yellow-400/50 hover:shadow-md hover:shadow-yellow-400/10"
              } ${card.isMatched ? "opacity-60 scale-95" : ""}`}
              style={{
                aspectRatio: "3/4",
              }}
            >
              <div className="h-full flex flex-col items-center justify-center relative bg-black/40">
                {card.isFlipped || card.isMatched ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      fill
                      className="object-contain p-0.5"
                      loading="lazy"
                      sizes="(max-width: 768px) 110px, 140px"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-purple-600/20 flex items-center justify-center border border-yellow-400/40">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button
          variant="outline"
          size="lg"
          onClick={initializeGame}
          className="group border-2 border-yellow-400/40 hover:border-yellow-400/60 hover:bg-yellow-400/10 transition-all duration-300 bg-transparent text-yellow-300 hover:text-yellow-200"
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          Reiniciar Jogo
        </Button>
      </div>

      {showCelebration && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md animate-in zoom-in duration-500">
            <div className="bg-gradient-to-br from-purple-950/98 via-purple-950/95 to-purple-950/98 backdrop-blur-xl rounded-3xl border-2 border-yellow-400/60 p-6 md:p-8 space-y-6 shadow-2xl shadow-yellow-400/40">
              {/* Icon Badge */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400/40 rounded-full blur-3xl" />
                  <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full bg-gradient-to-br from-yellow-500/50 to-yellow-300/20 flex items-center justify-center border-3 border-yellow-400/90 shadow-2xl shadow-yellow-400/60">
                    <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-yellow-300 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <p className="text-sm font-bold text-yellow-300/90 tracking-widest">VOCÊ CONQUISTOU</p>
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                  {Math.round(celebrationProgress)}%
                </h2>
                <p className="text-xl md:text-2xl font-bold text-yellow-400">DE DESCONTO GARANTIDO</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-full h-3 overflow-hidden border border-yellow-400/40">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 transition-all duration-300 rounded-full"
                  style={{ width: `${celebrationProgress}%` }}
                />
              </div>

              {/* Description */}
              <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-4 md:p-5 border border-yellow-400/40 backdrop-blur-sm">
                <p className="text-center text-yellow-100/90 font-medium leading-relaxed text-sm md:text-base">
                  🎉 VOCÊ DESBLOQUEOU 100% DE DESCONTO 🎉 - Resgate sua recompensa exclusiva agora!
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleProceed}
                disabled={!canProceed}
                className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-purple-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-400/70 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Rocket className="h-5 w-5" />
                Acessar Loja Exclusiva
              </button>

              {/* Footer Text */}
              <p className="text-xs text-center text-purple-300/80 font-medium">
                Sua recompensa está aguardando. Resgate agora.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
