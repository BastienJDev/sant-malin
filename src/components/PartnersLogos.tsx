import alptisLogo from "@/assets/logos/alptis-logo.png";
import spvieLogo from "@/assets/logos/spvie-logo.png";
import ecaLogo from "@/assets/logos/eca-logo.png";
import praecoLogo from "@/assets/logos/praeco-logo.png";
import kiassureLogo from "@/assets/logos/kiassure-logo.png";

const partners = [
  { name: "Alptis", logo: alptisLogo, url: "https://www.alptis.org/" },
  { name: "SPVIE", logo: spvieLogo, url: "https://www.spvie.com" },
  { name: "ECA Assurances", logo: ecaLogo, url: "https://eca-assurances.com" },
  { name: "Praeco", logo: praecoLogo, url: "https://praeconis.fr" },
  { name: "Kiassure", logo: kiassureLogo, url: "https://kiassure.com" },
];

export const PartnersLogos = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Nos Partenaires Assureurs
          </h2>
          <p className="text-muted-foreground">
            Nous travaillons avec les meilleurs assureurs du marché
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-20 md:h-24 w-auto object-contain transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
