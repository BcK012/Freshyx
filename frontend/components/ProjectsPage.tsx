import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16 text-center">
      <h1 className="text-5xl font-extrabold text-[#002D25]">Nos Projets</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Découvrez les initiatives et les projets que nous menons pour allier technologie et environnement. Chaque projet est une opportunité d'apprendre, d'agir et d'innover pour un avenir durable.
      </p>
      {/* Placeholder for project listings */}
      <div className="mt-12 border-2 border-dashed border-gray-300 rounded-lg p-16">
        <p className="text-gray-500">La liste détaillée des projets sera affichée ici.</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
