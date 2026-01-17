import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-semibold text-foreground">
            Brows by Camille
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Accueil
            </Link>
            <Link
              to="/reservation"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Réservation
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/browsbycamilleofficiel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/212600000000?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20rendez-vous%20chez%20Brows%20by%20Camille."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brows by Camille. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
