'use client'

import { CarouselWithContent } from "@/components/Carousel";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Project } from "@/types/Project";
import { Skill } from "@/types/Skill";
import { FormEvent, useState } from "react";
// import { promises as fs } from 'fs';

export default function Home() {
  // const projectsFile = await fs.readFile(process.cwd() + '/src/data/projects.json', 'utf8');
  // const projects = JSON.parse(projectsFile);
  const projects = [
    {
      "id": 1,
      "title": "Grange Fleury",
      "localisation": "Féternes Flon (74)",
      "description": "Rénovation thermique d'une grange",
      "architect": "NbO - Nelly Guyot",
      "cost": "450 k€",
      "status": "Terminé",
      "year": null,
      "type": [ "Economie", "MoE Etude et exécution", "Gros œuvre et TCE"],
      "images": [""]
    },
    {
      "id": 2,
      "title": "Chalets à Saint-Jean-de-Sixt",
      "localisation": "Saint Jean de Sixt (74)",
      "description": "Construction de deux chalets",
      "architect": "Cabinet M Architecte",
      "cost": "800 k€",
      "status": "Terminé",
      "year": null,
      "type": [ "Economie", "MoE Etude et exécution", "Gros œuvre et TCE"],
      "images": ["20220309_100827.jpg"]
    },
    {
      "id": 3,
      "title": "Chalet Demi-Quartier",
      "localisation": "Demi-Quartier (74)",
      "description": "Construction d'un chalet",
      "architect": "Brodbeck Roulet",
      "cost": "11 M€",
      "status": "Terminé",
      "year": null,
      "type": [ "Economie", "MoE Etude et exécution", "Lots - Démolition - terrassement - Gros oeuvre - Charpente"],
      "images": ["20220328_154018.jpg"]
    },
    {
      "id": 4,
      "title": "Construction bois-paille - Maison passive 140 m²",
      "localisation": "Breurey-lès-Faverney (71)",
      "description": "Construction bois-paille d'une maison passive de 140m²",
      "architect": "Sans architecte",
      "cost": null,
      "status": "Terminé",
      "year": null,
      "type": [ "Suivi - Terrassement et Dallage", "Réalisation Charpente - toiture - isolation paille", "Suivi - TCE"],
      "images": ["71693510_2334398653487933_3944377817231261696_n.jpg"]
    },
    {
      "id": 5,
      "title": "Rénovation esthétique - Appartement 75m²",
      "localisation": "Saint-Jeoire (74)",
      "description": "Rénovation esthétique d'un appartement 75m²",
      "architect": "Sans architecte",
      "cost": "40 k€",
      "status": "Terminé",
      "year": null,
      "type": [ "Conception réalisation"],
      "images": ["20220621_091014.jpg"]
    },
    {
      "id": 6,
      "title": "Rénovation thermique - Appartement 45m² - Blandan Meloce",
      "localisation": "Lyon (69)",
      "description": "Rénovation thermique d'un appartement 45m²",
      "architect": "Sans architecte",
      "cost": "140 k€",
      "status": "En cours",
      "year": null,
      "type": [ "AMO", "Economie", "MoE Etude et exécution - Réfection de l'intérieur"],
      "images": [""]
    },
    {
      "id": 7,
      "title": "Rénovation thermique - Maison pavillonnaire - Chemin du Panorama",
      "localisation": "Caluire-et-Cuire (69)",
      "description": "Rénovation thermique d'une maison pavillonnaire",
      "architect": "Sans architecte",
      "cost": "160 k€",
      "status": "En cours",
      "year": null,
      "type": [ "AMO", "Economie", "MoE Etude et exécution  ITE + toiture"],
      "images": [""]
    },
    {
      "id": 8,
      "title": "Rénovation thermique - Maison de 100 m²",
      "localisation": "Rochepaule (07)",
      "description": "Rénovation thermique d'une maison de 100m²",
      "architect": "Sans architecte",
      "cost": "140 k€",
      "status": "En cours",
      "year": null,
      "type": [ "Conception réalisation - Etanchéité de toiture terrasse + MeX + Corps d'états architecturaux"],
      "images": ["20220403_094544.jpg"]
    }
  ] as Project[];

  // const skillsFile = await fs.readFile(process.cwd() + '/src/data/skills.json', 'utf8');
  // const skills = JSON.parse(skillsFile);
  const skills = [
    {
      "id": 1,
      "name": "Compétence 1",
      "description": "Description de la compétence 1",
      "icon": null
    },
    {
      "id": 2,
      "name": "Compétence 2",
      "description": "Description de la compétence 2",
      "icon": null
    },
    {
      "id": 3,
      "name": "Compétence 3",
      "description": "Description de la compétence 3",
      "icon": null
    },
    {
      "id": 4,
      "name": "Compétence 4",
      "description": "Description de la compétence 4",
      "icon": null
    },
    {
      "id": 5,
      "name": "Compétence 5",
      "description": "Description de la compétence 5",
      "icon": null
    }
  ] as Skill[];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("DATA :" + name + email + message);
  }

  return (
    <main className='static lg:h-screen'>

      {/* Page d'accueil */}
      <section id="nav-landing-page" className='h-screen lg:h-full bg-cover bg-center bg-no-repeat bg-landing-page md:bg-landing-page flex flex-col snap-always snap-start relative'>
        <Header/>
        <div className="flex basis-1/2 items-end justify-center">
        <p className="text-5xl sm:text-6xl md:text-7xl font-bevan text-center">Du rêve à la réalisation.</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center">
          <a href="#nav-skills"><i className="fa-solid fa-arrow-down fa-fade fa-2xl md:fa-2xl"></i></a>
        </div>
      </section>

      {/* Compétences */}
      {/* <section id="nav-skills" className="h-fit lg:h-full flex flex-col bg-red-500/50 sm:bg-orange-500/50 md:bg-yellow-500/50 lg:bg-green-500/50 xl:bg-blue-500/50 2xl:bg-purple-500/50 snap-always snap-start"> */}
      <section id="nav-skills" className="h-fit lg:h-full flex flex-col bg-bluegray snap-always snap-start">
        <div className="h-16 lg:h-[10%]"></div>
        <div className="h-min lg:h-[90%] p6 relative">
          <div className="absolute bg-white/20 z-10 mt-6 sm:mt-12 lg:mt-16 p-2 md:p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-4xl xl:text-5xl p-2">Compétences</p>
            <p className="font-inter text-white text-xl md:text-xl lg:text-xl xl:text-2xl p-2">Tout voir</p>
          </div>
          <div className="lg:absolute inset-0 mt-0 sm:mt-16 lg:mt-0 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-6 lg:grid-rows-5 p-6 gap-6">
            <div className="w-full h-full row-span-1 sm:col-start-2 sm:col-span-1 lg:col-start-2 lg:col-span-2 lg:row-span-3 flex items-end">
              <List skills={skills} />
            </div>
            <div className="w-full h-full row-span-1 row-start-3 lg:col-span-3 lg:row-span-5">
              <img
                src="/assets/images/skills.jpg"
                alt="image"
                className="hidden lg:block h-full w-full object-cover"
              />
            </div>
            <div className="bg-white/20 w-full h-full sm:col-span-2 lg:col-span-3 lg:row-span-2 flex items-center">
              <p className="font-inter text-white text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl p-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis rhoncus nibh vitae volutpat. Nam condimentum a massa ut iaculis. Vivamus dictum leo non ipsum semper, ut luctus quam aliquet. Nullam eget suscipit mauris. In eu sodales nibh. Donec mattis eu leo id tempus. Quisque in mollis ex, at semper metus. Aenean sollicitudin mi non ex porttitor, vel tincidunt enim euismod. Quisque convallis porttitor quam, ut accumsan nulla. Quisque vel orci ac nisl maximus condimentum vitae at mauris. </p>
            </div>
          </div>
        </div>

      </section>

      {/* Réalisations */}
      <section id="nav-projects" className="h-screen lg:h-full flex flex-col bg-bluegray relative snap-always snap-end">
        <div className="h-16 lg:h-[10%]"></div>
        <div className="h-full lg:h-[90%] p6 relative">
          <div className="absolute bg-white/20 z-10 mt-6 sm:mt-12 lg:mt-16 p-2 md:p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Réalisations</p>
            <p className="font-inter text-white text-xl md:text-xl lg:text-2xl p-2">Tout voir</p>
          </div>
          <CarouselWithContent projects={projects}/>
        </div>
      </section>

      {/* Contact */}
      <section id="nav-contact" className="h-screen lg:h-full flex flex-col bg-bluegray snap-always snap-end">
        <div className="h-16 lg:h-[10%]"></div>
        <div className="h-full lg:h-[90%] p6">
          <div className="absolute bg-white/20 z-10 mt-6 sm:mt-12 lg:mt-16 p-2 md:p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Contact</p>
          </div>
          {/* <div className="mt-40 p-6">
            <form className="flex flex-col space-y-6" onSubmit={onSubmit}>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"/>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"/>
              <button type="submit">Envoyer</button>
            </form>
          </div> */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="border-double border-4 border-black rounded-lg bg-white mt-16 md:mt-0 w-[300px] h-[350px] md:w-[500px] md:h-[500px] flex flex-col justify-center items-center space-y-16 md:space-y-20 p-4">
              <div className="flex flex-row space-x-4">
                <img
                src="/assets/icons/appel.png"
                alt="Télephone"
                className="object-scale-down w-[40px]" /> 
                <p className="self-center text-xl md:text-2xl font-inter">+33 7 83 19 83 57</p>
              </div>
              <div className="flex flex-row space-x-4">
                <img
                src="/assets/icons/e-mail.png"
                alt="E-mail"
                className="object-scale-down w-[40px]" /> 
                <p className="self-center text-xl md:text-2xl font-inter">jb.lugand@hotmail.fr</p>
              </div>
              <div className="flex flex-row space-x-4">
                <img
                src="/assets/icons/home.png"
                alt="Adresse"
                className="object-scale-down w-[40px]" /> 
                <div className="flex flex-col self-center">
                  <p className="text-xl md:text-2xl font-inter">288, rue du Faucigny</p>
                  <p className="text-xl md:text-2xl font-inter">74490 Saint Jeoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
