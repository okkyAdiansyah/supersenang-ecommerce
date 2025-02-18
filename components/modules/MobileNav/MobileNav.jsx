import React, { useState } from 'react';
import { Toggle } from '@/components/elements/Toggle';
import NavList from '../NavList/NavList';


const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  const navItems = [
    {href: '/about', route: 'About'},
    {href: '/rooms', route: 'Rooms'},
    {href: '/culinary', route: 'Culinary'},
  ];
  
  const handleToggleClick = (e) => {
    setIsActive(!isActive);
  }

  return (
    <>
        <div>
            <Toggle.NavToggle 
              onClick={handleToggleClick}
            />
            <NavList 
              navItems={navItems} 
              className={isActive ? "isActive" : ""}  
            />
        </div>
    </>
  )
}

export default MobileNav;