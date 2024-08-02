import React, { useEffect, useState } from 'react'
import TopSlideShow from './TopSlideShow'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Products1 from './Products1'
import axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from './Footer'

const Home = () => {

  const[data,setData]=useState([])

  const FetchData=async()=>{
    const res=await axios.get("http://localhost:3000/arrivals")
    setData(res.data)
  }
  useEffect(()=>{
    FetchData()
  },[])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 4
    },
    tablet: {
      // below 1000 2 items will be diplayed
      breakpoint: { max: 1000, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <>
        
        <Navbar/>
        <TopSlideShow/>
        <div className="container-fluid my-4">
          <div className="row my-2 gx-4 gy-2">
            <div className="col-md-4">
              <div className='overflow-hidden'>
                <NavLink to='/shops'>
                  <img className='img-fluid w-100 home-img' src='Imgs/home-img1.webp' height="360px" width="480px" alt='Img'/>
                </NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className='overflow-hidden'>
                <NavLink to='/shops'>
                  <img className='img-fluid w-100 home-img' src='Imgs/home-img2.webp' height="360px" width="480px" alt='Img'/>
                </NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className="overflow-hidden">
                <NavLink to='/shops'>
                  <img className='img-fluid w-100 home-img' src='Imgs/home-img3.webp' height="360px" width="480px" alt='Img'/>
                </NavLink>
              </div>  
            </div>
          </div>
          </div>
          <div className="container text-center mt-5">
                <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center fw-bold'>New Arrivals</h1>
                </div>
                <div className="col-md-12 mt-4">
                  <Carousel responsive={responsive}>
                    
                      {
                        data.map((val)=>{
                          return(
                            <>
                                <Products1
                                  name={val.name}
                                  img={val.img}
                                  rs={val.rs}
                                  rating={val.rating}
                                />       
                            </>
                          )
                        })
                      }
                    
                  </Carousel>
                </div>
                </div>   
          </div>
          <div className='container-fluid'>
            <div className="row my-5 gx-4 gy-2">
              <div className="col-md-6 home-imgcontainer">
                <div className="overflow-hidden">
                  <NavLink to="/shops">
                      <img className='img-fluid w-100 home-img' src='Imgs/home-banner1.webp' alt='Img'/>  
                  </NavLink> 
                </div>
              </div>
              <div className="col-md-6 home-imgcontainer">
                <div className="overflow-hidden">
                  <NavLink to="/shops">
                    <img className='img-fluid w-100 home-img' src='Imgs/home-banner2.webp' alt='Img'/>  
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
          
          
    </>
  )
}

export default Home