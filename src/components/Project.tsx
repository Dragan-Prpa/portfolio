import React from 'react';

interface ProjekatProps {
  title: string;
  description: string;
  technologyUsed: string;
  image: string;
  link: string; 
}

const Projekat: React.FC<ProjekatProps> = ({ title, description,technologyUsed, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-80 p-4 bg-cyberbg border border-cyberpurple rounded-md shadow-[0_0_10px_rgba(170,59,255,0.6)] hover:shadow-[0_0_20px_rgba(170,59,255,0.9)] transition-shadow duration-200"
    >
      <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-cyberpink text-xl font-bold mb-1">{title}</h3>
      <p className="text-cyberblue text-sm">{description}</p>
      <p className="text-cyberblue text-sm">{technologyUsed}</p>
    </a>
  );
};

export default Projekat;