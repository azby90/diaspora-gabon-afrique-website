import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Ligne 1 - Menus rapides */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/" className="font-inter text-sm font-medium text-white hover:text-green-200 transition-colors">
              Accueil
            </Link>
            <Link href="/programme" className="font-inter text-sm font-medium text-white hover:text-green-200 transition-colors">
              Programme
            </Link>
            <Link href="/actualites" className="font-inter text-sm font-medium text-white hover:text-green-200 transition-colors">
              Actualités
            </Link>
            <Link href="/medias" className="font-inter text-sm font-medium text-white hover:text-green-200 transition-colors">
              Médias
            </Link>
            <Link href="/contact-simpliquer" className="font-inter text-sm font-medium text-white hover:text-green-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Ligne 2 - Réseaux sociaux */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-green-200 transition-colors">
              <span className="text-2xl">📘</span>
            </a>
            <a href="#" className="text-white hover:text-green-200 transition-colors">
              <span className="text-2xl">✖️</span>
            </a>
            <a href="#" className="text-white hover:text-green-200 transition-colors">
              <span className="text-2xl">💼</span>
            </a>
            <a href="#" className="text-white hover:text-green-200 transition-colors">
              <span className="text-2xl">💬</span>
            </a>
          </div>
        </div>

        {/* Ligne 3 - Logos institutionnels */}
        <div className="text-center mb-8">
          <p className="font-inter text-sm text-green-200 mb-4">En partenariat avec les institutions gabonaises :</p>
          <div className="flex justify-center items-center gap-12">
            <div className="bg-white/10 px-6 py-4 rounded border border-white/20 text-center">
              <h6 className="font-inter text-white font-bold text-sm mb-1">ANBG</h6>
              <p className="font-inter text-green-200 text-xs">
                Agence Nationale des<br />
                Bourses du Gabon
              </p>
            </div>
            <div className="bg-white/10 px-6 py-4 rounded border border-white/20 text-center">
              <h6 className="font-inter text-white font-bold text-sm mb-1">DGDI</h6>
              <p className="font-inter text-green-200 text-xs">
                Direction Générale de la<br />
                Diaspora et de l'Immigration
              </p>
            </div>
          </div>
        </div>

        {/* Ligne 4 - Copyright et mentions légales */}
        <div className="text-center border-t border-white/20 pt-8">
          <p className="font-inter text-xs text-green-200 mb-4">
            © {new Date().getFullYear()} - Angelina Charlotte Nongou-Mavikana (ép. Leyenberger) - Tous droits réservés
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/mentions-legales" className="font-inter text-xs text-green-200 hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="font-inter text-xs text-green-200 hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="/conditions-utilisation" className="font-inter text-xs text-green-200 hover:text-white transition-colors">
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;