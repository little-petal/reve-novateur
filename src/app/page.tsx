'use server' 

import { CarouselWithContent } from "@/components/Carousel";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { promises as fs } from 'fs';

export default async function Home() {
  const projectsFile = await fs.readFile(process.cwd() + '/src/data/projects.json', 'utf8');
  const projects = JSON.parse(projectsFile);

  const skillsFile = await fs.readFile(process.cwd() + '/src/data/skills.json', 'utf8');
  const skills = JSON.parse(skillsFile);

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
          <div className="absolute bg-white/20 z-10 mt-16 p-2 md:p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Compétences</p>
            <p className="font-inter text-white text-xl md:text-xl lg:text-2xl p-2">Tout voir</p>
          </div>
          <div className="lg:absolute inset-20 mt-52 lg:inset-0 grid grid-cols-1 grid-rows-3 lg:grid-cols-6 lg:grid-rows-5 p-6 gap-6">
            <div className="bg-orange-500 w-full h-full row-span-1 lg:col-start-2 lg:col-span-2 lg:row-span-3 flex items-end">
              <List skills={skills} />
            </div>
            <div className="bg-yellow-500 w-full h-full row-span-1 row-start-3 lg:col-span-3 lg:row-span-5">
              <img
                src="/assets/images/skills.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-green-500 w-full h-full lg:col-span-3 lg:row-span-2 flex items-center">
              <p className="font-inter text-white text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl p-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis rhoncus nibh vitae volutpat. Nam condimentum a massa ut iaculis. Vivamus dictum leo non ipsum semper, ut luctus quam aliquet. Nullam eget suscipit mauris. In eu sodales nibh. Donec mattis eu leo id tempus. Quisque in mollis ex, at semper metus. Aenean sollicitudin mi non ex porttitor, vel tincidunt enim euismod. Quisque convallis porttitor quam, ut accumsan nulla. Quisque vel orci ac nisl maximus condimentum vitae at mauris. </p>
            </div>
          </div>
        </div>

      </section>

      {/* Réalisations */}
      <section id="nav-projects" className="h-screen lg:h-full flex flex-col bg-bluegray relative snap-always snap-end">
        <div className="h-16 lg:h-[10%]"></div>
        <div className="h-full lg:h-[90%] p6 relative">
          <div className="absolute bg-white/20 z-10 mt-16 p-2 md:p-6">
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
          <div className="absolute bg-white/20 z-10 mt-16 p-2 md:p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Contact</p>
          </div>
        </div>
      </section>
    </main>
  );
}
