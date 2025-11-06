import React, { useState } from 'react';
import { Page, FormType } from '../App';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    onFormOpen: (type: FormType) => void;
}

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const MenuIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

const Header: React.FC<HeaderProps> = ({ onNavigate, onFormOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#projects" onClick={(e) => { e.preventDefault(); onNavigate('projects'); setIsMenuOpen(false); }} className="cursor-pointer hover:text-[#059669]">Nos projets</a>
      <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); setIsMenuOpen(false); }} className="cursor-pointer hover:text-[#059669]">A propos</a>
      <a href="#partners" onClick={(e) => { e.preventDefault(); onNavigate('partners'); setIsMenuOpen(false); }} className="cursor-pointer hover:text-[#059669]">Partenaires</a>
      <a href="#news" onClick={(e) => { e.preventDefault(); onNavigate('news'); setIsMenuOpen(false); }} className="cursor-pointer hover:text-[#059669]">Actualites</a>
    </>
  );

  return (
    <header className="bg-[#F9FAFB] py-4 px-4 sm:px-6 lg:px-16 sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" onClick={(e) => {e.preventDefault(); onNavigate('home')}} className="text-3xl font-extrabold text-[#002D25] cursor-pointer">FRESHYX</a>
        
        <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="relative w-full max-w-sm">
                <input type="text" placeholder="Rechercher une opportunite" className="bg-white border border-gray-300 rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-[#059669]"/>
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <SearchIcon />
                </div>
            </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-bold">
          {navLinks}
        </nav>

        <div className="hidden lg:flex items-center space-x-4 ml-6">
          <button className="border border-[#002D25] rounded-full px-3 py-1 text-xs font-bold">GB ENG</button>
          <button><MoonIcon /></button>
          <button onClick={() => onFormOpen('register')} className="bg-[#10B981] text-white font-bold py-2 px-5 rounded-lg hover:bg-[#059669] transition-colors">S'inscrire</button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <nav className="flex flex-col items-center space-y-4 text-md font-bold">
            {navLinks}
             <button onClick={() => { onFormOpen('register'); setIsMenuOpen(false); }} className="bg-[#10B981] text-white font-bold py-2 px-5 rounded-lg hover:bg-[#059669] transition-colors w-full text-center">S'inscrire</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;