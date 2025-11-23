import { Target, TrendingUp, Globe, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const visionPoints = [
  {
    icon: Target,
    title: "Tujuan Utama",
    description: "Mengubah budaya dan sejarah dari sesuatu yang pasif menjadi pengalaman digital interaktif yang relevan, menyenangkan, dan memperkuat identitas bangsa."
  },
  {
    icon: TrendingUp,
    title: "Model Bisnis",
    description: "In-game purchase dan cultural pass dengan strategi promosi kolaboratif bersama lembaga pendidikan dan komunitas budaya."
  },
  {
    icon: Globe,
    title: "Jangkauan",
    description: "Memanfaatkan platform Roblox dengan 157.6 juta pengguna Indonesia dan target Generasi Z sebagai agen pelestarian budaya."
  },
  {
    icon: GraduationCap,
    title: "Dampak Edukatif",
    description: "Membangun kesadaran kritis terhadap nilai perjuangan, etika kebangsaan, dan keberagaman budaya Indonesia melalui experiential learning."
  }
];

export const Vision = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Visi & <span className="text-primary">Dampak</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Program Budaya GO! 2025 — Revitalisasi budaya Indonesia dengan pendekatan teknologi digital
            </p>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {visionPoints.map((point, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:shadow-glow-secondary transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                      <point.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Message */}
          <div className="text-center space-y-6 pt-8">
            <Card className="bg-hero-gradient border-none">
              <CardContent className="p-12 space-y-4">
                <h3 className="text-3xl font-bold text-primary-foreground">
                  Inovasi Kunci dalam Revitalisasi Literasi Sejarah
                </h3>
                <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Menggabungkan riset sejarah, game design, dan kecerdasan buatan untuk menghadirkan 
                  pengalaman bermain yang imersif sekaligus membangun kesadaran kritis terhadap 
                  nilai-nilai perjuangan bangsa Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2025</div>
                <div className="text-sm text-muted-foreground">Target Peluncuran</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">93.52%</div>
                <div className="text-sm text-muted-foreground">Remaja di Media Sosial</div>
              </div>

            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">1M+</div>
              <div className="text-sm text-muted-foreground">Potensi Pemain</div>
            </div>
            
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Gen Z</div>
                <div className="text-sm text-muted-foreground">Target Audiens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
