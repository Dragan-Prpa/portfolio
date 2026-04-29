import React from 'react';
import Projekat from './Project';

const projektiData = [
  {
    title: 'FLIK',
    description: 'Hospitality management app with mobile ordering webapp.',
    technologyUsed: 'React(TS)+Remix /Laravel',
    image: '/images/FLIK_Logo.png',
    link: 'https://flikapp.com',
  },
  {
    title: 'Survive the Zombeans',
    description: '3D infinite wave-based zombie survival game',
    technologyUsed: 'Unity',
    image: '/images/Zombeans_Logo.png',
    link: 'https://github.com/Dragan-Prpa/SurviveTheZombeans',
  },
  {
    title: 'Saidkick',
    description: 'Plugin adding a customizable proactive agent to IntelliJ',
    technologyUsed: 'Kotlin',
    image: '/images/saidkick.png',
    link: 'https://github.com/Dragan-Prpa/Saidkick',
  },
  {
    title: 'MTGCard',
    description: 'Magic the Gathering custom companion',
    technologyUsed: 'Kotlin',
    image: '/images/MTGCard.png',
    link: 'https://github.com/Dragan-Prpa/MTGCard',
  }
];

const Projekti: React.FC = () => {
  return (

      <section className="p-8 flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projektiData.map((p) => (
              <Projekat
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  technologyUsed={p.technologyUsed}
                  image={p.image}
                  link={p.link}
              />
          ))}
        </div>
      </section>
  );
};

export default Projekti;