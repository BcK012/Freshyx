import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16 text-center">
      <h1 className="text-5xl font-extrabold text-[#002D25]">Actualités</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Restez informés des dernières nouvelles, événements et histoires de la communauté FRESHYX. C'est ici que nous partageons nos succès, nos apprentissages et les opportunités à venir.
      </p>
      {/* Placeholder for news articles */}
      <div className="mt-12 border-2 border-dashed border-gray-300 rounded-lg p-16">
        <p className="text-gray-500">Les articles et les mises à jour seront affichés ici.</p>
      </div>
    </div>
  );
};

export default NewsPage;
