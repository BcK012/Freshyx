import React, { useState, useEffect } from 'react';

// Define the partner type for the data fetched from the API.
interface Partner {
    id: string;
    name: string;
    logoUrl: string;
    website: string;
}

interface PartnersProps {
    onPartnerSelect: (id: string) => void;
}

const API_URL = 'http://localhost:3001'; // Backend URL

const Partners: React.FC<PartnersProps> = ({ onPartnerSelect }) => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(`${API_URL}/api/partners`);
        if (!response.ok) {
          throw new Error('Failed to fetch partners');
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
    <section className="py-20 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#002D25]">Nos Partenaires</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Nous collaborons avec des organisations visionnaires qui partagent notre engagement pour un avenir durable.
        </p>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 min-h-[5rem]">
          {loading && <p>Chargement des partenaires...</p>}
          {error && <p className="text-red-500">Erreur: {error}</p>}
          {!loading && !error && partners.map((partner) => (
            <button 
              key={partner.id} 
              onClick={() => onPartnerSelect(partner.id)} 
              className="h-20 grayscale hover:grayscale-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-[#10B981] rounded-lg"
              aria-label={`Voir les détails de ${partner.name}`}
            >
               <img src={partner.logoUrl} alt={partner.name} className="h-full object-contain" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
