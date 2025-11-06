import React from 'react';
import { Page, FormType } from '../App';

interface FooterProps {
    onNavigate: (page: Page) => void;
    onFormOpen: (type: FormType) => void;
}

const FacebookIcon: React.FC = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>;
const LinkedinIcon: React.FC = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.594-11.018-3.714v-2.155z"/></svg>;
const InstagramIcon: React.FC = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>;
const TiktokIcon: React.FC = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.83-.97-6.46-2.98-1.6-1.98-2.18-4.7-1.57-7.15.54-2.19 1.91-4.04 3.8-5.35 2.19-1.52 5.1-1.69 7.35-.45v5.08c-.71-.11-1.42-.19-2.13-.22-1.3-.04-2.6-.08-3.9-.04-1.3.02-2.58.23-3.83.67-.8.29-1.56.66-2.26 1.11-.67.43-1.28.94-1.83 1.51-.53.55-.98 1.16-1.35 1.8-.35.61-.63 1.27-.82 1.97-.24.88-.33 1.8-.31 2.73.03 1.25.29 2.49.79 3.66.49 1.14 1.22 2.17 2.16 3.04 1.05.95 2.33 1.63 3.73 1.95 1.53.34 3.14.36 4.72.03 1.45-.31 2.82-.87 4-1.63.99-.62 1.84-1.42 2.53-2.34.61-.83 1.1-1.78 1.41-2.8.29-1.01.44-2.07.44-3.13v-8.41c-1.44-.11-2.89-.48-4.22-1.13-.57-.28-1.1-.63-1.62-1.02-.01 2.91-.01 5.83-.01 8.74z"/></svg>;
const WhatsappIcon: React.FC = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.096l-.537 1.959 1.996-.52zM15.26 14.416c-.176-.09-1.057-.523-1.222-.581-.165-.058-.283-.09-.401.09-.118.179-.462.581-.567.702-.105.121-.21.136-.386.046-.176-.09-.747-.276-1.422-.88-.525-.472-.875-1.055-.979-1.234s-.011-.283.079-.373c.08-.08.176-.21.264-.316.088-.105.118-.179.176-.298.058-.119.029-.219-.015-.309-.044-.09-.401-1.057-.55-1.448-.149-.391-.299-.336-.417-.336s-.235-.015-.353-.015c-.118 0-.325.045-.49.224-.165.179-.633.62-633 1.524 0 .903.651 1.77 741 1.886.09.015 1.442-.581 1.65-1.18.208-.598.208-1.106.149-1.18s-.088-.12-.176-.21z"/></svg>;

const Footer: React.FC<FooterProps> = ({ onNavigate, onFormOpen }) => {
  return (
    <footer className="bg-[#002D25] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div>
            <h4 className="font-bold text-lg mb-4">Jeune</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onFormOpen('join'); }} className="cursor-pointer hover:text-white">Membres</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Talents</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Volontaires</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Organisation</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#partners" onClick={(e) => { e.preventDefault(); onNavigate('partners'); }} className="cursor-pointer hover:text-white">Devenez Partenaires</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Devenez Talents</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Devenez Volontaires</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Aide</a></li>
              <li><a href="#news" onClick={(e) => { e.preventDefault(); onNavigate('news'); }} className="cursor-pointer hover:text-white">Actualites</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Empreinte carbone</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Notre Association</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="cursor-pointer hover:text-white">A propos de nous</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onFormOpen('join'); }} className="cursor-pointer hover:text-white">Devenir membre</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Recherche d'opportunités</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
             <h4 className="font-bold text-lg mb-4">FRESHYX</h4>
             <p className="text-gray-300 text-sm">Nous sommes une association a but non lucratif.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy;FRESHYX 2025</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FacebookIcon/></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><LinkedinIcon/></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><InstagramIcon/></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><TiktokIcon/></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><WhatsappIcon/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;