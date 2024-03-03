'use server' 

import { DefaultAccordion } from "@/components/Accordion";
import { CarouselWithContent } from "@/components/Carousel";
import { Header } from "@/components/Header";
// import { FormEvent, useState } from "react";
import { promises as fs } from 'fs';

export default async function Home() {
  const projectsFile = await fs.readFile(process.cwd() + '/src/data/projects.json', 'utf8');
  const projects = JSON.parse(projectsFile);
  
  const skillsFile = await fs.readFile(process.cwd() + '/src/data/skills.json', 'utf8');
  const skills = JSON.parse(skillsFile);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const onSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("DATA :" + name + email + message);
  // }

  return (
    <main className='static'>

      {/* Page d'accueil */}
      <section id="nav-landing-page" className='h-screen bg-cover bg-center bg-no-repeat bg-landing-page md:bg-landing-page flex flex-col snap-always snap-start relative'>
        <Header/>
        <div className="flex basis-1/2 items-end justify-center">
        <p className="text-black text-5xl sm:text-6xl md:text-7xl font-bevan text-center">Du rêve à la réalisation.</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center">
          <a href="#nav-skills"><i className="text-black fa-solid fa-arrow-down fa-fade fa-2xl md:fa-2xl"></i></a>
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
          <div className="inset-0 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 2xl:grid-cols-6 2xl:grid-rows-5 p-6 gap-6">
            <div className="mt-24 sm:mt-0 2xl:mt-0 w-full h-full row-span-1 sm:col-start-2 sm:col-span-1 lg:col-start-2 lg:col-span-1 lg:row-span-2 2xl:col-start-2 2xl:col-span-2 2xl:row-span-3 flex items-start">
              <DefaultAccordion skills={skills} />
            </div>
            <div className="w-full h-full row-span-1 row-start-3 2xl:col-span-3 2xl:row-span-5">
              <img
                src="/assets/images/skills.jpg"
                alt="image"
                className="hidden 2xl:block h-full w-full object-cover"
              />
            </div>
            <div className="bg-white/20 w-full h-full sm:col-span-2 lg:start-col-3 lg:col-span-4 lg:row-span-1 2xl:col-span-3 2xl:row-span-2 flex items-center">
              <p className="font-bellaza text-white text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl p-2 text-justify">Nous réalisons l&lsquo;encadrement et l&lsquo;organisation de vos projets de construction. Spécialisé dans la rénovation nous avons accumulé toutes les compétences afin de vous accompagner pour cadrer votre projet de réhabilitation depuis l&lsquo;audit énergétique jusqu&lsquo;à la restitution des clefs, en passant par le conseil en financements publiques. Comme toute maîtrise d&lsquo;œuvre nous savons travailler facilement sur des projets neufs. Comme certaines personnes souhaitent s&lsquo;investir dans les travaux de leur habitation nous cumulons des compétences transversales sur les constructions incluant des chantiers participatifs &#40;Neuf ossature bois isolation paille / Curage démantèlement / Enduits chaux, chaux chanvre / Jointement chaux ...&#41;. Cette capacité permet aux personnes motivées de réduire les coûts de leurs travaux.</p>
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
                alt="Téléphone"
                className="object-scale-down w-[40px]" /> 
                <p className="self-center text-black text-xl md:text-2xl font-inter">+33 7 83 19 83 57</p>
              </div>
              <div className="flex flex-row space-x-4">
                <img
                src="/assets/icons/e-mail.png"
                alt="E-mail"
                className="object-scale-down w-[40px]" /> 
                <p className="self-center text-black text-xl md:text-2xl font-inter">jb.lugand@hotmail.fr</p>
              </div>
              <div className="flex flex-row space-x-4">
                <img
                src="/assets/icons/home.png"
                alt="Adresse"
                className="object-scale-down w-[40px]" /> 
                <div className="flex flex-col self-center">
                  <p className="text-black text-xl md:text-2xl font-inter">288, rue du Faucigny</p>
                  <p className="text-black text-xl md:text-2xl font-inter">74490 Saint Jeoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
