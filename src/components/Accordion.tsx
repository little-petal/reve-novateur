'use client'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Skill } from "@/types/Skill";

interface Props {
  skills: Skill[];
}

export function DefaultAccordion({skills}: Props) {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="flex flex-col">
      {skills.map((skill) => (
        <Accordion key={skill.id} open={open === skill.id} placeholder={undefined}>
          <AccordionHeader onClick={() => handleOpen(skill.id)} className="font-bebas text-2xl md:text-3xl text-black" placeholder={undefined}>{skill.name}</AccordionHeader>
          <AccordionBody className="font-inter text-black">
            {skill.description}
            <ul className="list-disc">
              {skill.list.map((detail, index) => (
                <li key={index} className="ml-6">{detail}</li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}