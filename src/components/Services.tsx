import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Microblading",
    description: "Technique de maquillage semi-permanent qui dessine poil par poil pour un effet ultra-naturel. Idéal pour redéfinir, remplir ou créer des sourcils parfaits.",
  },
  {
    title: "Brow Lift",
    description: "Technique de restructuration qui rehausse et fixe les sourcils pour un regard plus ouvert et rafraîchi. Effet naturel et durable.",
  },
  {
    title: "Implantation des sourcils",
    description: "Reconstruction capillaire des sourcils pour combler les zones clairsemées ou inexistantes. Un résultat permanent et naturel.",
  },
  {
    title: "Speed Remover",
    description: "Technique d'enlèvement du microblading pour corriger ou effacer un maquillage semi-permanent. Processus sûr et efficace.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Nos Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Des soins d'exception
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez nos prestations haut de gamme pour sublimer vos sourcils 
            avec des techniques modernes et des résultats naturels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative bg-card p-8 md:p-10 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-card transition-all duration-500"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Link
                to="/reservation"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300"
              >
                Réserver ce soin
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
