import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Casablanca, Maroc
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
          >
            Expert en beauté des sourcils sur mesure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Microblading • Brow Lift • Speed Remover • Implantation des sourcils
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/reservation"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-all duration-300 shadow-soft hover:shadow-card"
            >
              Réserver un rendez-vous
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-sm font-medium tracking-wide rounded-full hover:bg-secondary transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
