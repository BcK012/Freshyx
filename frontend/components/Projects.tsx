import React from 'react';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  buttonColor: string;
  logoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, buttonColor, logoUrl }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="h-48 flex items-center justify-center p-4">
        <img className="h-24 object-contain" src={logoUrl} alt={`${title} logo`} />
    </div>
    <div className="relative h-48">
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
    </div>
    <button className={`w-full text-white font-bold py-4 text-lg ${buttonColor}`}>
      {title}
    </button>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#002D25]">Nos projets</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            À travers diverses expériences écoresponsables, nous visons à relever les défis environnementaux et à renforcer le pouvoir d'action de la prochaine.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Empreinte carbone" 
            imageUrl="https://picsum.photos/seed/carbone/600/400"
            buttonColor="bg-[#10B981] hover:bg-[#059669]"
            logoUrl="https://i.imgur.com/g8e1O0O.png" // Placeholder logo image
          />
          <ProjectCard 
            title="Sayna connect" 
            imageUrl="https://picsum.photos/seed/connect/600/400"
            buttonColor="bg-[#0891B2] hover:bg-[#0E7490]"
            logoUrl="https://picsum.photos/seed/logo2/200/100" // Placeholder logo image
          />
          <ProjectCard 
            title="Volontariat" 
            imageUrl="https://picsum.photos/seed/volontariat/600/400"
            buttonColor="bg-[#FBBF24] hover:bg-[#F59E0B]"
            logoUrl="https://picsum.photos/seed/logo3/200/100" // Placeholder logo image
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
