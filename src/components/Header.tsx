import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent cursor-pointer">
            The IF
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection('missions')}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Misi
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Visi
            </button>
            <Button size="sm" className="shadow-glow-primary">
              Kontak
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 animate-in slide-in-from-top duration-200">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-smooth"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-smooth"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection('missions')}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-smooth"
            >
              Misi
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-smooth"
            >
              Visi
            </button>
            <div className="px-4 pt-2">
              <Button size="sm" className="w-full">
                Kontak
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
