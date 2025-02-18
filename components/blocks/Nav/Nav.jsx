import React from 'react';
import Logo from '@/components/elements/Logo/Logo';
import SiteLogo from '@/public/logo.avif';
import { Button } from '@/components/elements/Button';
import NavList from '@/components/modules/NavList/NavList';


const Nav = () => {
  const navItems = [
    {href: '/about', route: 'About'},
    {href: '/rooms', route: 'Rooms'},
    {href: '/culinary', route: 'Culinary'},
  ]

  return (
    <>
      <nav>
        <Logo 
          src={SiteLogo}
          href={'/'}
        />
        <section>
          <NavList navItems={navItems} />
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