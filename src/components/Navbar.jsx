import React from 'react';
import NavLink from './NavLink';
import MobileNav from './MobileNav';
import logo from '../Assets/LOGO.png';

const Navbar = () => {
  return (
    <div className="absolute py-8 top-0 right-0 w-full">
      <header className="bg-transparent container mx-auto">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <a className="flex max-w-max items-center flex-row gap-3 text-white" href="/">
              <img src={logo} alt="" className="w-16 h-16 rounded-full" />
              <p className="font-bold text-xl">THIRD EYE</p>
            </a>
            <div className="block Navbar">
              <nav>
                <ul className="items-center hidden md:flex gap-6 text-sm">
                  <NavLink name="About" href="#about" />
                  <NavLink name="Team" href="#team" />
                  <NavLink name="Filosofi" href="#filosofi" />
                  <NavLink name="Contact" href="#footer" />
                </ul>
              </nav>
              <div className="block Mobile-Navbar md:hidden">
                <nav>
                  <MobileNav />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
