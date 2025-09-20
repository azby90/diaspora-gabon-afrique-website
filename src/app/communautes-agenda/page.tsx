import PageLayout from '@/components/layout/PageLayout';
import Button from '@/components/ui/Button';

const communautes = [
  {
    region: 'Afrique de l\'Ouest',
    pays: ['Sénégal', 'Côte d\'Ivoire', 'Mali', 'Burkina Faso', 'Nigeria', 'Ghana'],
    representant: '[Nom du Représentant]',
    contact: 'ouest@diaspora-gabon-afrique.org'
  },
  {
    region: 'Afrique Centrale',
    pays: ['Cameroun', 'République Centrafricaine', 'Tchad', 'Congo-Brazzaville', 'RD Congo'],
    representant: '[Nom du Représentant]',
    contact: 'centre@diaspora-gabon-afrique.org'
  },
  {
    region: 'Afrique de l\'Est',
    pays: ['Kenya', 'Tanzanie', 'Rwanda', 'Ouganda', 'Éthiopie', 'Soudan'],
    representant: '[Nom du Représentant]',
    contact: 'est@diaspora-gabon-afrique.org'
  },
  {
    region: 'Afrique Australe',
    pays: ['Afrique du Sud', 'Botswana', 'Namibie', 'Zimbabwe', 'Zambie'],
    representant: '[Nom du Représentant]',
    contact: 'sud@diaspora-gabon-afrique.org'
  }
];

const evenements = [
  {
    date: '15 Octobre 2024',
    titre: 'Forum Économique de la Diaspora',
    lieu: 'Lagos, Nigeria',
    type: 'Économie',
    statut: 'À venir'
  },
  {
    date: '22 Octobre 2024',
    titre: 'Assemblée Générale Zone Centrale',
    lieu: 'Douala, Cameroun',
    type: 'Politique',
    statut: 'À venir'
  },
  {
    date: '5 Novembre 2024',
    titre: 'Festival Culturel Gabonais',
    lieu: 'Nairobi, Kenya',
    type: 'Culture',
    statut: 'À venir'
  },
  {
    date: '12 Novembre 2024',
    titre: 'Conférence Éducation & Formation',
    lieu: 'Le Cap, Afrique du Sud',
    type: 'Éducation',
    statut: 'À venir'
  }
];

export default function CommunautesAgendaPage() {
  return (
    <PageLayout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Communautés & Agenda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos communautés réparties à travers l&apos;Afrique et restez informés
              de tous les événements à venir.
            </p>
          </div>

          {/* Communautés par Région */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Nos Communautés par Région
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communautes.map((communaute, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {communaute.region}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Pays couverts :</h4>
                    <div className="flex flex-wrap gap-2">
                      {communaute.pays.map((pays, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {pays}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-gray-600 mb-2">
                      <strong>Représentant :</strong> {communaute.representant}
                    </p>
                    <p className="text-gray-600">
                      <strong>Contact :</strong>{' '}
                      <a href={`mailto:${communaute.contact}`} className="text-primary hover:underline">
                        {communaute.contact}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Statistiques */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Notre Réseau en Chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">54</div>
                <div className="text-gray-700">Pays africains</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-700">Associations partenaires</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25K+</div>
                <div className="text-gray-700">Membres actifs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-gray-700">Événements par an</div>
              </div>
            </div>
          </div>

          {/* Agenda des Événements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Agenda des Événements
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {evenements.map((event, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {event.titre}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-1">
                        <span className="mr-2">📅</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">📍</span>
                        <span>{event.lieu}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        event.type === 'Économie' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Politique' ? 'bg-green-100 text-green-800' :
                        event.type === 'Culture' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {event.type}
                      </span>
                      <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium">
                        {event.statut}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Plus d&apos;informations
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Rejoignez Votre Communauté Locale
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connectez-vous avec les Gabonais de votre région et participez aux événements
              organisés près de chez vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Trouver ma Communauté
              </Button>
              <Button variant="outline" size="lg">
                Proposer un Événement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}