import { Button } from "@/components/ui/button";
import { Gamepad2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 bg-cultural-pattern opacity-50"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Program Budaya GO! 2025</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            The <span className="bg-hero-gradient bg-clip-text text-transparent">IF</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Eksplorasi Sejarah dan Budaya Indonesia melalui Media Gim Interaktif
          </p>

          {/* Tagline */}
          <div className="text-3xl md:text-4xl font-semibold text-foreground italic">
            "Play History, Live Culture"1920
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aplikasi video gim edukatif bertema sejarah yang menggabungkan perjuangan kemerdekaan Indonesia (-1948) 
            dengan teknologi interaktif Roblox. Belajar sejarah tidak pernah seasyik ini.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="shadow-glow-primary transition-smooth hover:scale-105">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Jelajahi Game
            </Button>
            <Button size="lg" variant="outline" className="transition-smooth hover:scale-105">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Misi Historis</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-secondary">1934, 1945, 1948</div>
              <div className="text-sm text-muted-foreground">Era Perjuangan</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">1M+</div>
              <div className="text-sm text-muted-foreground">Potensi Pemain</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
