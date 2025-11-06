import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16 text-center">
      <h1 className="text-5xl font-extrabold text-[#002D25]">À Propos de FRESHYX</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        FRESHYX est une plateforme mondiale entièrement gérée par des jeunes, pour des jeunes. Notre mission est de permettre aux jeunes de développer leur potentiel de leadership en relevant les défis environnementaux grâce à des expériences pratiques et écoresponsables.
      </p>
      {/* Placeholder for more detailed about content */}
      <div className="mt-12 border-2 border-dashed border-gray-300 rounded-lg p-16">
        <p className="text-gray-500">Plus d'informations sur notre histoire, nos valeurs et notre équipe seront disponibles ici.</p>
      </div>
    </div>
  );
};

export default AboutPage;