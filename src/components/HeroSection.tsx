import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Smartphone, Headphones } from "lucide-react";
import heroImage from "@/assets/tech-hero-bg.jpg";
const HeroSection = () => {
  return <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className="absolute inset-0 bg-hero-bg/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Smartphone className="w-12 h-12 text-tech-orange animate-pulse" />
            <h1 className="text-5xl font-bold text-white px-[3px] text-center md:text-6xl py-[70px] my-[80px] mx-[11px]">
              New <span className="text-tech-orange">Tech</span>
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
            Suporte Técnico de Primeira Linha em São Paulo
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore tecnologia móvel de ponta e um serviço de altíssima 
            qualidade no coração de São Paulo com a New Tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Veja nossas Mercadorias
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 hover:bg-white/10 text-amber-600">
              Solicitar Suporte
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-tech-orange" />
              <h3 className="text-white font-semibold">Suporte Premium</h3>
              <p className="text-white/80 text-sm text-center">
                Atendimento especializado e garantia em todos os serviços
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <Smartphone className="w-8 h-8 text-tech-orange" />
              <h3 className="text-white font-semibold">Tecnologia Avançada</h3>
              <p className="text-white/80 text-sm text-center">
                Os dispositivos mais modernos e acessórios de qualidade
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <Headphones className="w-8 h-8 text-tech-orange" />
              <h3 className="text-white font-semibold">Atendimento 24/7</h3>
              <p className="text-white/80 text-sm text-center">
                Suporte técnico disponível a qualquer hora do dia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-orange/20 rounded-full animate-bounce" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-tech-blue/20 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-tech-orange/30 rounded-full animate-ping" />
    </section>;
};
export default HeroSection;