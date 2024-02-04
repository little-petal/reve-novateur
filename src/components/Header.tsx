'use client'

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

export const Header = () => {
  const [header, setHeader] = useState(false);
  const [open, setOpen] = useState(false);


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

  const navStyles = open ? "p-6 bg-black/70 text-5xl sm:text-7xl text-white absolute h-screen top-0 right-0 lg:block" : "hidden lg:flex lg:text-5xl";

  return  (
    <div className={header ? "fixed z-20 top-0 w-[100%] h-16 sm:h-24 bg-white text-8xl" : "bg-[transparent] text-3xl snap-always snap-start"}>
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
        <div className="flex basis-1/2 items-center justify-end p-[10px] font-league">
          <nav className={navStyles}>
            <ul className="flex flex-col lg:flex-row gap-[30px] md:gap-[40px] lg:gap-[20px] lg:space-x-6 mt-32 lg:mt-0">
              <li>
                <Link className="hover:text-gray-600" href='#nav-landing-page'>Accueil</Link>
              </li>
              <li>
                <Link className="hover:text-gray-600" href='#nav-skills'>Compétences</Link>
              </li>
              <li>
                <Link className="hover:text-gray-600" href='#nav-projects'>Réalisations</Link>
              </li>
              <li>
                <Link className="hover:text-gray-600" href='#nav-contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          <Image
            className="object-scale-down z-10 lg:hidden"
            src={open ? "/assets/icons/close.png" : "/assets/icons/hamburger.png"}
            alt="Menu"
            width={header ? 40 : 70}
            height={37}
            priority
            onClick={() => setOpen(!open)}
          />  
        </div>
      </div>
    </div>
  )
}

