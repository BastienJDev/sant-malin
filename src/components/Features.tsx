import { CheckCircle, Search, Calculator, Users, FileCheck, Headphones, ClipboardList, Wallet } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Comparaison gratuite et sans engagement",
    description: "Recevez une analyse rapide et gratuite des meilleures offres du marché — sans engagement de votre part."
  },
  {
    icon: Calculator,
    title: "Négociation des meilleurs tarifs",
    description: "Nous négocions pour vous des tarifs plus bas auprès de nos partenaires. Accédez à des réductions exclusives."
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un conseiller dédié vous guide à chaque étape. Service sur mesure adapté à vos besoins spécifiques."
  },
  {
    icon: Search,
    title: "Expertise des profils seniors et à risque",
    description: "Des solutions adaptées aux profils à besoins particuliers : seniors, professions à risque, santé fragile."
  },
  {
    icon: FileCheck,
    title: "Accompagnement dans vos démarches",
    description: "Assistance complète pour monter et suivre vos dossiers administratifs. On s'occupe de toutes les formalités."
  },
  {
    icon: Wallet,
    title: "Optimisation de vos cotisations",
    description: "Réduction des coûts grâce à l'analyse et à l'optimisation de vos contrats sans compromis sur la couverture."
  },
  {
    icon: Headphones,
    title: "Service client dédié",
    description: "Un support client réactif et disponible dès que vous en avez besoin. Un interlocuteur unique pour vous."
  },
  {
    icon: ClipboardList,
    title: "Suivi de vos contrats",
    description: "Nous assurons le suivi et les renouvellements, pour que rien ne vous échappe. Vérifications automatiques."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement complet pour trouver la meilleure couverture au meilleur prix
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-base">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
