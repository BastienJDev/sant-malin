import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import heroBackground from "@/assets/hero-background.png";

export const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Assurance protection" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background/80" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5" />
              <span className="text-base font-semibold">Votre courtier en assurances</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Protéger votre <span className="gradient-text">santé</span> et votre <span className="gradient-text">budget</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Bienvenue sur notre plateforme dédiée à la protection des particuliers, professionnels et indépendants. 
              Nous vous accompagnons dans le choix de solutions d'assurance adaptées à votre situation, à votre budget et à vos besoins réels.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Comparaison des meilleures offres",
                "Conseils personnalisés",
                "Accompagnement de A à Z",
                "Sans engagement"
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Demandez votre étude gratuite
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                Nous contacter
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Famille protégée" 
                className="relative rounded-3xl shadow-lifted w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">+15 000</p>
                    <p className="text-base text-muted-foreground">Clients satisfaits</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg animate-pulse-soft">
                <p className="font-bold text-xl">40€</p>
                <p className="text-sm opacity-90">Parrainage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
