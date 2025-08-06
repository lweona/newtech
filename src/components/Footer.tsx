import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-overlay text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-8 h-8 text-tech-orange" />
              <span className="text-2xl font-bold">New Tech</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Sua referência em tecnologia móvel em São Paulo. 
              Oferecemos os melhores produtos e o melhor atendimento técnico da região.
            </p>
            <p className="text-white/60 text-sm">
              © 2024 New Tech. Todos os direitos reservados.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tech-orange">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-tech-orange transition-colors">Assistência Técnica</a></li>
              <li><a href="#" className="hover:text-tech-orange transition-colors">Venda de Smartphones</a></li>
              <li><a href="#" className="hover:text-tech-orange transition-colors">Acessórios</a></li>
              <li><a href="#" className="hover:text-tech-orange transition-colors">Suporte Premium</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tech-orange">Contato</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>(11) 99999-9999</li>
              <li>contato@newtech.com.br</li>
              <li>R. Hildebrando Siqueira, 625</li>
              <li>Americanópolis, São Paulo - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            Desenvolvido com tecnologia de ponta para oferecer a melhor experiência digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;