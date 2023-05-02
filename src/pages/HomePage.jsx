import React from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Navbar } from '../components/Navbar'
import { Carosel } from '../components/Carosel'
import { Goals } from '../components/goals'
import { Services } from '../components/Services'
import { Customers } from '../components/Customers'


export const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Carosel></Carosel>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Our Company</h3>
                <div className='underline mx-auto'></div>
                <p className='text'>
                  We are a warehousing and distribution company that offers warehousing services tailored to meet the needs of our customers,
                  We have modern facilities equipped with advanced technology to guarantee the safety and protection of the stored goods.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Goals />
        <Services/>
        <br />
        <Customers></Customers>
        <Contact />
      </div>
   

    </>
  )
}
