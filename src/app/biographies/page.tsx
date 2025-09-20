import PageLayout from '@/components/layout/PageLayout';
import Button from '@/components/ui/Button';

export default function BiographiesPage() {
  return (
    <PageLayout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Candidats
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les parcours et engagements de nos candidats dédiés à la représentation
              de la diaspora gabonaise en Afrique.
            </p>
          </div>

          {/* Candidat Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-primary-50 rounded-2xl p-2">
                <div className="bg-white rounded-xl p-8">
                  <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl">👨‍💼</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      [Nom du Candidat Principal]
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      Candidat Principal - Zone Afrique
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Candidat Principal
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Formation :</strong> [Diplômes et formations - placeholder]
                </p>
                <p>
                  <strong>Expérience professionnelle :</strong> [Carrière et expériences - placeholder]
                </p>
                <p>
                  <strong>Engagement associatif :</strong> [Activités associatives et communautaires - placeholder]
                </p>
                <p>
                  <strong>Vision :</strong> [Vision pour la diaspora gabonaise en Afrique - placeholder]
                </p>
              </div>
            </div>
          </div>

          {/* Candidat Suppléant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-primary-50 rounded-2xl p-2">
                <div className="bg-white rounded-xl p-8">
                  <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl">👩‍💼</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      [Nom du Candidat Suppléant]
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      Candidat Suppléant - Zone Afrique
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Candidat Suppléant
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Formation :</strong> [Diplômes et formations - placeholder]
                </p>
                <p>
                  <strong>Expérience professionnelle :</strong> [Carrière et expériences - placeholder]
                </p>
                <p>
                  <strong>Engagement associatif :</strong> [Activités associatives et communautaires - placeholder]
                </p>
                <p>
                  <strong>Vision :</strong> [Vision complémentaire pour la diaspora - placeholder]
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Rejoignez Notre Équipe
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous souhaitez contribuer à notre campagne ou en savoir plus sur nos candidats ?
              Contactez-nous dès aujourd&apos;hui.
            </p>
            <Button variant="primary" size="lg">
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}