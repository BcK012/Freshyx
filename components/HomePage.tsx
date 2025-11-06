import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Participate from './Participate';
import TheFreshyxWay from './TheFreshyxWay';
import InfoAndMission from './InfoAndMission';
import Impact from './Impact';
import Testimonials from './Testimonials';
import Partners from './Partners';
import { FormType } from '../App';

interface HomePageProps {
  onFormOpen: (type: FormType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onFormOpen }) => {
  return (
    <>
      <Hero onFormOpen={onFormOpen} />
      <Projects />
      <Participate onFormOpen={onFormOpen} />
      <TheFreshyxWay />
      <InfoAndMission onFormOpen={onFormOpen} />
      <Impact />
      <Testimonials onFormOpen={onFormOpen} />
      <Partners />
    </>
  );
};

export default HomePage;