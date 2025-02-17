import React from 'react';
import Logo from '@/components/elements/Logo/Logo';
import NavItem from '@/components/elements/NavItem/NavItem';
import SiteLogo from '@/public/logo.avif';
import { Button } from '@/components/elements/Button';


const Nav = () => {
  return (
    <>
      <nav>
        <Logo 
          src={SiteLogo}
          href={'/'}
        />
        <section>
          <ul>
            {navItems.map((item, id) => {
              <li
                key={`nav-item-${id}`}
              >
                <NavItem
                  href={item.href}
                  route={item.route}
                />
              </li>
            })}
          </ul>
          <Button.CTA 
            href={'/availabity-check'}
            callToAction={'Book Now'}
          />
        </section>
      </nav>
    </>
  )
}

export default Nav