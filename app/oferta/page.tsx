"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Gift, Truck, Sparkles, ArrowRight, Clock, Star, CheckCircle, Zap } from "lucide-react"

export default function OfertaPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    router.push("/obrigado")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <header className="border-b border-border/40 bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <Image src="/logo-casa-perini.webp" alt="Casa Perini" width={180} height={60} className="h-12 w-auto" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-top duration-700">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl animate-pulse" />
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center animate-bounce">
                  <Sparkles className="h-12 w-12 text-secondary" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                Parabéns!
              </span>
              <br />
              Você Desbloqueou Sua Oferta
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Complete seus dados e garanta o balde exclusivo Casa Perini com{" "}
              <span className="font-bold text-secondary">70% de desconto</span> + frete grátis!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 border-2 border-secondary/40 p-6 hover:border-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
              <div className="relative flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Gift className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">70% OFF</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    De <span className="line-through">R$ 329,90</span> por apenas{" "}
                    <span className="font-bold text-secondary">R$ 99,90</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 border-2 border-secondary/40 p-6 hover:border-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
              <div className="relative flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Truck className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Frete Grátis</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Entrega gratuita para todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 border-2 border-secondary/40 p-6 hover:border-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
              <div className="relative flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Entrega Rápida</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Receba em 5-10 dias úteis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-card/90 backdrop-blur-sm border-2 border-secondary/40 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Balde Exclusivo Casa Perini
                </CardTitle>
                <CardDescription className="text-lg">
                  Kit completo com 6 espumantes sortidos + balde de gelo personalizado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative aspect-video bg-gradient-to-br from-muted via-muted/50 to-background rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="h-20 w-20 mx-auto rounded-2xl bg-secondary/20 flex items-center justify-center">
                        <Gift className="h-10 w-10 text-secondary" />
                      </div>
                      <p className="text-lg font-semibold text-foreground">Imagem do Combo em Breve</p>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Balde premium com 6 espumantes Casa Perini sortidos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Preço e economia */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 border-2 border-secondary/30">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-foreground">R$ 99,90</span>
                    <span className="text-2xl text-muted-foreground line-through">R$ 329,90</span>
                  </div>
                  <div className="px-6 py-3 bg-secondary/20 text-secondary font-bold rounded-full text-lg border-2 border-secondary/40">
                    Economize R$ 230
                  </div>
                </div>

                {/* Benefícios do produto */}
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "6 espumantes Casa Perini sortidos",
                    "Balde de gelo exclusivo",
                    "Frete grátis para todo Brasil",
                    "Entrega em 5-10 dias úteis",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Social proof */}
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-muted/30">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">4.9/5 - Mais de 1.200 avaliações</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-card/90 backdrop-blur-sm border-2 border-secondary/40">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                  Complete seus dados para garantir sua oferta
                </CardTitle>
                <CardDescription className="text-base">
                  Preencha o formulário abaixo e receba seu balde exclusivo Casa Perini
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-base font-semibold">
                        Nome Completo
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="h-12 text-base border-2 focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 text-base border-2 focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-base font-semibold">
                      Telefone
                    </Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="h-12 text-base border-2 focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endereco" className="text-base font-semibold">
                      Endereço
                    </Label>
                    <Input
                      id="endereco"
                      name="endereco"
                      placeholder="Rua, número, complemento"
                      value={formData.endereco}
                      onChange={handleChange}
                      required
                      className="h-12 text-base border-2 focus:border-secondary"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cidade" className="text-base font-semibold">
                        Cidade
                      </Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        placeholder="Sua cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                        className="h-12 text-base border-2 focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="estado" className="text-base font-semibold">
                        Estado
                      </Label>
                      <Input
                        id="estado"
                        name="estado"
                        placeholder="UF"
                        maxLength={2}
                        value={formData.estado}
                        onChange={handleChange}
                        required
                        className="h-12 text-base border-2 focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cep" className="text-base font-semibold">
                        CEP
                      </Label>
                      <Input
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        value={formData.cep}
                        onChange={handleChange}
                        required
                        className="h-12 text-base border-2 focus:border-secondary"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 bg-gradient-to-r from-primary via-primary/90 to-primary hover:scale-105 group"
                  >
                    <Zap className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Garantir Minha Oferta Exclusiva
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground leading-relaxed pt-2">
                    Ao continuar, você concorda com nossos termos de uso e política de privacidade. Oferta válida por
                    tempo limitado.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
