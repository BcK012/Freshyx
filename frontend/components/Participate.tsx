import React from 'react';
import { FormType } from '../App';

interface ParticipateProps {
  onFormOpen: (type: FormType) => void;
}

const Participate: React.FC<ParticipateProps> = ({ onFormOpen }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-[#002D25] leading-snug">
            Participez aux activites de FRESHYX et vivez des experiences concretes
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Rejoignez l'une de nos sections locales et développez vos competences.
          </p>
          <button onClick={() => onFormOpen('join')} className="mt-8 inline-block bg-[#10B981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#059669] transition-colors">
            Devenir membre
          </button>
        </div>
        <div className="relative h-96 flex justify-center items-center">
            <div className="w-full max-w-md h-80 bg-gray-300 rounded-tl-[30%] rounded-tr-[70%] rounded-bl-[60%] rounded-br-[20%] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/community/800/600" alt="Community gathering" className="w-full h-full object-cover grayscale"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Participate;
