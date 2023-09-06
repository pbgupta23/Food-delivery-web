import React from 'react'
import './footer.css';

export const Footer = () => {
  return (
    <div className='absolute-center d-block footer'>
      <div className="text-center p-3 footer-text" style={{backgroundColor: 'var(--footer-bg)'}}>
        © 2022 Copyright: Made with 🧡 by Joy Saha
      </div>
    </div>
  )
}
