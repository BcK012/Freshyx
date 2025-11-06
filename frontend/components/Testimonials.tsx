import React, { useState, useCallback, useEffect } from 'react';
import { FormType } from '../App';

interface TestimonialsProps {
    onFormOpen: (type: FormType) => void;
}

const testimonialsData = [
  {
    quote: "Grâce à FRESHYX, j'ai pu lancer ma première initiative de recyclage dans mon quartier.",
    name: "Afi, Lomé",
    imageUrl: "https://picsum.photos/seed/testi1/200/200"
  },
  {
    quote: "The skills I learned as a volunteer have been invaluable for my career and personal growth.",
    name: "John, Nairobi",
    imageUrl: "https://picsum.photos/seed/testi2/200/200"
  },
  {
    quote: "Connecting with like-minded young people from different countries has been an amazing experience.",
    name: "Maria, Dakar",
    imageUrl: "https://picsum.photos/seed/testi3/200/200"
  }
];

const ChevronLeftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
  
const ChevronRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);
  

const Testimonials: React.FC<TestimonialsProps> = ({ onFormOpen }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[#002D25]">Témoignages & histoires</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Grâce à notre soutien, de nombreux jeunes et acteurs du numérique ont pu franchir des étapes décisives et réaliser leurs ambitions.
                </p>

                <div className="mt-12 relative flex items-center justify-center">
                    <div className="w-full max-w-4xl mx-auto overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonialsData.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                                        <div className="w-full h-80 rounded-lg overflow-hidden">
                                            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="bg-[#002D25] text-white p-8 rounded-lg relative">
                                            <span className="absolute top-4 left-4 text-6xl text-gray-400 opacity-25 font-serif">“</span>
                                            <p className="text-xl italic">
                                                {testimonial.quote}
                                            </p>
                                            <p className="mt-4 font-bold text-right">- {testimonial.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center items-center gap-4">
                    <button onClick={prevSlide} className="bg-[#10B981] text-white p-3 rounded-full hover:bg-[#059669] transition-colors">
                        <ChevronLeftIcon />
                    </button>
                     <div className="flex gap-2">
                        {testimonialsData.map((_, index) => (
                            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#002D25]' : 'bg-gray-300'}`}></button>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="bg-[#10B981] text-white p-3 rounded-full hover:bg-[#059669] transition-colors">
                        <ChevronRightIcon />
                    </button>
                </div>
                 <button onClick={() => onFormOpen('internship')} className="mt-12 inline-block bg-transparent border-2 border-[#10B981] text-[#10B981] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#10B981] hover:text-white transition-colors">
                    Devenez stagiaire
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
