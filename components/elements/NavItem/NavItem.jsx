import Link from 'next/link';
import React from 'react';


const NavItem = ({href, route}) => {
  return (
    <>
      <Link
        href={href}
        className=''
      >
        {route}
      </Link>
    </>
  )
}

export default NavItem