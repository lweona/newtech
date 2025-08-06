import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-hero-bg text-white">
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
              <Button asChild variant="outline" size="icon" className="border-white/30 text-white bg-orange-500 hover:bg-orange-400">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-white/30 text-white bg-slate-800 hover:bg-slate-700">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-white/30 text-white bg-emerald-800 hover:bg-emerald-700">
                <a href="https://wa.me/5511974497399" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-white/30 text-white bg-red-600 hover:bg-red-500">
                
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </section>;
};
export default ContactSection;