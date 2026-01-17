import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Résultats Naturels",
    description: "Des sourcils qui subliment votre visage de manière naturelle et harmonieuse",
  },
  {
    icon: Award,
    title: "Expertise Certifiée",
    description: "Plus de 5 ans d'expérience et des formations internationales",
  },
  {
    icon: Shield,
    title: "Hygiène Irréprochable",
    description: "Matériel stérile à usage unique et protocoles sanitaires stricts",
  },
  {
    icon: Heart,
    title: "Approche Personnalisée",
    description: "Chaque traitement est adapté à votre morphologie et vos souhaits",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            À propos
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            L'art de sublimer votre regard
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Camille est une experte passionnée dédiée à créer des sourcils parfaits qui 
            mettent en valeur la beauté naturelle de chaque visage. Avec une approche méticuleuse 
            et artistique, elle offre des résultats exceptionnels qui durent.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-5">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
