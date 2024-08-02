import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

function TopSlideShow({initialTime=300000}){
    const[time,setTime]=useState(initialTime)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime((prevTime)=>(prevTime > 0 ? prevTime -1 : 0))
        },1000)

        return () => clearInterval(timer)
    },[])

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
      
        const formattedDays = String(days).padStart(2, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        
        return {formattedDays,formattedHours,formattedMinutes,formattedSeconds};
      };

      const{formattedDays,formattedHours,formattedMinutes,formattedSeconds}=formatTime(time)

    return(
        <>
                
                <div className="carousel slide carousel-fade" id="slideshow" data-bs-ride='carousel'>
                    <div className="carousel-inner">
                        <div className="carousel-item active c-item">
                            <img className='d-block w-100 c-img' src='Imgs/slide-img1.jpg' alt='SlideImg'/>
                            <div className="carousel-caption container top-0 my-5 py-5 text-start"> 
                                <h5 className='fs-3 mt-5 c-cap-h0 px-1 py-5'>Sale <span className='text-warning fw-bold'>20% OFF</span> this Week</h5>
                                <h1 className='display-2 c-cap-h0 px-1 py-1'>2023 Amazing<br/> Barber Shop</h1>
                                <p className='fs-4 px-1 c-cap-h0 py-4'>Light knit upper adapts to the shape of your foot for flexible and 
                                    <br/>natural movement.
                                </p>
                                <NavLink className='fs-5 text-light fw-bold py-3 px-5 slide-btn' to='/shops'>SHOP NOW</NavLink>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <img className='d-block w-100 c-img' src='Imgs/slide-img2.jpg' alt='SlideImg'/>
                            <div className="carousel-caption top-0 pt-5 mt-5">
                                <h1 className='c-cap-h1 c-cap-w display-2 pt-5 mt-5'>Winter Sale is Here!!</h1>
                                <h5 className='c-cap-h1 mb-4 fs-1 fw-bold text-warning'>"Limited Time Offer, Grab The Items Now"</h5>
                                <p className='mt-5 d-inline-block fs-5 p-1 bg-danger rounded'>Sale is Live, Hurry Up</p>
                                <div className='mt-1 d-flex justify-content-center display-3 text-dark'>
                                    <Stack spacing={3} direction="row">
                                    <div className='d-inline-block rounded-circle bg-light px-4'>
                                        {formattedDays} 
                                        <p className='fs-5'>Days</p>
                                    </div>
                                    <span className='text-light py-3'> : </span>
                                    <div className='d-inline-block rounded-circle bg-light px-4'>
                                        {formattedHours}
                                        <p className='fs-5'>Hours</p>
                                    </div> 
                                    <span className='text-light py-3'> : </span>
                                    <div className='d-inline-block rounded-circle bg-light px-4'>
                                        {formattedMinutes}
                                        <p className='fs-5'>Mintues</p>
                                    </div> 
                                    <span className='text-light py-3'> : </span>
                                    <div className='d-inline-block rounded-circle bg-light px-4'>
                                        {formattedSeconds}
                                        <p className='fs-5'>Seconds</p>
                                    </div>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <img className='d-block w-100 c-img' src='Imgs/slide-img3.jpg' alt='SlideImg'/>
                            <div className="carousel-caption mx-0 my-5">
                                <h1 className='display-2 py-3 c-cap-h'>Sale Spring Barber Shop</h1>
                                <p className='fs-4 py-4 c-cap-hp'>Light knit upper adapts to the shape of your foot for flexible and <br/> natural movement.</p>
                                <NavLink className='slide-btn fs-4 text-light fw-bold py-3 px-5' to='/shops'>SHOP NOW</NavLink>
                            </div>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#slideshow' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className="carousel-control-next" type='button' data-bs-target='#slideshow' data-bs-slide='next'>
                        <span className="carousel-control-next-icon" aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>  
                </div>
                
        </>
    )
}

export default TopSlideShow