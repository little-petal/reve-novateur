'use client'

import { Typography } from "@material-tailwind/react";
// import Link from "next/link";

interface Props {
  number: number,
  id: number,
  title: string
}

export const Content = ({number, id, title }: Props) => {
  return  (
    <div className="absolute inset-0 grid bg-black/50 place-items-center grid-cols-3 grid-rows-3">
      <div className="bg-red-500"></div>
      <div className="bg-orange-500 col-span-2"></div>
      <div className="bg-yellow-500 col-span-3"></div>
      <div className="">
        <Typography
          variant="paragraph"
          color="white"
          className="mb-4 text-xl md:text-xl lg:text-2xl" placeholder={undefined}>
          {id}/{number}
        </Typography>
      </div>
      <div className="">
        <Typography
          variant="paragraph"
          color="white"
          className="mb-4 text-xl md:text-xl lg:text-2xl" placeholder={undefined}>
          {title}
        </Typography>
      </div>
      <div className="text-white">            
        {/* <Link href={""}>
          Découvrir
        </Link> */}
      </div>
    </div>
  )
}