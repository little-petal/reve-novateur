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
      <Timeline className="place-items-start">
        {skills.map((skill) => (
          <TimelineItem key={skill.id}>
            {(skill.id != skills.length) && <TimelineConnector />}
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h3" color="blue-gray" className="font-bebas text-2xl md:text-3xl text-black" placeholder={undefined}>
                {skill.name}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="blue" className="font-inter text-black" placeholder={undefined}>
                <br />
                {/* {skill.description.slice(0, 10)} */}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        )
        )}
      </Timeline>
  );
}