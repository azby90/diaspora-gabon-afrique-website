'use client';

import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/layout/Hero';
import NewsAndMessage from '@/components/sections/NewsAndMessage';

export default function Home() {
  return (
    <PageLayout className="pt-0">
      {/* Bannière Hero */}
      <Hero />

      {/* Section Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="font-inter text-4xl font-bold text-black mb-8">
              Notre Vision
            </h2>
            <p className="font-inter text-lg text-gray-700 leading-relaxed max-w-[800px] mx-auto">
              Nous croyons en une diaspora gabonaise unie, moderne et écoutée.
              Notre vision est de créer des ponts durables entre nos compatriotes
              dispersés aux quatre coins de l'Afrique et notre nation d'origine,
              pour bâtir ensemble un avenir où chaque Gabonais se sent pleinement
              représenté et fier de contribuer au rayonnement du Gabon.
            </p>
          </div>
        </div>
      </section>

      {/* Section Actualités + Lettre */}
      <NewsAndMessage />

      {/* Section CTA finale */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-inter text-4xl font-bold text-black mb-6">
            Rejoignez Notre Mouvement
          </h2>
          <p className="font-inter text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Ensemble, construisons l'avenir de la diaspora gabonaise en Afrique.
            Votre participation fait la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-simpliquer"
              className="inline-flex items-center justify-center font-inter text-base font-medium bg-primary text-white hover:bg-primary-600 px-8 py-4 rounded-xl transition-all duration-200"
            >
              Rejoindre la Campagne
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center font-inter text-base font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl transition-all duration-200"
            >
              S'abonner aux Actualités
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}