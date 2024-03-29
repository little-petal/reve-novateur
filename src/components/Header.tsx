'use client'

import Link from "next/link";

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
    <div className={header ? "fixed z-20 top-0 w-[100%] h-fit sm:h-24 bg-white text-8xl" : "bg-[transparent] text-3xl px-6"}>
      <div className="flex w-[100%] justify-between m-auto p-[5px]">
        <div className="flex basis-1/2 justify-start">
          <img
            src="/assets/images/logo-full-resize-bluegray.png"
            alt="Logo"
            className={header ? "object-scale-down w-[250px]" : "object-scale-down w-[400px]" }
          />        
        </div>
        <div className="flex basis-1/2 items-center justify-end p-[10px] font-league">
          <nav className={navStyles}>
            <ul className="flex flex-col lg:flex-row gap-[30px] md:gap-[40px] lg:gap-[20px] lg:space-x-6 mt-32 lg:mt-0">
              <li>
                <Link className="text-black hover:text-gray-600" href='#nav-landing-page' onClick={() => setOpen(false)}>Accueil</Link>
              </li>
              <li>
                <Link className="text-black hover:text-gray-600" href='#nav-skills' onClick={() => setOpen(false)}>Compétences</Link>
              </li>
              <li>
                <Link className="text-black hover:text-gray-600" href='#nav-projects' onClick={() => setOpen(false)}>Réalisations</Link>
              </li>
              <li>
                <Link className="text-black hover:text-gray-600" href='#nav-contact' onClick={() => setOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
          <img
            src={open ? "/assets/icons/close.png" : "/assets/icons/hamburger.png"}
            alt="Menu"
            className={header ? "object-scale-down z-10 lg:hidden w-[40px]" : "object-scale-down z-10 lg:hidden w-[70px]" }
            onClick={() => setOpen(!open)}
          />  
        </div>
      </div>
    </div>
  )
}

