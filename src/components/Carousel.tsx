'use client'

import { Carousel } from "@material-tailwind/react";
import { Content } from "./Content";
import { Project } from "@/types/Project";
 
interface Props {
  projects: Project[];
}

export function CarouselWithContent({ projects }: Props) {
  return (
    <Carousel className="" autoplay={true} loop={true} placeholder={undefined}>
      {projects.map((project) => (
        <div key={project.id} className="relative h-full w-full">
          <img
            src={"/assets/images/projects/" + project.images[0]}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <Content number={projects.length} id={project.id} title={project.title}/>
        </div>
      ))}
    </Carousel>
  );
}