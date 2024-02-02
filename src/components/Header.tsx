'use client'

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

export const Header = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 300) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
  }, []);

  return  (
    <div className={header ? "fixed z-20 top-0 w-[100%] h-[10%] bg-white text-8xl" : "bg-[transparent] text-3xl snap-always snap-start"}>
      <div className="flex w-[100%] justify-between m-auto p-[5px]">
        <div className="flex basis-1/2 justify-start">
          <Image
            className="object-scale-down"
            src="/assets/images/logo-full-resize-bluegray.png"
            alt="Logo"
            width={header ? 250 : 400}
            height={37}
            priority
          />          
        </div>
        <div className="flex basis-1/2 items-center justify-end p-[10px] font-league text-5xl">
          <nav>
            <ul className="flex gap-[20px] space-x-6">
              <li>
                <Link href='#nav-landing-page'>Accueil</Link>
              </li>
              <li>
                <Link href='#nav-skills'>Compétences</Link>
              </li>
              <li>
                <Link href='#nav-projects'>Réalisations</Link>
              </li>
              <li>
                <Link href='#nav-contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}