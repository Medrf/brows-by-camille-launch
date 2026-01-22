import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-white/80 mb-6">
              Casablanca, Maroc
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
          >
            Expert en beauté des sourcils sur mesure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto"
          >
            Microblading – Brow Lift – Speed Remover Implantation des sourcils
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
              className="inline-flex items-center justify-center border border-white/50 text-white px-8 py-4 text-sm font-medium tracking-wide rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
