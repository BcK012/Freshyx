import React from 'react';
import { FormType } from '../App';

interface HeroProps {
  onFormOpen: (type: FormType) => void;
}

const Hero: React.FC<HeroProps> = ({ onFormOpen }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#002D25] leading-tight">
            Allions la <br />
            <span className="bg-[#FBBF24] px-4 rounded-md">technologie</span> à
            <br />
            <span className="bg-[#002D25] text-white px-4 rounded-md">l'environnement !</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            À travers diverses expériences écoresponsables, nous visons à relever les défis environnementaux et à renforcer le pouvoir.
          </p>
          <button onClick={() => onFormOpen('join')} className="mt-8 inline-block bg-[#10B981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#059669] transition-colors">
            Rejoignez-nous
          </button>
        </div>
        <div className="relative h-96 flex items-center justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-300 rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[50%] rounded-br-[30%] overflow-hidden shadow-xl">
                 <img src="https://picsum.photos/seed/person1/400/400" alt="Person 1" className="w-full h-full object-cover grayscale"/>
            </div>
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-300 rounded-tl-[60%] rounded-tr-[30%] rounded-bl-[30%] rounded-br-[70%] overflow-hidden shadow-2xl transform translate-x-4 -translate-y-4">
                 <img src="https://picsum.photos/seed/person2/400/400" alt="Person 2" className="w-full h-full object-cover grayscale"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;