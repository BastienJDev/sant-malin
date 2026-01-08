import fondationLogo from "@/assets/logos/fondation-hopitaux-logo.png";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const PartnershipBanner = () => {
  return (
    <section className="bg-primary text-primary-foreground py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary opacity-100" />
      
      <div className="section-container relative z-10">
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-1 mb-4 backdrop-blur-sm">
            <span className="text-lg font-medium">Historique</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Pour la première fois dans l'histoire, un courtier est partenaire et soutient les actions
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            L'Alliance Nationale pour l'Optimisation des Mutuelles et Assurances Santé participe aux actions de la Fondation des Hôpitaux
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <Button 
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-semibold text-lg px-8 py-6"
            >
              <a 
                href="https://www.fondationhopitaux.fr/nous-soutenir/faire-un-don-en-ligne/#:~:text=Par%20ch%C3%A8que%20bancaire%20%C3%A0%20l,par%20SMS%20au%2092%20111" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Heart className="w-5 h-5 mr-2" />
                Faire un don à la Fondation des Hôpitaux
              </a>
            </Button>
            
            <div className="bg-card rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={fondationLogo} alt="Fondation des Hôpitaux" className="h-20 md:h-28 w-auto" />
            </div>
          </div>
          
          <p className="mt-8 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            <strong>Fondation des Hôpitaux</strong> — Engagée pour améliorer le quotidien des patients et des soignants dans les hôpitaux de France.
          </p>
        </div>
      </div>
    </section>
  );
};
