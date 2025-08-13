import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Headphones, 
  Monitor, 
  Wrench, 
  Shield, 
  Clock,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Assistência e Acessórios",
      description: "Reparo especializado em smartphones, tablets e acessórios de todas as marcas",
        features: ["Troca de telas", "Bateria", "Conectores", "Reparos Exclusivos em Placas"]
    },
    {
      icon: Shield,
      title: "Suporte Técnico Premium",
      description: "Atendimento técnico especializado com garantia estendida",
      features: ["Diagnóstico gratuito", "Garantia de 6 meses", "Suporte remoto", "Consultoria"]
    },
    {
      icon: Monitor,
      title: "Venda de Dispositivos",
      description: "Smartphones novos e seminovos com garantia e melhores preços",
      features: ["Últimos lançamentos", "Dispositivos certificados", "Financiamento", "Trade-in"]
    },
    {
      icon: Headphones,
      title: "Acessórios Premium",
      description: "Capas, fones, carregadores e acessórios originais",
      features: ["Marcas oficiais", "Garantia original", "Entrega rápida", "Instalação gratuita"]
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Serviços de limpeza e otimização para prolongar a vida útil",
      features: ["Limpeza interna", "Atualização de software", "Backup de dados", "Otimização"]
    },
    {
      icon: Clock,
      title: "Atendimento Express",
      description: "Serviços rápidos para emergências e necessidades urgentes",
      features: ["Atendimento em 24h", "Serviço a domicílio", "Plantão técnico", "Prioridade"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-tech-orange">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades tecnológicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-tech-orange/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-tech rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-tech-orange rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="tech" size="lg" className="text-lg px-8 py-4">
            <a href="https://wa.me/5511974497399" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;