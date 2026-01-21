import { motion } from "framer-motion";
import brow1 from "@/assets/brow-1.jpg";
import brow2 from "@/assets/brow-2.jpg";
import brow3 from "@/assets/brow-3.jpg";
import brow4 from "@/assets/brow-4.jpg";

const browImages = [
  { src: brow1, alt: "Microblading résultat" },
  { src: brow2, alt: "Brow Lift résultat" },
  { src: brow3, alt: "Speed Remover résultat" },
  { src: brow4, alt: "Implantation des sourcils résultat" },
];

const BrowGallery = () => {
  return (
    <section id="galerie" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Nos réalisations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Résultats de nos clientes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-4 p-4 bg-card rounded-2xl border border-border/50 shadow-card">
            {browImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrowGallery;
