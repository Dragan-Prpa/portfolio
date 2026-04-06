import React from 'react';
import Projekat from './Project';

const projektiData = [
  {
    title: 'FLIK',
    description: 'Hospitality management app with mobile ordering webapp.',
    technologyUsed: 'React(TS)+Remix /Laravel',
    image: '/images/FLIK_Logo.png',
    link: '/portfolio',
  },
  {
    title: 'Example',
    description: 'aaaaaaaaa aaaaaaaaaaa a aaaaaaaaaa',
    technologyUsed: 'Unity',
    image: '/images/game.png',
    link: '/game',
  }
];

const Projekti: React.FC = () => {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
};

export default Projekti;