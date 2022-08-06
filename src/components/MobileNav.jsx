import React from 'react';
import NavLink from './NavLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button className="bg-white p-2 rounded-md opacity-70" onClick={() => setIsOpen(true)}>
        <GiHamburgerMenu className="md:hidden text-background" size={24} />
      </button>
      <ul className={`text-sm fixed bg-background transition duration-300 z-50 h-screen inset-0 flex items-center gap-6 justify-center flex-col font-roboto transform ${isOpen ? 'translate-x-0' : 'translate-x-96'}`}>
        <button className="bg-white p-1 rounded-md opacity-70 absolute top-10 right-10" onClick={() => setIsOpen(false)}>
          <GrFormClose className="md:hidden text-background" size={32} />
        </button>
        <NavLink onClick={() => setIsOpen(false)} style={{ fontSize: '2rem' }} name="About" href="#about" />
        <NavLink onClick={() => setIsOpen(false)} style={{ fontSize: '2rem' }} name="Team" href="#team" />
        <NavLink onClick={() => setIsOpen(false)} style={{ fontSize: '2rem' }} name="Filosofi" href="#filosofi" />
        <NavLink onClick={() => setIsOpen(false)} style={{ fontSize: '2rem' }} name="Contact" href="#footer" />
      </ul>
    </div>
  );
};

export default MobileNav;
