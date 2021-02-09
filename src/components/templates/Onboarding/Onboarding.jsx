import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Image from '../../atoms/Image'

import './onboarding.css'

const Onboarding = ({ setVisited }) => {
  const [section, setSection] = useState(1)

  return ReactDOM.createPortal(
    <div>
      {section === 1 && (
        <div className='onboarding_cover' onClick={() => setSection(2)}>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/logos%2Fbig.png?alt=media&token=cf461e7f-949c-4e2f-8476-b9cd8170a133'
            alt='Sector9'
            maxWidth='320px'
          />
        </div>
      )}
      {section === 2 && (
        <div className='onboarding_tables'>
          <div className='onboarding_image'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/onboarding%2F1-1-2.png?alt=media&token=dcc10ec5-d489-4709-b169-d2b28db46504'
              alt='Sector9'
              maxWidth='300px'
            />
          </div>
          <div className='onboarding_main'>
            <p className='onboarding_text'>
              Tenemos las tablas para todos los estilos.
            </p>
            <div className='onboarding_footer'>
              <span onClick={() => setSection(3)} className='onboarding_next'>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035'
                  alt='next'
                  maxWidth='14.5px'
                />
              </span>
              <div className='onboarding_page'>
                <span className='onboarding_page-item onboarding_page-active'></span>
                <span className='onboarding_page-item'></span>
              </div>
            </div>
          </div>
        </div>
      )}
      {section === 3 && (
        <div className='onboarding_tables'>
          <div className='onboarding_image'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/onboarding%2F1-1-3.png?alt=media&token=7ad6bb10-36c8-4d52-98b5-b0abefca5b0e'
              alt='Sector9'
              maxWidth='300px'
            />
          </div>
          <div className='onboarding_main'>
            <p className='onboarding_text'>
              ¡Arma tu patineta pieza por pieza!
            </p>
            <div className='onboarding_footer'>
              <span
                className='previous onboarding_previous'
                onClick={() => setSection(2)}
              >
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035'
                  alt='previous'
                  maxWidth='14.5px'
                />
              </span>
              <div className='onboarding_page'>
                <span className='onboarding_page-item'></span>
                <span className='onboarding_page-item onboarding_page-active'></span>
              </div>
              <span onClick={setVisited} className='onboarding_next'>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035'
                  alt='next'
                  maxWidth='14.5px'
                />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.getElementById('onboarding')
  )
}

export default Onboarding
