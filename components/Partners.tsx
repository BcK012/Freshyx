import React from 'react';
import { partnersData } from '../data/partnersData';

const Partners: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#002D25]">Nos Partenaires</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Nous collaborons avec des organisations visionnaires qui partagent notre engagement pour un avenir durable.
        </p>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partnersData.map((partner) => (
            <div key={partner.id} className="h-20 grayscale hover:grayscale-0 transition-all duration-300">
               <a href={partner.website} target="_blank" rel="noopener noreferrer">
                 <img src={partner.logoUrl} alt={partner.name} className="h-full object-contain" />
               </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
