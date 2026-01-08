import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/logos/company-logo.png";

const footerLinks = {
  services: [
    { name: "Mutuelle Santé", href: "#mutuelle" },
    { name: "Assurances", href: "#assurances" },
    { name: "Assurance Senior", href: "#senior" },
    { name: "Assurance TNS", href: "#tns" },
    { name: "Assurance Résiliée", href: "#resilie" },
    { name: "Rachat Assurance de Prêt", href: "#pret" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGU", href: "#" },
    { name: "Réclamations", href: "#" },
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={companyLogo} alt="Meilleurs Mutuelles Santé" className="h-12 w-auto bg-card rounded-lg p-1" />
            </Link>
            <p className="text-base text-background/70 mb-4">
              Alliance Nationale pour l'Optimisation des Mutuelles et Assurances Santé
            </p>
            <p className="text-base text-background/70">
              Votre courtier en assurances au service de votre protection.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-base text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Informations</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-base text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:03.76.33.03.82" className="flex items-center gap-3 text-base text-background/70 hover:text-background transition-colors">
                  <Phone className="w-5 h-5" />
                  03.76.33.03.82
                </a>
              </li>
              <li>
                <a href="mailto:gestion@controle-mutuelles.fr" className="flex items-center gap-3 text-base text-background/70 hover:text-background transition-colors">
                  <Mail className="w-5 h-5" />
                  gestion@controle-mutuelles.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-base text-background/70">
                <MapPin className="w-5 h-5 shrink-0" />
                France métropolitaine & DOM-TOM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-background/60">
              © 2025 Meilleurs Mutuelles Santé. Tous droits réservés.
            </p>
            <p className="text-base text-background/60">
              Courtier en assurances - ORIAS n° XX XXX XXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
