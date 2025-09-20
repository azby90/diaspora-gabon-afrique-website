import PageLayout from '@/components/layout/PageLayout';
import PromiseCard from '@/components/ui/PromiseCard';
import Button from '@/components/ui/Button';
import { Promise } from '@/types';

const programmePoints: Promise[] = [
  {
    id: '1',
    title: 'Facilitation Administrative',
    description: 'Simplifier les démarches consulaires et administratives pour tous les Gabonais vivant en Afrique.',
    icon: '📋'
  },
  {
    id: '2',
    title: 'Réseau Économique',
    description: 'Créer un réseau d\'entrepreneurs et favoriser les échanges commerciaux intra-africains.',
    icon: '🤝'
  },
  {
    id: '3',
    title: 'Éducation & Formation',
    description: 'Développer des programmes d\'éducation et de formation continue pour la diaspora.',
    icon: '🎓'
  },
  {
    id: '4',
    title: 'Santé & Protection Sociale',
    description: 'Améliorer l\'accès aux soins et mettre en place un système de protection sociale.',
    icon: '🏥'
  },
  {
    id: '5',
    title: 'Culture & Identité',
    description: 'Préserver et promouvoir la culture gabonaise à travers tout le continent africain.',
    icon: '🎭'
  },
  {
    id: '6',
    title: 'Jeunesse & Sport',
    description: 'Créer des opportunités pour la jeunesse et développer les activités sportives.',
    icon: '⚽'
  }
];

export default function ProgrammePage() {
  return (
    <PageLayout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Notre Programme
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un programme ambitieux et réaliste pour une représentation efficace
              de la diaspora gabonaise en Afrique.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Notre Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Construire une diaspora gabonaise unie, prospère et solidaire à travers l&apos;Afrique,
                capable de contribuer au développement du Gabon tout en s&apos;épanouissant dans leurs pays de résidence.
                Nous croyons en une représentation authentique qui place les besoins de nos compatriotes au cœur de chaque décision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Pays africains</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-gray-600">Gabonais de la diaspora</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-gray-600">Axes prioritaires</div>
                </div>
              </div>
            </div>
          </div>

          {/* Programme Points */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Nos 6 Axes Prioritaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programmePoints.map((point) => (
                <PromiseCard key={point.id} promise={point} />
              ))}
            </div>
          </div>

          {/* Méthode Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Notre Méthode
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  🎯 Approche Participative
                </h3>
                <p className="text-gray-600">
                  Consultation régulière de la diaspora through forums, sondages et assemblées générales
                  pour s&apos;assurer que nos actions reflètent vos besoins réels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  📊 Transparence Totale
                </h3>
                <p className="text-gray-600">
                  Rapports d&apos;activité trimestriels, budgets transparents et communication ouverte
                  sur tous nos projets et initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  🤝 Partenariats Stratégiques
                </h3>
                <p className="text-gray-600">
                  Collaboration avec les institutions gabonaises, les organisations africaines
                  et les associations de la diaspora existantes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  📈 Résultats Mesurables
                </h3>
                <p className="text-gray-600">
                  Objectifs clairs avec indicateurs de performance pour mesurer l&apos;impact concret
                  de nos actions sur la vie de la diaspora.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ensemble, Réalisons Ce Programme
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Votre soutien et votre participation sont essentiels pour concrétiser cette vision.
              Rejoignez-nous dans cette aventure !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Rejoindre la Campagne
              </Button>
              <Button variant="outline" size="lg">
                Télécharger le Programme Complet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}