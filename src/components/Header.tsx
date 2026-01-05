import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import companyLogo from "@/assets/logos/company-logo.png";

const navItems = [
  { name: "Accueil", href: "#accueil" },
  { name: "Mutuelle Santé", href: "#mutuelle" },
  { name: "Assurances", href: "#assurances" },
  { name: "Senior", href: "#senior" },
  { name: "TNS", href: "#tns" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="section-container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:03.76.33.03.82" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>03.76.33.03.82</span>
            </a>
            <a href="mailto:gestion@meilleurs-mutuelles-sante.fr" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>gestion@meilleurs-mutuelles-sante.fr</span>
            </a>
          </div>
          <div className="text-xs opacity-90">
            40€ à chaque parrainage d'un proche
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={companyLogo} alt="Meilleurs Mutuelles Santé" className="h-12 w-auto" />
            <div className="hidden lg:block">
              <span className="block font-display text-lg font-semibold text-foreground leading-tight">
                Meilleurs Mutuelles Santé
              </span>
              <span className="text-xs text-muted-foreground">
                Alliance Nationale pour l'Optimisation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Espace Client
            </Button>
            <Button size="sm">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden mt-4 animate-slide-up">
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Espace Client
                </Button>
                <Button className="w-full">
                  Devis Gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
