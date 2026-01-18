import { motion } from "framer-motion";
import { MessageCircle, Calendar, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: MessageCircle,
    title: "Contactez-nous",
    description: "Envoyez-nous un message sur WhatsApp pour démarrer votre réservation.",
  },
  {
    icon: Calendar,
    title: "Choisissez votre date",
    description: "Nous vous proposerons les créneaux disponibles selon votre convenance.",
  },
  {
    icon: CheckCircle,
    title: "Confirmez votre RDV",
    description: "Une fois la date choisie, votre rendez-vous est confirmé.",
  },
];

const Reservation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
            >
              Réservation
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            >
              Réserver votre rendez-vous
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-muted-foreground max-w-xl mx-auto mb-12"
            >
              La réservation se fait directement via WhatsApp pour vous offrir 
              un service personnalisé et répondre à toutes vos questions.
            </motion.p>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {steps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-secondary/50 rounded-3xl p-10 md:p-14"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Prête à sublimer vos sourcils ?
              </h2>
              <p className="font-sans text-muted-foreground mb-8 max-w-md mx-auto">
                Cliquez sur le bouton ci-dessous pour nous contacter directement 
                sur WhatsApp et réserver votre créneau.
              </p>
              <a
                href="https://wa.me/212604577204?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20rendez-vous%20chez%20Brows%20by%20Camille."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 text-base font-medium tracking-wide rounded-full hover:bg-[#20bd5a] transition-colors duration-300 shadow-elevated"
              >
                <MessageCircle className="w-6 h-6" />
                Réserver sur WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservation;
