import { Book, Brain, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tentang <span className="text-primary">The IF</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <em>Inspired by history, not based on history</em> — Gim yang mengajarkan nilai perjuangan, 
              moralitas, dan budaya Indonesia melalui pendekatan interaktif dan experiential learning.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Konsep "IF"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nama "The IF" terinspirasi dari konsep kemungkinan: bahwa hasil sejarah (seperti 4) 
                  tidak hanya lahir dari satu rumus (2 + 2), melainkan bisa dicapai melalui proses lain (1 + 3). 
                  Pemain tidak mengubah sejarah, tetapi menelusuri bagaimana Indonesia mencapai kemerdekaannya 
                  melalui berbagai jalan pemikiran dan strategi.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Genre & Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Action-Historical Puzzle Adventure</strong> yang dikembangkan 
                  di <strong className="text-foreground">Roblox Studio</strong>, memanfaatkan komunitas luas 
                  Generasi Z untuk pembelajaran kolaboratif dan interaktif.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Character Types */}
              <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pejuang (Fighter)</h4>
                      <p className="text-sm text-muted-foreground">
                        Berfokus pada strategi, mobilitas, dan perlindungan tim dalam setiap misi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-smooth">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Brain className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intelektual (Scholar)</h4>
                      <p className="text-sm text-muted-foreground">
                        Unggul dalam analisis teka-teki dan pengumpulan artefak sejarah
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-smooth">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Book className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Rakyat (Citizen)</h4>
                      <p className="text-sm text-muted-foreground">
                        Memiliki kemampuan penyamaran dan adaptasi lingkungan terbaik
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
