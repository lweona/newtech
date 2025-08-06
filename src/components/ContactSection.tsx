import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  MessageCircle
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-hero-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-tech-orange">Contato</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Estamos prontos para atender você! Entre em contato conosco através dos canais abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-tech-orange" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                   R. Hildebrando Siqueira, 625<br />
                  Americanópolis, São Paulo - SP<br />
                  CEP: 04334-150
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-tech-orange" />
                  Telefones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-white/90">(11) 974497399 - WhatsApp</p>
                <p className="text-white/90">(11) 974497399 - Suporte 24h</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-tech-orange" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-white/90">Segunda a Sexta: 8:30h às 19h</p>
                <p className="text-white/90">Sábado: 9h às 16h</p>
                <p className="text-white/90">Domingo: Apenas emergências</p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 mb-2">Nome</label>
                  <Input 
                    placeholder="Seu nome" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2">Telefone</label>
                  <Input 
                    placeholder="(11) 99999-9999" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 mb-2">E-mail</label>
                <Input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <label className="block text-white/90 mb-2">Assunto</label>
                <Input 
                  placeholder="Como podemos ajudar?" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <label className="block text-white/90 mb-2">Mensagem</label>
                <Textarea 
                  placeholder="Descreva sua necessidade ou problema..." 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;