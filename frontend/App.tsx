import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import PartnersPage from './components/PartnersPage';
import NewsPage from './components/NewsPage';
import FormPage from './components/FormPage';
import PartnerDetailPage from './components/PartnerDetailPage';

// Define types that are used across the app
export type Page = 'home' | 'projects' | 'about' | 'partners' | 'news' | `partner/${string}`;
export type FormType = 'register' | 'join' | 'internship';

interface AppState {
  currentPage: Page;
  currentForm: FormType | null;
  selectedPartnerId: string | null;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentForm, setCurrentForm] = useState<FormType | null>(null);
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);


  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setCurrentForm(null);
    setSelectedPartnerId(null);
    window.scrollTo(0, 0);
  };

  const handleFormOpen = (type: FormType) => {
    setCurrentForm(type);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentForm(null);
    setSelectedPartnerId(null);
    if(currentPage.startsWith('partner/')) {
        setCurrentPage('partners');
    }
  };

  const handlePartnerSelect = (id: string) => {
    setCurrentPage(`partner/${id}`);
    setSelectedPartnerId(id);
    window.scrollTo(0, 0);
  }
  
  const renderForm = () => {
    if (!currentForm) return null;
    
    let title = '';
    let description = '';
    
    switch(currentForm) {
      case 'register':
        title = "S'inscrire";
        description = "Remplissez le formulaire ci-dessous pour créer votre compte et commencer votre voyage avec FRESHYX.";
        break;
      case 'join':
        title = "Rejoignez-nous";
        description = "Devenez membre de notre communauté et participez à nos initiatives pour un avenir plus vert.";
        break;
      case 'internship':
        title = "Devenez Stagiaire";
        description = "Postulez pour un stage et acquérez une expérience pratique en travaillant sur des projets environnementaux impactants.";
        break;
    }

    return <FormPage title={title} description={description} onBack={handleBack} />;
  }

  const renderPage = () => {
    if (currentForm) {
      return renderForm();
    }
    
    if (currentPage.startsWith('partner/')) {
        const partnerId = currentPage.split('/')[1];
        return <PartnerDetailPage partnerId={partnerId} onBack={() => handleNavigate('partners')} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onFormOpen={handleFormOpen} onNavigate={handleNavigate} onPartnerSelect={handlePartnerSelect}/>;
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'partners':
        return <PartnersPage onPartnerSelect={handlePartnerSelect} />;
      case 'news':
        return <NewsPage />;
      default:
        return <HomePage onFormOpen={handleFormOpen} onNavigate={handleNavigate} onPartnerSelect={handlePartnerSelect}/>;
    }
  };

  return (
    <div className="bg-[#F9FAFB] text-gray-800 font-sans">
      <Header onNavigate={handleNavigate} onFormOpen={handleFormOpen} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} onFormOpen={handleFormOpen} />
    </div>
  );
};

export default App;
