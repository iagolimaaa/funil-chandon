"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { MemoryGame } from "@/components/memory-game"
import { Sparkles, Target } from "lucide-react"
import Image from "next/image"

export default function JogoPage() {
  const router = useRouter()
  const [gameCompleted, setGameCompleted] = useState(false)

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified")
    if (!ageVerified) {
      router.push("/")
    }
  }, [router])

  useEffect(() => {
    if (gameCompleted) {
      setTimeout(() => {
        router.push("/loja")
      }, 1000)
    }
  }, [gameCompleted, router])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-900/40 via-transparent to-transparent rounded-full blur-3xl animate-cosmic-float" />
        <div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-600/20 via-transparent to-transparent rounded-full blur-3xl animate-cosmic-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <header className="border-b border-purple-900/30 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <Image
              src="/logo-chandon.webp"
              alt="Chandon Logo"
              width={240}
              height={80}
              className="h-20 w-auto drop-shadow-lg"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-top duration-700">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/20 via-purple-600/20 to-yellow-400/20 border border-yellow-400/40 shadow-lg">
              <Target className="h-5 w-5 text-yellow-300 animate-pulse" />
              <span className="text-sm font-bold text-yellow-200 tracking-widest">DESAFIO EM ANDAMENTO</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-tight">
              Navegue pela
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                Galáxia Chandon
              </span>
            </h1>

            <p className="text-lg md:text-xl text-purple-200/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Encontre os pares cósmicos e prove que você é um verdadeiro conhecedor de espumantes premium
            </p>

            <div className="max-w-2xl mx-auto rounded-2xl bg-gradient-to-r from-yellow-400/10 via-purple-600/10 to-yellow-400/10 border border-yellow-400/30 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-yellow-400/20 flex items-center justify-center shrink-0 border border-yellow-400/40">
                  <Sparkles className="h-6 w-6 text-yellow-300" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-yellow-200 mb-2">Missão Cósmica</h3>
                  <p className="text-purple-200/80 leading-relaxed">
                    Clique nas cartas para desvendar os segredos da galáxia e encontre os pares. Complete a missão para
                    desbloquear sua recompensa especial de <span className="font-bold text-yellow-300">100% OFF</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in zoom-in duration-700 delay-300">
            <MemoryGame onGameComplete={() => setGameCompleted(true)} />
          </div>
        </div>
      </main>
    </div>
  )
}
