import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Microblading avant-après" },
  { src: gallery2, alt: "Sourcils parfaits" },
  { src: gallery3, alt: "Résultat naturel" },
  { src: gallery4, alt: "Traitement en cours" },
  { src: gallery5, alt: "Beauté des sourcils" },
  { src: gallery6, alt: "Henna brows" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Galerie
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Nos réalisations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez les transformations réalisées par Camille et laissez-vous inspirer 
            pour votre prochain rendez-vous.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/browsbycamilleofficiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-sm font-medium text-foreground border border-border px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            Suivez-nous sur Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
