import PageLayout from '@/components/layout/PageLayout';
import Button from '@/components/ui/Button';

const moyensImplication = [
  {
    titre: 'Bénévolat',
    description: 'Rejoignez nos équipes de bénévoles dans votre région',
    icon: '🤝',
    actions: ['Organisation d\'événements', 'Support administratif', 'Communication']
  },
  {
    titre: 'Expertise',
    description: 'Partagez vos compétences professionnelles',
    icon: '💡',
    actions: ['Conseil juridique', 'Marketing digital', 'Gestion de projet']
  },
  {
    titre: 'Financement',
    description: 'Soutenez financièrement notre campagne',
    icon: '💰',
    actions: ['Donation ponctuelle', 'Parrainage d\'événement', 'Cotisation mensuelle']
  },
  {
    titre: 'Ambassadeur',
    description: 'Devenez ambassadeur dans votre communauté',
    icon: '🌟',
    actions: ['Représentation locale', 'Mobilisation', 'Animation de réseau']
  }
];

const bureaux = [
  {
    region: 'Bureau Principal',
    ville: 'Libreville',
    pays: 'Gabon',
    adresse: '[Adresse complète - placeholder]',
    telephone: '+241 XX XX XX XX',
    email: 'libreville@diaspora-gabon-afrique.org'
  },
  {
    region: 'Bureau Afrique de l\'Ouest',
    ville: 'Lagos',
    pays: 'Nigeria',
    adresse: '[Adresse complète - placeholder]',
    telephone: '+234 XXX XXX XXXX',
    email: 'lagos@diaspora-gabon-afrique.org'
  },
  {
    region: 'Bureau Afrique Centrale',
    ville: 'Douala',
    pays: 'Cameroun',
    adresse: '[Adresse complète - placeholder]',
    telephone: '+237 XXX XXX XXX',
    email: 'douala@diaspora-gabon-afrique.org'
  },
  {
    region: 'Bureau Afrique de l\'Est',
    ville: 'Nairobi',
    pays: 'Kenya',
    adresse: '[Adresse complète - placeholder]',
    telephone: '+254 XXX XXX XXX',
    email: 'nairobi@diaspora-gabon-afrique.org'
  }
];

export default function ContactSimplquerPage() {
  return (
    <PageLayout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact & S&apos;impliquer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez notre mouvement et contribuez à construire une représentation forte
              et unie de la diaspora gabonaise en Afrique.
            </p>
          </div>

          {/* Moyens de S'impliquer */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Comment S&apos;impliquer ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {moyensImplication.map((moyen, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{moyen.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {moyen.titre}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {moyen.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {moyen.actions.map((action, i) => (
                      <div key={i} className="text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-1">
                        {action}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Je m&apos;engage
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Contactez-Nous
              </h2>
              <p className="text-gray-600 mb-8">
                Une question, une suggestion ou envie de nous rejoindre ?
                N&apos;hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="pays" className="block text-sm font-medium text-gray-700 mb-2">
                    Pays de résidence *
                  </label>
                  <select
                    id="pays"
                    name="pays"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez votre pays</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="cameroun">Cameroun</option>
                    <option value="kenya">Kenya</option>
                    <option value="afrique-du-sud">Afrique du Sud</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="benevolat">Bénévolat</option>
                    <option value="expertise">Partage d&apos;expertise</option>
                    <option value="financement">Soutien financier</option>
                    <option value="ambassadeur">Devenir ambassadeur</option>
                    <option value="question">Question générale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Décrivez votre demande ou votre motivation..."
                  ></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Envoyer le Message
                </Button>
              </form>
            </div>

            {/* Informations de Contact */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Nos Bureaux
              </h2>
              <div className="space-y-6">
                {bureaux.map((bureau, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {bureau.region}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <span className="w-5 h-5 mr-3">📍</span>
                        <div>
                          <div className="font-medium">{bureau.ville}, {bureau.pays}</div>
                          <div className="text-sm">{bureau.adresse}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="w-5 h-5 mr-3">📞</span>
                        <span>{bureau.telephone}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-5 h-5 mr-3">✉️</span>
                        <a href={`mailto:${bureau.email}`} className="text-primary hover:underline">
                          {bureau.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux Sociaux */}
              <div className="mt-8 bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Suivez-nous sur les Réseaux Sociaux
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200">
                    📘
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200">
                    ✖️
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200">
                    📷
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200">
                    💬
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Faire la Différence ?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Chaque contribution compte. Rejoignez-nous aujourd&apos;hui et participez à construire
              l&apos;avenir de la diaspora gabonaise en Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary-50">
                Télécharger notre Brochure
              </Button>
              <Button variant="primary" size="lg" className="bg-primary-700 border-primary-700 hover:bg-primary-800">
                Rejoindre Maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}