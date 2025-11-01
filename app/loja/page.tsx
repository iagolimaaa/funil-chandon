"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Star, Sparkles, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const products = [
  {
    id: "saleny-edition",
    name: "Saleny Edition",
    subtitle: "Frutas Vermelhas",
    description: "Notas de frutas vermelhas com toque floral e adocicado — perfeito para noites especiais",
    originalPrice: 199.0,
    price: 0.0,
    image: "/kit-1-saleny.png",
    stars: 5,
    reviews: 284,
    badge: "Mais Vendido",
  },
  {
    id: "colane-ghition",
    name: "Colane Ghition",
    subtitle: "Especiarias Nobres",
    description: "Sabor encorpado com toques de especiarias, notas amadeiradas — para momentos refinados",
    originalPrice: 199.0,
    price: 0.0,
    image: "/kit-2-colane.png",
    stars: 5,
    reviews: 156,
  },
  {
    id: "souany-delution",
    name: "Souany Delution",
    subtitle: "Elegância Pura",
    description: "Elegância e sofisticação em cada gole, notas cítricas vibrantes — essência de exclusividade",
    originalPrice: 199.0,
    price: 0.0,
    image: "/kit-3-souany.png",
    stars: 5,
    reviews: 198,
  },
  {
    id: "sauky-edition",
    name: "Sauky Edition",
    subtitle: "Complexidade Refinada",
    description: "Complexo e refinado, notas de mel e baunilha — perfeito para ocasiões memoráveis",
    originalPrice: 199.0,
    price: 0.0,
    image: "/kit-4-sauky.png",
    stars: 5,
    reviews: 312,
    badge: "Premium",
  },
  {
    id: "galaxia-edition",
    name: "Galaxia Edition",
    subtitle: "Edição Limitada",
    description: "Sabor cósmico único e inesquecível — a experiência suprema da marca",
    originalPrice: 299.0,
    price: 0.0,
    image: "/kit-5-galaxia.png",
    stars: 5,
    reviews: 89,
    badge: "Exclusivo",
    featured: true,
  },
  {
    id: "legacy-edition",
    name: "Legacy Edition",
    subtitle: "Tradição Atemporal",
    description: "Clássico que atravessa gerações, notas de frutas secas e caramelo — inconfundível",
    originalPrice: 199.0,
    price: 0.0,
    image: "/kit-6-legacy.png",
    stars: 5,
    reviews: 421,
  },
  {
    id: "calaty-edition",
    name: "Calaty Edition",
    subtitle: "Harmonia Celestial",
    description: "Equilíbrio perfeito entre doçura e acidez, notas florais delicadas — celestial",
    originalPrice: 199.0,
    price: 0.0,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2031%20de%20out.%20de%202025%2C%2021_10_48-7wzoeRJcBUAK8IHvmMNJfMZ5yMPYgW.png",
    stars: 5,
    reviews: 167,
  },
  {
    id: "raany-edition",
    name: "Raany Edition",
    subtitle: "Intensidade Cósmica",
    description: "Sabor intenso e marcante, notas de frutas tropicais — para paladares ousados",
    originalPrice: 199.0,
    price: 0.0,
    image:
      "https://i.ibb.co/p6GYG2g2/Chat-GPT-Image-31-de-out-de-2025-21-10-20-1.png",
    stars: 5,
    reviews: 203,
  },
]

const names = [
  "Marina Silva",
  "João Santos",
  "Ana Costa",
  "Pedro Oliveira",
  "Carla Mendes",
  "Lucas Ferreira",
  "Beatriz Rocha",
]

