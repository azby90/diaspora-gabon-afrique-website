'use client';

import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function ContactSimplquerPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  return (
    <PageLayout>
      <div className="bg-white min-h-screen" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="w-full px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-[1200px] mx-auto">

              {/* Section 1 : Titre & Introduction */}
              <div className="text-center mb-16">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Contact & S'impliquer
                </h1>
                <p className="text-base text-gray-600 leading-7 max-w-[700px] mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Vous souhaitez entrer en contact avec l'équipe de campagne ou participer activement à la mobilisation ?
                  Retrouvez ci-dessous toutes les informations utiles.
                </p>
              </div>

              {/* Séparateur */}
              <div className="border-t border-gray-200 mb-16"></div>

              {/* Section 2 : Coordonnées directes */}
              <div className="mb-16">
                <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Coordonnées
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">

                  {/* Email officiel */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Email
                    </h3>
                    <a
                      href="mailto:contact@diaspora-gabon-afrique.org"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      contact@diaspora-gabon-afrique.org
                    </a>
                  </div>

                  {/* Téléphone */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Téléphone
                    </h3>
                    <a
                      href="tel:+241XXXXXXXX"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      +241 XX XX XX XX
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#25D366', color: 'white' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/241XXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Envoyer un message
                    </a>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Réseaux sociaux
                    </h3>
                    <div className="flex justify-center space-x-3">
                      <a href="https://facebook.com/AngelinaNongouMavikana" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                        </svg>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                        </svg>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Séparateur */}
              <div className="border-t border-gray-200 mb-16"></div>

              {/* Section 3 : Formulaire de contact */}
              <div className="mb-16">
                <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Formulaire de contact
                </h2>

                <div className="max-w-[600px] mx-auto">
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Nom complet */}
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom et prénom"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      />
                    </div>

                    {/* Objet */}
                    <div>
                      <label htmlFor="objet" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Sujet *
                      </label>
                      <select
                        id="objet"
                        name="objet"
                        value={formData.objet}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="contact">Contact</option>
                        <option value="presse">Presse</option>
                        <option value="benevolat">Bénévolat</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Votre message..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      />
                    </div>

                    {/* Bouton Envoyer */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="text-sm font-medium text-white px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
                        style={{
                          fontFamily: 'Inter, system-ui, sans-serif',
                          backgroundColor: '#004080'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0A7A3B';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#004080';
                        }}
                      >
                        Envoyer
                      </button>
                    </div>

                  </form>
                </div>
              </div>

              {/* Séparateur */}
              <div className="border-t border-gray-200 mb-16"></div>

              {/* Section 4 : S'impliquer */}
              <div style={{ backgroundColor: '#F5F5F5' }} className="rounded-lg p-8 md:p-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  S'impliquer
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">

                  {/* Devenir bénévole */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Devenir bénévole
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Rejoignez nos équipes locales et participez concrètement à l'organisation de la campagne.
                    </p>
                    <div className="text-center">
                      <button
                        className="text-sm font-medium text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg"
                        style={{
                          fontFamily: 'Inter, system-ui, sans-serif',
                          backgroundColor: '#004080'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0A7A3B';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#004080';
                        }}
                      >
                        Je m'inscris
                      </button>
                    </div>
                  </div>

                  {/* Relayer la campagne */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Relayer la campagne
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Partagez nos messages et mobilisez votre entourage sur les réseaux sociaux et dans votre communauté.
                    </p>
                    <div className="text-center">
                      <button
                        className="text-sm font-medium text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg"
                        style={{
                          fontFamily: 'Inter, system-ui, sans-serif',
                          backgroundColor: '#004080'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0A7A3B';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#004080';
                        }}
                      >
                        Partager
                      </button>
                    </div>
                  </div>

                  {/* Soutenir la candidate */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Soutenir la candidate
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Contribuez au financement de notre campagne selon vos moyens et dans le respect de la loi.
                    </p>
                    <div className="text-center">
                      <button
                        className="text-sm font-medium text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg"
                        style={{
                          fontFamily: 'Inter, system-ui, sans-serif',
                          backgroundColor: '#004080'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0A7A3B';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#004080';
                        }}
                      >
                        Contribuer
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}