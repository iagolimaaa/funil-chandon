"use client"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleResponse = () => {
    setIsSubmitting(true)
    localStorage.setItem("ageVerified", "true")
    setTimeout(() => router.push("/jogo"), 600)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-900/40 via-transparent to-transparent rounded-full blur-3xl animate-cosmic-float" />
        <div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-600/20 via-transparent to-transparent rounded-full blur-3xl animate-cosmic-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-300/40 rounded-full blur-sm" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/30 rounded-full blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-md animate-in fade-in duration-700">
        <div className="space-y-8">
          {/* Logo section */}
          <div className="flex justify-center">
            <Image
              src="/logo-chandon.webp"
              alt="Chandon"
              width={240}
              height={80}
              className="h-20 w-auto opacity-95 drop-shadow-lg"
              priority
            />
          </div>

          {/* Main card with cosmic styling */}
          <div className="rounded-3xl bg-gradient-to-b from-purple-900/20 via-purple-950/10 to-black/40 backdrop-blur-xl border border-yellow-400/20 p-12 space-y-10 shadow-2xl">
            {/* Header */}
            <div className="space-y-4 text-center">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-balance leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                  Galáxia Chandon
                </span>
              </h1>
              <p className="text-sm tracking-widest text-yellow-200/60 uppercase font-light animate-shimmer bg-clip-text">
                Edição Limitada
              </p>
              <div className="flex justify-center pt-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
              </div>
            </div>

            {/* Question section */}
            <div className="space-y-8 pt-4">
              <p className="text-center text-base font-light text-white/90 tracking-wide leading-relaxed">
                Mostre que você tem o paladar de uma estrela
              </p>

              <div className="flex gap-3">
                <button
                  onClick={handleResponse}
                  disabled={isSubmitting}
                  className="flex-1 relative group py-3.5 px-6 text-sm font-light tracking-widest uppercase rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-100 group-hover:opacity-90 transition-opacity" />
                  <span className="relative text-black font-semibold">Sim</span>
                </button>

                <button
                  onClick={handleResponse}
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 text-sm font-light tracking-widest uppercase rounded-lg border border-yellow-400/40 text-white hover:border-yellow-400/70 hover:bg-yellow-400/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Não
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-center text-xs text-white/50 font-light tracking-wider">
                Acesso restrito a maiores de 18 anos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
