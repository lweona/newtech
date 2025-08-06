import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Descubra tecnologia móvel de ponta com a New Tech
          </h2>
          
          <div className="text-lg md:text-xl leading-relaxed mb-12 space-y-6">
            <p>
              Seu destino ideal para smartphones avançados e acessórios em São Paulo.
              Trazemos inovação ao seu alcance, oferecendo dispositivos
              excepcionais e um atendimento ao cliente que aprimora a
              comunicação e a conectividade.
            </p>
            
            <p>
              Experimente uma qualidade incomparável e abrace o futuro da
              tecnologia com a New Tech. <strong>Junte-se a nós hoje mesmo!</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4 text-left bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Produtos Certificados</h3>
                <p className="text-white/90">
                  Todos os nossos dispositivos possuem certificação e garantia oficial
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-left bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Suporte Especializado</h3>
                <p className="text-white/90">
                  Equipe técnica qualificada para resolver qualquer problema
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-left bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Entrega Rápida</h3>
                <p className="text-white/90">
                  Entregamos em toda São Paulo com agilidade e segurança
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-left bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Preços Competitivos</h3>
                <p className="text-white/90">
                  As melhores ofertas do mercado sem comprometer a qualidade
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4 bg-dark hover:bg-blue-700">
              <a href="https://www.facebook.com/cel.newtech" target="_blank" rel="noopener noreferrer">
                Veja nossos produtos
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;