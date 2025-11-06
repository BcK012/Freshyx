import React from 'react';
import { partnersData, Partner } from '../data/partnersData';

interface PartnersPageProps {
  onPartnerSelect: (id: string) => void;
}

const PartnerCard: React.FC<{ partner: Partner; onPartnerSelect: (id: string) => void }> = ({ partner, onPartnerSelect }) => (
  <div 
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
    onClick={() => onPartnerSelect(partner.id)}
  >
    <div className="h-24 mb-4 flex items-center">
      <img src={partner.logoUrl} alt={`${partner.name} logo`} className="max-h-full max-w-full object-contain" />
    </div>
    <h3 className="text-xl font-bold text-[#002D25]">{partner.name}</h3>
    <p className="text-sm font-semibold text-gray-500 mb-4">{partner.category}</p>
    <p className="text-gray-600 text-sm flex-grow">
        {partner.description.substring(0, 100)}...
    </p>
    <span className="mt-4 text-[#10B981] font-bold text-sm hover:underline">En savoir plus &rarr;</span>
  </div>
);

const PartnersPage: React.FC<PartnersPageProps> = ({ onPartnerSelect }) => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#002D25]">Nos Partenaires</h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez les entreprises, les ONG et les institutions qui soutiennent notre mission et collaborent avec nous pour créer un impact positif.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnersData.map(partner => (
          <PartnerCard key={partner.id} partner={partner} onPartnerSelect={onPartnerSelect} />
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
