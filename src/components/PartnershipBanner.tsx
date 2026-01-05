import fhfLogo from "@/assets/logos/fhf-logo.png";
import anfiideLogo from "@/assets/logos/anfiide-logo.png";

export const PartnershipBanner = () => {
  return (
    <section className="bg-primary text-primary-foreground py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary opacity-100" />
      
      <div className="section-container relative z-10">
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-1 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">Historique</span>
          </div>
          
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Pour la première fois dans l'histoire, un courtier est partenaire et soutient les actions
          </h2>
          
          <p className="text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
            L'Alliance Nationale pour l'Optimisation des Mutuelles et Assurances Santé participe aux actions de la Fédération Hospitalière de France et de l'ANFIIDE
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="bg-card rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={fhfLogo} alt="Fédération Hospitalière de France" className="h-16 md:h-20 w-auto" />
            </div>
            
            <div className="bg-card rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={anfiideLogo} alt="ANFIIDE" className="h-16 md:h-20 w-auto" />
            </div>
          </div>
          
          <p className="mt-6 text-sm text-primary-foreground/80 max-w-2xl mx-auto">
            <strong>ANFIIDE</strong> — Association reconnue d'utilité publique depuis 1932 pour son rôle dans le développement de la profession infirmière. 
            <br />1924-2025 : Plus de 100 ans au service des infirmier(e)s !
          </p>
        </div>
      </div>
    </section>
  );
};
