import React, { useState, useEffect } from 'react';

// Define Partner type locally
interface Partner {
    id: string;
    name: string;
    logoUrl: string;
    description: string;
    website: string;
    category: 'Technologie' | 'Environnement' | 'Education' | 'Institutionnel';
}


interface PartnersPageProps {
  onPartnerSelect: (id: string) => void;
}

const API_URL = 'http://localhost:3001'; // Backend URL

const PartnerCard: React.FC<{ partner: Partner; onPartnerSelect: (id: string) => void }> = ({ partner, onPartnerSelect }) => (
  <div 
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer h-full"
    onClick={() => onPartnerSelect(partner.id)}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === 'Enter' && onPartnerSelect(partner.id)}
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

const SkeletonCard: React.FC = () => (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-24 mb-4 bg-gray-200 rounded-md mx-auto"></div>
        <div className="h-6 w-3/4 mb-2 bg-gray-200 rounded-md mx-auto"></div>
        <div className="h-4 w-1/2 mb-4 bg-gray-200 rounded-md mx-auto"></div>
        <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded-md"></div>
            <div className="h-4 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div>
        </div>
    </div>
);


const PartnersPage: React.FC<PartnersPageProps> = ({ onPartnerSelect }) => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(`${API_URL}/api/partners`);
        if (!response.ok) {
          throw new Error('Failed to fetch partners from the server.');
        }
        const data = await response.json();
        setPartners(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#002D25]">Nos Partenaires</h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez les entreprises, les ONG et les institutions qui soutiennent notre mission et collaborent avec nous pour créer un impact positif.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading && Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)}
        {error && <p className="col-span-full text-center text-red-500 font-semibold">Erreur: {error}</p>}
        {!loading && !error && partners.map(partner => (
          <PartnerCard key={partner.id} partner={partner} onPartnerSelect={onPartnerSelect} />
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
