import { Button } from "@/components/ui/button";
import { Smartphone, Menu } from "lucide-react";
const Header = () => {
  return <header className="fixed top-0 w-full z-50 bg-hero-bg/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Smartphone className="w-8 h-8 text-tech-orange" />
          <span className="text-2xl font-bold text-white">New Tech</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-tech-orange transition-colors">
            Início
          </a>
          <a href="#services" className="text-white hover:text-tech-orange transition-colors">
            Serviços
          </a>
          <a href="#contact" className="text-white hover:text-tech-orange transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="hero" size="sm" className="hidden md:inline-flex">
            <a href="https://wa.me/5511974497399" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;