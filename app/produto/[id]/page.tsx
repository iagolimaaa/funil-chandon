
"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Star, Check, Sparkles } from "lucide-react"

const productsData: Record<string, any> = {
  "saleny-edition": {
    id: "saleny-edition",
    name: "Saleny Edition",
    subtitle: "Frutas Vermelhas",
    description: "Edição exclusiva com notas de frutas vermelhas e toque floral",
    fullDescription:
      "O Chandon Saleny Edition é uma celebração dos sabores mais vibrantes. Com notas predominantes de frutas vermelhas frescas, como morango e framboesa, complementadas por um delicado toque floral, este espumante oferece uma experiência sensorial única. Perfeito para momentos especiais e celebrações inesquecíveis.",
    price: 0.0,
    image: "/kit-1-saleny.png",
    stars: 5,
    reviews: 284,
    badge: "Mais Vendido",
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
    ],
  },
  "colane-ghition": {
    id: "colane-ghition",
    name: "Colane Ghition",
    subtitle: "Especiarias Nobres",
    description: "Sabor encorpado com toques de especiarias e amadeirado",
    fullDescription:
      "Uma experiência sofisticada que combina a intensidade das especiarias nobres com notas amadeiradas. O Colane Ghition é ideal para paladares que apreciam complexidade e profundidade, oferecendo camadas de sabor que se revelam a cada gole.",
    price: 0.0,
    image: "/kit-2-colane.png",
    stars: 5,
    reviews: 156,
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
    ],
  },
  "souany-delution": {
    id: "souany-delution",
    name: "Souany Delution",
    subtitle: "Elegância Pura",
    description: "Elegância e sofisticação em cada gole, notas cítricas",
    fullDescription:
      "Souany Delution representa a elegância em sua forma mais pura. Com notas cítricas refrescantes e um final suave, este espumante é perfeito para quem busca sofisticação sem abrir mão da leveza. Ideal para brindes e momentos de celebração.",
    price: 0.0,
    image: "/kit-3-souany.png",
    stars: 5,
    reviews: 198,
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
    ],
  },
  "sauky-edition": {
    id: "sauky-edition",
    name: "Sauky Edition",
    subtitle: "Complexidade Refinada",
    description: "Complexo e refinado, perfeito para ocasiões especiais",
    fullDescription:
      "Sauky Edition é a escolha dos conhecedores. Com sua complexidade refinada e equilíbrio perfeito entre doçura e acidez, este espumante premium é ideal para ocasiões verdadeiramente especiais. Cada garrafa conta uma história de tradição e inovação.",
    price: 0.0,
    image: "/kit-4-sauky.png",
    stars: 5,
    reviews: 312,
    badge: "Premium",
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
    ],
  },
  "galaxia-edition": {
    id: "galaxia-edition",
    name: "Galaxia Edition",
    subtitle: "Edição Limitada",
    description: "A edição mais exclusiva - Sabor cósmico único e inesquecível",
    fullDescription:
      "A joia da coroa da coleção Chandon. Galaxia Edition é uma edição limitada que oferece uma experiência verdadeiramente cósmica. Com sabores únicos que transcendem o comum, este espumante é para aqueles que buscam o extraordinário. Disponibilidade limitada.",
    price: 0.0,
    image: "/kit-5-galaxia.png",
    stars: 5,
    reviews: 89,
    badge: "Exclusivo",
    featured: true,
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
      "Certificado de autenticidade",
    ],
  },
  "legacy-edition": {
    id: "legacy-edition",
    name: "Legacy Edition",
    subtitle: "Tradição Atemporal",
    description: "Clássico que atravessa gerações com sabor inconfundível",
    fullDescription:
      "Legacy Edition é uma homenagem à tradição Chandon. Com um sabor inconfundível que atravessa gerações, este espumante clássico nunca sai de moda. Perfeito para quem aprecia a autenticidade e a história por trás de cada garrafa.",
    price: 0.0,
    image: "/kit-6-legacy.png",
    stars: 5,
    reviews: 421,
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
    ],
  },
  "calaty-edition": {
    id: "calaty-edition",
    name: "Calaty Edition",
    subtitle: "Harmonia Celestial",
    description: "Equilíbrio perfeito entre doçura e acidez, notas florais",
    fullDescription:
      "Calaty Edition traz uma harmonia celestial ao paladar. Com equilíbrio perfeito entre doçura e acidez, complementado por delicadas notas florais, este espumante é ideal para quem busca uma experiência refinada e equilibrada.",
    price: 0.0,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2031%20de%20out.%20de%202025%2C%2021_10_48-7wzoeRJcBUAK8IHvmMNJfMZ5yMPYgW.png",
    stars: 5,
    reviews: 167,
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
    ],
  },
  "raany-edition": {
    id: "raany-edition",
    name: "Raany Edition",
    subtitle: "Intensidade Cósmica",
    description: "Sabor intenso e marcante, perfeito para paladares ousados",
    fullDescription:
      "Raany Edition é para os paladares mais ousados. Com sabor intenso e marcante, este espumante oferece uma experiência cósmica única. Cada gole revela camadas de complexidade que desafiam e encantam os sentidos.",
    price: 0.0,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2031%20de%20out.%20de%202025%2C%2021_10_20-8hqs46PEyk5Jwo6Dz7Mzt6VL4jZkr3.png",
    stars: 5,
    reviews: 203,
    features: [
      "4 garrafas de 750ml",
      "2 taças exclusivas",
      "Balde térmico premium",
      "Embalagem presenteável",
      "Frete grátis",
    ],
  },
}

export default function ProdutoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = productsData[id]

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Link href="/loja" className="text-yellow-300 hover:text-yellow-400 underline">
            Voltar para a loja
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <header className="border-b border-purple-900/30 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/loja">
              <Image
                src="/logo-chandon.webp"
                alt="Chandon"
                width={120}
                height={40}
                className="h-10 w-auto drop-shadow-lg"
              />
            </Link>
            <button className="p-2 hover:bg-purple-900/30 rounded-lg transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-yellow-300" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Link
          href="/loja"
          className="inline-flex items-center gap-2 text-purple-200 hover:text-yellow-300 transition-colors text-sm font-semibold"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para loja
        </Link>
      </div>

      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative">
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1.5 rounded-full font-bold text-sm">
                  {product.badge}
                </div>
              )}
              <div className="relative h-[500px] bg-gradient-to-br from-purple-900/30 to-black/50 rounded-2xl border border-purple-400/30 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-12"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 mb-3">
                  <Sparkles className="h-3 w-3 text-yellow-300" />
                  <span className="text-xs font-bold text-yellow-200">{product.subtitle}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">{product.name}</h1>
                <p className="text-purple-200/70 text-lg">{product.description}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(product.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-purple-200/70 font-semibold">{product.stars}.0</span>
                <span className="text-purple-200/50">({product.reviews} avaliações)</span>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-black/60 border border-yellow-400/30 rounded-xl p-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Sobre este produto</h3>
                <p className="text-purple-200/70 leading-relaxed">{product.fullDescription}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">O que está incluído</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-purple-200/80">
                      <Check className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-4">
                <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Adicionar ao Carrinho
                </button>

                <p className="text-center text-purple-200/60 text-sm">Frete grátis para todo Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-900/30 bg-background/40 backdrop-blur-xl py-8 relative z-10 mt-12">
        <div className="container mx-auto px-4 text-center text-purple-200/50 text-sm">
          <p>© 2025 Chandon Galaxia. Beba com moderação.</p>
        </div>
      </footer>
    </div>
  )
}
