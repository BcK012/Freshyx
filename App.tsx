import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import PartnersPage from './components/PartnersPage';
import NewsPage from './components/NewsPage';
import FormPage from './components/FormPage';

export type Page = 'home' | 'projects' | 'about' | 'partners' | 'news' | 'form';
export type FormType = 'join' | 'register' | 'internship';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [formType, setFormType] = useState<FormType>('join');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const handleFormOpen = (type: FormType) => {
    setFormType(type);
    setCurrentPage('form');
    window.scrollTo(0, 0);
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'partners':
        return <PartnersPage />;
      case 'news':
        return <NewsPage />;
      case 'form':
        const formDetails = {
            join: { title: 'Rejoignez Notre Communauté', description: 'Devenez membre pour participer à nos activités, développer vos compétences et agir pour l\'environnement.' },
            register: { title: 'Inscrivez-vous', description: 'Créez votre compte pour accéder à toutes les opportunités et rester informé de nos dernières actualités.' },
            internship: { title: 'Devenez Stagiaire', description: 'Postulez pour une de nos opportunités de stage et gagnez une expérience précieuse en travaillant sur des projets concrets.' },
        };
        return <FormPage 
            title={formDetails[formType].title} 
            description={formDetails[formType].description}
            onBack={() => handleNavigate('home')}
        />;
      case 'home':
      default:
        return <HomePage onFormOpen={handleFormOpen} />;
    }
  };

  return (
    <div className="bg-[#F9FAFB] text-[#002D25] overflow-x-hidden min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} onFormOpen={handleFormOpen} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} onFormOpen={handleFormOpen} />
    </div>
  );
};

export default App;