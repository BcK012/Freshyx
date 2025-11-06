import React from 'react';

const PartnersPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16 text-center">
      <h1 className="text-5xl font-extrabold text-[#002D25]">Nos Partenaires</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Nous collaborons avec un réseau d'organisations engagées qui partagent notre vision d'un avenir durable. Découvrez ceux qui nous soutiennent dans notre mission.
      </p>
      {/* Placeholder for partner logos and details */}
      <div className="mt-12 border-2 border-dashed border-gray-300 rounded-lg p-16">
        <p className="text-gray-500">La liste de nos partenaires et les détails de nos collaborations seront affichés ici.</p>
      </div>
    </div>
  );
};

export default PartnersPage;
