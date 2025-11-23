import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import mission3 from "@/assets/mission-3.jpg";

const missions = [
  {
    title: "Pembebasan Tan Malaka",
    image: mission1,
    year: "1948",
    description: "Operasi pembebasan Tan Malaka melalui jaringan bawah tanah; strategi ditentukan pemain dan kemampuan terbuka bertahap sesuai peringkat di leaderboard.",
    objectives: [
      "Investigasi lokasi penahanan",
      "Dekripsi kode sandi rahasia",
      "Eksekusi rencana pembebasan"
    ]
  },
  {
    title: "Rengasdengklok",
    image: mission2,
    year: "1945",
    description: "Pengawalan Soekarno-Hatta ke Rengasdengklok untuk mempercepat proklamasi kemerdekaan Indonesia.",
    objectives: [
      "Negosiasi dengan golongan muda",
      "Navigasi medan pedesaan",
      "Perlindungan dari patroli Jepang"
    ]
  },
  {
    title: "Penyelamatan Rasuna Said ",
    image: mission3,
    year: "1945",
    description: "Misi penyelamatan Rasuna Said di Penjara Bulu Semarang.",
    objectives: [
      "Pengumpulan intelijen",
      "Penyamaran dan infiltrasi",
      "Evakuasi darurat"
    ]
  }
];

export const Missions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tiga <span className="text-primary">Misi Historis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Berperan sebagai agen rahasia kelompok "Semburat" — jaringan bawah tanah yang terinspirasi 
              dari pergerakan pemuda Indonesia
            </p>
          </div>

          {/* Missions Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-border/50 hover:border-primary/40 transition-smooth group hover:shadow-glow-primary"
              >
                {/* Mission Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={mission.image} 
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {mission.year}
                  </Badge>
                </div>

                {/* Mission Content */}
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{mission.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mission.description}
                    </p>
                  </div>

                  {/* Objectives */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                      Objektif Misi:
                    </p>
                    <ul className="space-y-1">
                      {mission.objectives.map((objective, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> 
        </div>
      </div>
    </section>
  );
};
