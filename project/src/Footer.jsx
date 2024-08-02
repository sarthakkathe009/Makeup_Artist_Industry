import React from 'react'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'
import { Fab } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () =>{
    const handleScroll = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <>
            <section className='bg-dark'>
                <div className='container-fluid text-light'>
                    <div className="row py-4">
                        <div className="col-md-3 py-5 px-4">
                            <button onClick={handleScroll} className="text-light fs-4 p-0 nav nav-link">
                                <span><i className='fa fa-modx display-5'/></span>Urban Arts
                            </button>
                            <p className='py-4'>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                            <p><b>ADDRESS: </b>Marvela, 724, 11th Road, Khar West, Mumbai, Maharashtra 400052, India</p>
                            <p><b>PHONE: </b>(800) 555‑0175</p>
                            <p><b>Email: </b>urban.arts@gmail.com</p>
                        </div>
                        <div className="col-md-3 py-5">
                            <h2 className='fs-4 py-4'>Connect With Us</h2>
                            <ul className='p-0 navbar-nav'>
                                <li><NavLink className="text-light text-decoration-none" to="/contact">Contact Us</NavLink></li>
                                <li><NavLink className="text-light text-decoration-none" to="/contact">Careers</NavLink></li>
                                <li><NavLink className="text-light text-decoration-none" to="/contact">Terms and Conditions</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-3 py-5 pe-5">
                            <h2 className='fs-4 py-4'>Get Directions<span className='fa fa-angle-right px-2'></span></h2>
                            <iframe title='map' className='pb-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1705925023189!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}}></iframe>
                        </div>
                        <div className="col-md-3 py-5">
                            <h2 className='fs-4 py-4'>Join Our Newsletter Now</h2>
                            <p>Get E-mail updates about our latest shop and special offers</p>
                            <div id='nav-search'>
                                <div className="d-flex">
                                    <input className='search-in' type="text" placeholder="Enter your email"/>
                                    <div className="icon text-dark">
                                        <i className='fa fa-angle-right'></i>
                                    </div>
                                </div>
                            </div>
                            <Stack className='pt-5' spacing={2} direction="row">
                                <Fab sx={{bgcolor:"#4867aa"}} size='small'><FacebookIcon sx={{color:"white"}}/></Fab>
                                <Fab color='primary' size='small'><TwitterIcon/></Fab>
                                <Fab color='error' size='small'><YouTubeIcon/></Fab>
                                <Fab color='secondary' size='small'><InstagramIcon/></Fab>
                                <Fab size='small' sx={{bgcolor:"#007bb6"}}><LinkedInIcon sx={{color:"white"}}/></Fab>
                            </Stack>
                        </div>
                    </div>
                </div>
                <span className='text-light'><hr/></span>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between py-5">
                        <div className='text-light'>
                            &copy;&nbsp;2024 India Made with<span> <CodeIcon/> </span>by Sarthak Kathe
                        </div>
                        <div>
                            <img src="Imgs/payment.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Footer