import React from 'react'

const NavToggle = ({onClick}) => {
  return (
    <>
        <div>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <button 
                type="button"
                onClick={onClick}
            />
        </div>
    </>
  )
}

export default NavToggle