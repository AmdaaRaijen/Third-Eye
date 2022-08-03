import React from 'react';
import NavLink from './NavLink';
import Button from './Button';
import ButtonOutline from './ButtonOutline';
import logo from '../Assets/logoResize.png';

const Navbar = () => {
  return (
    <div className="absolute py-8 top-0 right-0 w-full">
      <header className="bg-transparent container mx-auto">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <a className="block text-white" href="/">
              <img src={logo} alt="" className="w-16 h-16 rounded-full" />
            </a>
            <div className="block">
              <nav>
                <ul className="flex items-center gap-6 text-sm">
                  <NavLink name="About" href="/" />
                  <NavLink name="Team" href="/" />
                  <NavLink name="Contact" href="/" />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
