import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Contact
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Nous trouver
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Venez nous rendre visite dans notre salon au cœur de Casablanca 
            pour une consultation personnalisée.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Adresse
            </h3>
            <p className="font-sans text-muted-foreground">
              20 rue Elmassoudi<br />
              2100 Casablanca, Maroc
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Horaires
            </h3>
            <p className="font-sans text-muted-foreground">
              Sur rendez-vous uniquement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/212604577204?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20rendez-vous%20chez%20Brows%20by%20Camille."
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-primary hover:underline"
            >
              +212 604-577204
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/212604577204?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20rendez-vous%20chez%20Brows%20by%20Camille."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-sm font-medium tracking-wide rounded-full hover:bg-[#20bd5a] transition-colors duration-300 shadow-soft hover:shadow-card"
          >
            <MessageCircle className="w-5 h-5" />
            Réserver sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
