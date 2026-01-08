import { Heart, Shield, Users, Briefcase, AlertTriangle, CreditCard, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "mutuelle",
    icon: Heart,
    title: "Mutuelle Santé",
    subtitle: "Une couverture santé adaptée à vos besoins",
    description: "Que vous soyez salarié, indépendant, retraité ou sans activité, nous vous aidons à choisir une mutuelle santé performante.",
    features: ["Soins courants", "Hospitalisation", "Optique & dentaire", "Médecines douces", "Renforts personnalisés"],
    cta: "Des garanties utiles, sans payer pour l'inutile."
  },
  {
    id: "assurances",
    icon: Shield,
    title: "Assurances",
    subtitle: "Toutes vos assurances au même endroit",
    description: "Nous vous accompagnons pour vos besoins en assurances avec une gestion simplifiée.",
    features: ["Assurance habitation", "Assurance auto / moto", "Protection juridique", "Assurance prévoyance", "Responsabilité civile"],
    cta: "Une gestion simplifiée et un interlocuteur unique."
  },
  {
    id: "senior",
    icon: Users,
    title: "Assurance Senior",
    subtitle: "Des garanties pensées pour l'après-carrière",
    description: "Des solutions spécifiques pour les seniors et retraités, avec des garanties renforcées.",
    features: ["Remboursements optimisés", "Aucune surprise liée à l'âge", "Assistance & services inclus", "Hospitalisation renforcée"],
    cta: "Restez bien protégé à chaque étape de la vie."
  },
  {
    id: "tns",
    icon: Briefcase,
    title: "Assurance TNS",
    subtitle: "Indépendants, protégez votre activité",
    description: "Artisans, commerçants, professions libérales, dirigeants… Des assurances dédiées aux TNS.",
    features: ["Mutuelle TNS (loi Madelin)", "Prévoyance", "Maintien de revenus", "Protection du dirigeant"],
    cta: "Optimisation fiscale et protection sur mesure."
  },
  {
    id: "resilie",
    icon: AlertTriangle,
    title: "Assurance Résiliée",
    subtitle: "Une solution même après résiliation",
    description: "Vous avez été résilié pour impayé, sinistre ou non-paiement ? Nous vous aidons.",
    features: ["Habitation", "Auto", "Santé"],
    cta: "Des solutions existent, même en situation difficile."
  },
  {
    id: "pret",
    icon: CreditCard,
    title: "Rachat Assurance de Prêt",
    subtitle: "Réduisez le coût de votre crédit",
    description: "Grâce à la délégation d'assurance, vous pouvez réduire significativement vos coûts.",
    features: ["Baisser vos mensualités", "Meilleures garanties", "Changer à tout moment"],
    cta: "Jusqu'à plusieurs milliers d'euros d'économies."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Shield className="w-5 h-5" />
            <span className="text-base font-semibold">Nos Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solutions d'assurance et mutuelle complètes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos différentes offres adaptées à chaque situation et profil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-base text-primary font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground text-base mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-base text-foreground">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-primary font-medium italic mb-4">
                {service.cta}
              </p>
              
              <Button 
                variant="ghost" 
                className="w-full group/btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
