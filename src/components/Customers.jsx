import React from 'react'
import User from '../assets/images/UserRan.png'

export const Customers = () => {
  return (
    <>
       <section className='customers '>
            <div className="slide-container">
            <h3 className='main-heading text-center'>What do our customers say</h3>
            <br />
                <div className="slide-content">
                    <div className="card-wrapper ">
                        <div className='cardd '>
                            <div className='image-content'>
                                <span className="overlay"></span>

                                <div className='card-image'>
                                    <img src={User} alt="" className='card-img' />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="name">Milton Cardenas</h2>
                                <p className="description">I am very happy with the services that the company provides me,
                                 they are very friendly in serving customers and the services they offer are very complex.</p>
                            </div>
                        </div>
                        <br />
                        <div className='cardd '>
                            <div className='image-content'>
                                <span className="overlay"></span>

                                <div className='card-image'>
                                    <img src={User} alt="" className='card-img' />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="name">Milton Cardenas</h2>
                                <p className="description">I am happy with the company,
                                 I have been working with them for years and I feel safe and confident when storing my things since they provide security and many services that in the end make for a better user experience.</p>
                            </div>
                        </div>
                        <br />
                        <div className='cardd '>
                            <div className='image-content'>
                                <span className="overlay"></span>

                                <div className='card-image'>
                                    <img src={User} alt="" className='card-img' />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="name">Milton Cardenas</h2>
                                <p className="description">What do our customers say </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    </>
  )
}
