import React from 'react';
import NavItem from '@/components/elements/NavItem/NavItem';

const NavList = ({navItems, className}) => {
  return (
    <>
        <ul
          className={className}
        >
          {navItems.map((item, id) => (
            <li
              key={`nav-item-${id}`}
            >
              <NavItem
                href={item.href}
                route={item.route}
              />
            </li>
          ))}
        </ul>
    </>
  )
}

export default NavList