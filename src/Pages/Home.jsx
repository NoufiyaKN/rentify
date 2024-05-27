import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <Header/>

            <div className='w-100 d-flex justify-content-center align-items-center rounded'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/couple-seeing-a-house-for-rent-4280224-3653689.png?f=webp" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h1>Rentify Website</h1>
                            <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolores aliquam accusamus praesentium id veritatis, sint ipsa ut quos nihil. Harum officiis soluta minima sequi quos doloremque eaque quia. Porro.</p>
                            <Link to={'/login'} className='btn btn-primary'>Click To Login <i class="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

        <Footer/>
    </>
  )
}

export default Home