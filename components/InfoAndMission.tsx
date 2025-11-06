import React from 'react';
import { FormType } from '../App';

interface InfoAndMissionProps {
    onFormOpen: (type: FormType) => void;
}

const GlobeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053-.053a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-.053.053m-4.243 4.243l.053-.053a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-.053.053M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
);

const FootprintIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0891B2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      <text x="3" y="21" fontFamily="Verdana" fontSize="8">CO2</text>
    </svg>
);

const InfoAndMission: React.FC<InfoAndMissionProps> = ({ onFormOpen }) => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-16">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    <div className="flex items-center gap-6 p-6">
                        <GlobeIcon />
                        <div className="bg-[#0891B2] text-white p-6 rounded-lg">
                            <p>Nous formons des leaders guidés par des valeurs. FRESHYX vous permet de développer les valeurs que nous estimons essentielles à la vie d'un leader. <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold underline">En savoir plus →</a></p>
                        </div>
                    </div>
                     <div className="flex items-center gap-6 p-6">
                        <FootprintIcon />
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600">Placeholder for the second info box content. Could be about carbon footprint or other initiatives.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-[#002D25]">Notre mission</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Nous croyons que chaque jeune peut être un moteur du changement. Freshyx crée des opportunités pour apprendre, agir et innover face à l'urgence climatique.
                    </p>
                     <button onClick={() => onFormOpen('join')} className="mt-8 inline-block bg-[#10B981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#059669] transition-colors">
                        Rejoignez-nous
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InfoAndMission;