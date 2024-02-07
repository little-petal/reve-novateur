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
      "images": ["1/20220328_154018.jpg"]
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
      "images": ["2/20211130_095118.jpg"]
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
      "images": ["3/20210902_173956.jpg"]
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
      "images": ["4/20230804_143421.jpg"]
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
      "images": ["5/20220621_091014.jpg"]
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
      "images": ["6/IMG-20230915-WA0008.jpg"]
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
      "images": ["7/20240131_Facade Option 1_page-0003.jpg"]
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
      "images": ["8/FB_IMG_1646747313280.jpg"]
    }
  ] as Project[];

  // const skillsFile = await fs.readFile(process.cwd() + '/src/data/skills.json', 'utf8');
  // const skills = JSON.parse(skillsFile);
  const skills = [
    {
      "id": 1,
      "name": "Assistance Maîtrise d'ouvrage",
      "description": "Nous travaillons pour conceptualiser votre projet et le structurer dans le cadre normatif actuel. Pour cela, nous avons le process pour vous permettre de questionner votre projet sur les plans financier, assurantiel, technique et esthétique. Étude de faisabilité du projet.<br />Définition du budget<br />Accompagnement pour les demandes d'aides au financement (Prim Rénov / Prim CEE / Financement privés)<br />Accompagnement dans les démarches administratives<br />Choix des solutions techniques",
      "icon": null
    },
    {
      "id": 2,
      "name": "Maîtrise d'oeuvre - CES / Isolation / Etanchéité",
      "description": "Nous avons la compétence de réaliser les phases études de votre projet pour la réalisation des dossiers de consultation pour les lots des corps d'états secondaires.<br />Définition des solutions techniques en conformité avec les réglementations<br />Réalisation des dessins techniques des complexes et des raccords<br />Comptabilisation des quantitatifs ou des bordereaux<br />Consultation des entreprise<br />Analyse des offres<br />Contrat d'engagements<br />Direction des travaux",
      "icon": null
    },
    {
      "id": 3,
      "name": "Économie de la construction",
      "description": "Nous réalisons l'ensemble de vos estimatifs de travaux afin de pouvoir avancer dans les phases études en vous aidant à garder le cap financier.<br />Définition des solutions techniques viables financièrement<br />Comptabilisation des quantitatifs ou des bordereaux<br />Contrôle de l'estimatif selon les variations du marché<br />Suivi des indices de la fédération française du bâtiment",
      "icon": null
    },
    {
      "id": 4,
      "name": "Maîtrise d'oeuvre en suivi d'exécution",
      "description": "Nous coordonnons sur le secteur Haute Savoie / Savoie les entreprises de travaux. Nous garantissons ainsi la qualité, la propreté, la rapidité des travaux qui seront réalisés.<br />Compte rendu de chantier<br />Contrôle des réalisations conformément aux normes et aux CCTP<br />Suivi financiers et contrôle de facturation des entreprises<br />Réalisation des dossiers des ouvrages exécutés<br />Ordonnancement - Pilotage - Coordination",
      "icon": null
    },
    {
      "id": 5,
      "name": "Audit énergétique",
      "description": "Pour vous accompagner dans votre projet de rénovation nous proposons un bilan énergétique de votre habitation et accompagnement dans les choix d'un programme de rénovation thermique.<br />Diagnostic de l'existant<br />Réalisation de l'audit énergétique<br />Réalisation du dossier de demande d'aides à la rénovation<br />Proposition d'axes d'améliorations selon des enveloppes budgétaires",
      "icon": null
    },
    {
      "id": 6,
      "name": "Désamiantage",
      "description": "Comme de nombreux projets de rénovation impliquent la complexité du désamiantage, nous avons la capacité d'encadrement technique amiante sous section 3.<br />Réalisation de plans de diagnostics amiante<br />Rédaction de plans de retraits d'amiante<br />Suivi des travaux de désamiantage/démolition",
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
    <main className='static'>

      {/* Page d'accueil */}
      <section id="nav-landing-page" className='h-screen bg-cover bg-center bg-no-repeat bg-landing-page md:bg-landing-page flex flex-col snap-always snap-start relative'>
        <Header/>
        <div className="flex basis-1/2 items-end justify-center">
        <p className="text-5xl sm:text-6xl md:text-7xl font-bevan text-center">Du rêve à la réalisation.</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center">
          <a href="#nav-skills"><i className="fa-solid fa-arrow-down fa-fade fa-2xl md:fa-2xl"></i></a>
        </div>
      </section>

      {/* Compétences */}
      {/* <section id="nav-skills" className="h-fit min-h-screen flex flex-col bg-red-500/50 sm:bg-orange-500/50 md:bg-yellow-500/50 lg:bg-green-500/50 xl:bg-blue-500/50 2xl:bg-purple-500/50 snap-always snap-start"> */}
      <section id="nav-skills" className="h-fit min-h-screen flex flex-col bg-bluegray snap-always snap-start">
        <div className="h-24"></div>
        <div className="h-min p6 relative">
          <div className="absolute bg-white/20 z-10 mt-6 sm:mt-12 lg:mt-16 p-2 md:p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Compétences</p>
            {/* <p className="font-inter text-white text-xl md:text-xl lg:text-xl xl:text-2xl p-2">Tout voir</p> */}
          </div>
          <div className="inset-0 mt-0 sm:mt-16 2xl:mt-0 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 2xl:grid-cols-6 2xl:grid-rows-5 p-6 gap-6">
            <div className="w-full h-full row-span-1 sm:col-start-2 sm:col-span-1 lg:col-start-2 lg:col-span-1 lg:row-span-2 2xl:col-start-2 2xl:col-span-2 2xl:row-span-3 flex items-end">
              <List skills={skills} />
            </div>
            <div className="w-full h-full row-span-1 row-start-3 2xl:col-span-3 2xl:row-span-5">
              <img
                src="/assets/images/skills.jpg"
                alt="image"
                className="hidden 2xl:block h-full w-full object-cover"
              />
            </div>
            <div className="bg-white/20 w-full h-full sm:col-span-2 lg:start-col-3 lg:col-span-4 lg:row-span-1 2xl:col-span-3 2xl:row-span-2 flex items-center">
              <p className="font-bellaza text-white text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl p-2 text-center">Nous réalisons l&lsquo;encadrement et l&lsquo;organisation de vos projets de construction. Spécialisé dans la rénovation nous avons accumulé toutes les compétences afin de vous accompagner pour cadrer votre projet de réhabilitation depuis l&lsquo;audit énergétique jusqu&lsquo;à la restitution des clefs, en passant par le conseil en financements publiques. Comme toute maîtrise d&lsquo;œuvre nous savons travailler facilement sur des projets neufs. Comme certaines personnes souhaitent s&lsquo;investir dans les travaux de leur habitation nous cumulons des compétences transversales sur les constructions incluant des chantiers participatifs &#40;Neuf ossature bois isolation paille / Curage démantèlement / Enduits chaux, chaux chanvre / Jointement chaux ...&#41;. Cette capacité permet aux personnes motivées de réduire les coûts de leurs travaux.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Réalisations */}
      <section id="nav-projects" className="h-screen flex flex-col bg-bluegray relative snap-always snap-start">
        <div className="h-full p6 relative">
          <div className="absolute bg-white/20 z-10 mt-28 sm:mt-36 lg:mt-40 p-2 md:p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Réalisations</p>
            {/* <p className="font-inter text-white text-xl md:text-xl lg:text-2xl p-2">Tout voir</p> */}
          </div>
          <CarouselWithContent projects={projects}/>
        </div>
      </section>

      {/* Contact */}
      <section id="nav-contact" className="h-screen flex flex-col bg-bluegray snap-always snap-end">
        <div className="h-24"></div>
        <div className="h-full p6">
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
