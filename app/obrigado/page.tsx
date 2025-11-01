import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail, Phone, Home, Sparkles, Package, Truck, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <header className="border-b border-border/40 bg-card/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <Image src="/logo-casa-perini.webp" alt="Casa Perini" width={180} height={60} className="h-12 w-auto" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="flex justify-center animate-in zoom-in duration-700">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
              <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center animate-bounce">
                <CheckCircle className="h-20 w-20 text-secondary" />
              </div>
            </div>
          </div>

          <div className="text-center space-y-6 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                Pedido Confirmado!
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Obrigado por escolher a Casa Perini! Seu balde exclusivo está a caminho.
            </p>
          </div>

          <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-card/90 backdrop-blur-sm border-2 border-secondary/40">
              <CardContent className="pt-8 space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-foreground mb-2">O que acontece agora?</h2>
                  <p className="text-muted-foreground">Acompanhe as próximas etapas do seu pedido</p>
                </div>

                <div className="space-y-6">
                  <div className="group flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                      <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">
                          1
                        </span>
                        <h3 className="font-bold text-xl text-foreground">Confirmação por E-mail</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Você receberá um e-mail de confirmação com todos os detalhes do seu pedido nos próximos minutos.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                      <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Package className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">
                          2
                        </span>
                        <h3 className="font-bold text-xl text-foreground">Preparação do Pedido</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Nossa equipe irá preparar seu balde exclusivo com todo o cuidado e atenção que você merece.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                      <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Truck className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">
                          3
                        </span>
                        <h3 className="font-bold text-xl text-foreground">Entrega Grátis</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Seu pedido será enviado com frete grátis e você receberá o código de rastreamento por e-mail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-border/40 text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">Prazo de entrega</p>
                  <p className="text-muted-foreground">5 a 10 dias úteis</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-700 delay-400">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-card/90 backdrop-blur-sm border-2 border-secondary/40">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Precisa de ajuda?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="mailto:contato@casaperini.com.br"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 group border-2 border-transparent hover:border-secondary/50"
                  >
                    <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                      <p className="font-semibold text-foreground">contato@casaperini.com.br</p>
                    </div>
                  </a>

                  <a
                    href="tel:+5511999999999"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 group border-2 border-transparent hover:border-secondary/50"
                  >
                    <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                      <p className="font-semibold text-foreground">(11) 99999-9999</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/">
                  <Home className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Voltar para o Início
                </Link>
              </Button>
            </div>

            <div className="text-center space-y-4 pt-8">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-secondary" />
                <p className="text-lg font-semibold text-foreground">Compartilhe sua experiência!</p>
              </div>
              <p className="text-muted-foreground">
                Marque <span className="font-bold text-foreground">@casaperini</span> e use a hashtag{" "}
                <span className="font-bold text-foreground">#CasaPerini</span>
              </p>
              <div className="flex items-center justify-center gap-2 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
