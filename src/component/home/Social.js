import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        <a href='https://www.instagram.com/' className='home__social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-instagram'></i>
        </a>

        <a href='https://twitter.com/' className='home__social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-twitter'></i>
        </a>

        <a href='https://web.whatsapp.com/' className='home__social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-whatsapp'></i>
        </a>
    </div>
  )
}

export default Social