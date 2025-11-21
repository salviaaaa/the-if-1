import { Mail, FileText, Building2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                The IF
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Program Budaya GO! 2025 — Revitalisasi Budaya di Indonesia dengan 
                Pendekatan Game Roblox untuk generasi muda.
              </p>
              <p className="text-xs text-muted-foreground italic">
                "Play History, Live Culture"
              </p>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Informasi Proyek</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Building2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Tim PranaTech</div>
                    <div className="text-xs">Developer & Creator</div>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Building2 className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Kementerian Kebudayaan</div>
                    <div className="text-xs">Republik Indonesia</div>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <FileText className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Program Budaya GO!</div>
                    <div className="text-xs">2025</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Kontak & Kolaborasi</h4>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  Tertarik untuk berkolaborasi atau ingin mengetahui lebih lanjut tentang proyek ini?
                </p>
                <a 
                  href="mailto:info@pranatech.id" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@pranatech.id</span>
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-border/50" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} PranaTech. All rights reserved.
            </p>
            <p className="text-xs">
              Dikembangkan dengan ❤️ untuk pelestarian budaya Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
