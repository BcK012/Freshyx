import React from 'react';
import { partnersData } from '../data/partnersData';

interface PartnerDetailPageProps {
  partnerId: string;
  onBack: () => void;
}

const PartnerDetailPage: React.FC<PartnerDetailPageProps> = ({ partnerId, onBack }) => {
  const partner = partnersData.find(p => p.id === partnerId);

  if (!partner) {
    return (
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16 text-center">
        <h2 className="text-3xl font-bold text-red-600">Partenaire non trouvé</h2>
        <p className="mt-4 text-gray-600">Le partenaire que vous recherchez n'existe pas.</p>
        <button onClick={onBack} className="mt-8 inline-block bg-[#10B981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#059669] transition-colors">
          &larr; Retour aux partenaires
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16">
      <button onClick={onBack} className="mb-8 text-[#002D25] font-bold hover:underline">
        &larr; Retour à la liste des partenaires
      </button>
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center items-center">
                 <img src={partner.logoUrl} alt={`${partner.name} logo`} className="max-h-40 object-contain" />
            </div>
            <div className="md:col-span-2">
                <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{partner.category}</span>
                <h1 className="text-4xl font-extrabold text-[#002D25] mt-2">{partner.name}</h1>
                <p className="mt-4 text-lg text-gray-700">{partner.description}</p>
                 <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-6 inline-block bg-[#10B981] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#059669] transition-colors"
                    >
                    Visiter le site web
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetailPage;
