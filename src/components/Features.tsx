import { Bot, Sparkles, Heart, Radio, Map, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Historical Guide",
    description: "Karakter AI yang memberikan konteks faktual dan penjelasan sejarah setelah menyelesaikan misi",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Dynamic Artefact Interaction",
    description: "Interaksi dengan artefak autentik seperti gulden, surat, keris, dan puisi dari era kolonial",
    color: "text-secondary"
  },
  {
    icon: Heart,
    title: "Moral Choice Mechanism",
    description: "Sistem pilihan moral yang memengaruhi Culture Points (CP) dan alur cerita permainan",
    color: "text-accent"
  },
  {
    icon: Radio,
    title: "Audio Historis Interaktif",
    description: "Rekaman pidato, suasana zaman kolonial, dan karya Jaap Kunst untuk imersi penuh",
    color: "text-primary"
  },
  {
    icon: Map,
    title: "Multiplayer Room",
    description: "Kolaborasi antar-pemain untuk menjelajahi lokasi sejarah dan memecahkan teka-teki bersama",
    color: "text-secondary"
  },
  {
    icon: Lock,
    title: "Historical Puzzle Adventure",
    description: "Teka-teki berbasis cipher naskah kuno, aksara Jawa, dan kode sandi era perjuangan",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Fitur <span className="text-primary">Unggulan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Teknologi interaktif yang menghadirkan pengalaman belajar sejarah yang immersive dan menyenangkan
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/30 transition-smooth hover:shadow-glow-primary group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`p-3 bg-primary/5 rounded-lg w-fit group-hover:scale-110 transition-smooth`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8">
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              "Kekuatan tidak diukur melalui senjata, tetapi melalui moralitas, ilmu, dan solidaritas — 
              menjadikan budaya sebagai <span className="text-primary font-semibold">living knowledge</span> yang adaptif."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
