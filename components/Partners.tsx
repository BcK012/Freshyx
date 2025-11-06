
import React from 'react';

const PartnerLogo: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
    <img src={src} alt={alt} className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
);

const Partners: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[#002D25]">Nos partenaires</h2>
                <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    <PartnerLogo src="https://i.imgur.com/L12n7s6.png" alt="PISHA Logo" />
                    <PartnerLogo src="https://i.imgur.com/2p58G5Y.png" alt="FAWE Logo" />
                    <PartnerLogo src="https://i.imgur.com/2D2X7vI.png" alt="TCHOM Logo" />
                </div>
            </div>
        </section>
    );
}

export default Partners;
