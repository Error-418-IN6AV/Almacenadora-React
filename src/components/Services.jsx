import React from 'react'
import tomas from '../assets/images/bodega.jpg'
import bodega1 from '../assets/images/Bodega2.png'
import bodega2 from '../assets/images/bodega3.png'

export const Services = () => {
  return (
    <>
         <section className='section border-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 mb-4 text-center'>
                <h3 className='main-heading'>Our services</h3>
                <div className='underline mx-auto'></div>
              </div>
              <div className='col-md-4 '>
                <div className='card shadow'>
                <img src={bodega1} className='w-100 border-bottom' alt='Services' />
                  <div className='card-body'>
                      <h6>Services 1</h6>
                      <div className='underline'></div>
                      <p className='text'>
                      hahahhahahahhahha
                      </p>
                  </div>
                </div>
                <div>
                </div>
              </div>
              <div className='col-md-4 '>
                <div className='card shadow'>
                <img src={bodega2} className='w-100 border-bottom' alt='Services' />
                  <div className='card-body'>
                      <h6>Services 2</h6>
                      <div className='underline'></div>
                      <p className='text'>
                      hahahhahahahhahha
                      </p>
                  </div>
                </div>
                <div>
                </div>
              </div>

              <div className='col-md-4 '>
                <div className='card shadow'>
                <img src={tomas} className='w-100 border-bottom' alt='Services' />
                  <div className='card-body'>
                      <h6>Services 3</h6>
                      <div className='underline'></div>
                      <p className='text'>
                      hahahhahahahhahha
                      </p>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
  )
}
