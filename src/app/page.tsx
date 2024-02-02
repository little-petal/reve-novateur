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
    <main className='static h-screen'>

      {/* Page d'accueil */}
      <section id="nav-landing-page" className='h-full bg-cover bg-center bg-no-repeat bg-landing-page md:bg-landing-page flex flex-col snap-always snap-start relative'>
        <Header/>
        <div className="flex basis-1/2 items-end justify-center">
        <p className="text-7xl font-bevan">Du rêve à la réalisation.</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center">
          <a href="#nav-skills"><i className="fa-solid fa-arrow-down fa-fade fa-2xl md:fa-2xl"></i></a>
        </div>
      </section>

      {/* Compétences */}
      <section id="nav-skills" className="h-full flex flex-col bg-bluegray snap-always snap-start">
        <div className="h-[10%]"></div>
        <div className="h-full flex flex-col lg:flex-row justify-center content-center h-52">
          <div className="flex flex-col basis-1/2">
            <div className="absolute bg-white/20 mt-16 p-6">
              <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Compétences</p>
              <p className="font-inter text-white text-xl md:text-xl lg:text-2xl p-2">Tout voir</p>
            </div>
            <div className="flex flex-row basis-2/3">
              <div className="basis-1/2"></div>
              <div className="basis-1/2 flex items-end">
              <List skills={skills} />
              </div>
            </div>
            <div className="bg-white/20 basis-1/3 ml-6 mb-6 p-6">
              <p className="font-inter text-white text-xl md:text-xl lg:text-2xl p-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis rhoncus nibh vitae volutpat. Nam condimentum a massa ut iaculis. Vivamus dictum leo non ipsum semper, ut luctus quam aliquet. Nullam eget suscipit mauris. In eu sodales nibh. Donec mattis eu leo id tempus. Quisque in mollis ex, at semper metus. Aenean sollicitudin mi non ex porttitor, vel tincidunt enim euismod. Quisque convallis porttitor quam, ut accumsan nulla. Quisque vel orci ac nisl maximus condimentum vitae at mauris. Curabitur molestie dictum eros, eu sodales lorem pretium vitae. </p>
            </div>
          </div>
          <div className="flex basis-1/2 p-6">
            <img
              src="/assets/images/skills.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="nav-projects" className="h-full flex flex-col bg-bluegray relative snap-always snap-end">
        <div className="h-[10%]"></div>
        <div className="h-[90%] p6">
          <div className="absolute bg-white/20 z-10 mt-16 p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Réalisations</p>
            <p className="font-inter text-white text-xl md:text-xl lg:text-2xl p-2">Tout voir</p>
          </div>
          <CarouselWithContent projects={projects}/>
        </div>
      </section>

      {/* Contact */}
      <section id="nav-contact" className="h-full flex flex-col bg-bluegray snap-always snap-end">
        <div className="h-[10%]"></div>
        <div className="h-[90%] p6">
          <div className="absolute bg-white/20 z-10 mt-16 p-6">
            <p className="font-bebas text-white text-3xl md:text-4xl lg:text-5xl p-2">Contact</p>
          </div>
        </div>
      </section>
    </main>
  );
}
