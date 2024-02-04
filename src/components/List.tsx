'use client'

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { Skill } from "@/types/Skill";

interface Props {
  skills: Skill[];
}

export function List({skills}: Props) {
  return (
      <Timeline className="lg:place-items-end xl:place-items-center">
        {skills.map((skill) => (
          <TimelineItem key={skill.id}>
            {(skill.id != skills.length) && <TimelineConnector />}
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h3" color="blue-gray" className="font-bebas text-black" placeholder={undefined}>
                {skill.name}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="blue" className="font-inter text-black" placeholder={undefined}>
                {skill.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        )
        )}
      </Timeline>
  );
}