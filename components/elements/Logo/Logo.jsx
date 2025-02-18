import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Logo = ({href, src, width, height}) => {
  return (
    <>
      <Link
        href={href}
        className=''
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt='Supersenang Logo'
        />
      </Link>
    </>
  )
}

export default Logo