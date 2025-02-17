import Link from 'next/link';
import React from 'react';


const CTA = ({href, callToAction}) => {
  return (
    <>
      <Link
        href={href}
        className=''
      >
        {callToAction}
      </Link>
    </>
  )
}

export default CTA