function RecentNotifications() {
  const [notifications, setNotifications] = useState<Array<{ id: string; name: string }>>([])

  useEffect(() => {
    const addNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      const id = Math.random().toString()

      setNotifications((prev) => [...prev.slice(-3), { id, name: randomName }])

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      }, 5000)
    }

    const interval = setInterval(addNotification, Math.random() * 5000 + 5000)
    addNotification()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40 space-y-3 max-w-xs pointer-events-none">
      {notifications.map((notif) => (
        <div key={notif.id} className="animate-in slide-in-from-right fade-in duration-500 pointer-events-auto">
          <div className="bg-gradient-to-r from-yellow-400/20 to-purple-600/20 border border-yellow-400/50 rounded-lg px-4 py-3 backdrop-blur-sm shadow-lg">
            <p className="text-sm text-yellow-100">
              <span className="font-bold text-yellow-200">{notif.name}</span> acaba de resgatar a edição premium!
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function LojaPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-900/30 via-transparent to-transparent rounded-full blur-3xl animate-cosmic-float" />
        <div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-600/20 via-transparent to-transparent rounded-full blur-3xl animate-cosmic-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <header className="border-b border-purple-900/30 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/logo-chandon.webp"
              alt="Chandon"
              width={200}
              height={66}
              className="h-16 w-auto drop-shadow-lg"
            />
            <button className="p-2 hover:bg-purple-900/30 rounded-lg transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-yellow-300" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-800/50 to-black/70" />
        <div className="absolute inset-0">
          <Image src="/kit-5-galaxia.png" alt="Chandon Galaxia" fill className="object-cover opacity-30 blur-sm" />
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 w-fit mb-4">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              <span className="text-xs font-bold text-yellow-200 tracking-wider">COLEÇÃO EXCLUSIVA 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-balance">
              Chandon{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                Galaxia
              </span>
            </h1>

            <p className="text-base md:text-lg text-purple-200/90 mb-6 text-pretty max-w-xl">
              Descubra sabores únicos que transcendem o comum. Cada garrafa é uma experiência cósmica.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/30 transition-all hover:scale-105 text-sm"
              >
                Ver Produtos
              </button>
              <button
                onClick={() => router.back()}
                className="px-6 py-2.5 border border-purple-400/50 text-purple-200 font-semibold rounded-lg hover:bg-purple-900/20 transition-colors text-sm"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="py-12 md:py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Nossa Coleção</h2>
            <p className="text-purple-200/70">Escolha sua edição favorita</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {products.map((product, index) => (
              <Link key={product.id} href={`/produto/${product.id}`} className="group block">
                <div className="flex flex-col gap-4 items-center bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-400/20 hover:border-yellow-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-900/20 p-4 md:p-6 h-full">
                  <div className="relative w-full h-40 md:h-64 flex-shrink-0">
                    {product.badge && (
                      <div className="absolute top-2 md:top-3 left-2 md:left-3 z-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 md:px-3 py-1 md:py-1.5 rounded-full font-bold text-xs md:text-sm">
                        {product.badge}
                      </div>
                    )}
                    <div className="relative h-full bg-black/20 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 md:space-y-4 w-full">
                    <div>
                      <h3 className="font-black text-lg md:text-2xl text-balance leading-tight mb-1">{product.name}</h3>
                      <p className="text-yellow-300/90 text-xs md:text-sm font-bold">{product.subtitle}</p>
                      <p className="text-purple-200/70 text-sm md:text-base mt-2 md:mt-3 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(product.stars)].map((_, i) => (
                          <Star key={i} className="h-3 md:h-4 w-3 md:w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-purple-200/60 text-xs md:text-sm font-semibold">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-purple-400/20">
                      <div className="space-y-1">
                        {product.originalPrice > 0 && (
                          <p className="text-xs md:text-sm text-purple-300/60 line-through">
                            R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                          </p>
                        )}
                        <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                          R$ {product.price.toFixed(2).replace(".", ",")}
                        </p>
                        <p className="text-xs font-bold text-yellow-300 tracking-wider">RECOMPENSA DESBLOQUEADA</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 text-yellow-300 font-bold group-hover:gap-2 md:group-hover:gap-3 transition-all hidden md:flex">
                        Resgatar
                        <ArrowRight className="h-4 md:h-5 w-4 md:w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-900/30 bg-background/40 backdrop-blur-xl py-8 relative z-10 mt-12">
        <div className="container mx-auto px-4 text-center text-purple-200/50 text-sm">
          <p>© 2025 Chandon Galaxia. Beba com moderação.</p>
        </div>
      </footer>

      <RecentNotifications />
    </div>
  )
}
