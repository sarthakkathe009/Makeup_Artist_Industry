import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Stack } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from 'axios';

function Navbar2(){

    const[cartCount,setCartCount]=useState(0)
    const cartCountFun =async()=>{
        const res = await axios.get("http://localhost:3000/cart")
        setCartCount(res.data.length)
    }
    useEffect(()=>{
        cartCountFun()
    },[])
    return(
        <>
            <div className="navbar navbar-expand-lg bg-dark nav nav-underline">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand text-light fw-bold fs-4">
                        <span><i className='fa fa-modx fs-1'/></span>Urban Arts
                    </a>
                    <button type='button' data-bs-toggle='collapse' data-bs-target='#reactnav' className='navbar-toggler'>
                        <span className='navbar-toggler-icon bg-light'></span>
                    </button>
                    <div className="collapse navbar-collapse" id='reactnav'>
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                {/* <a href="/about" className="nav-link mx-3 text-light">HOME</a> */}
                                <NavLink className='nav-link mx-3 text-light' to='/'>HOME</NavLink>
                            </li>
                            <li className="nav-item shops">
                                {/* <a href="/shops" className="nav-link mx-3 text-light">
                                    SHOP <span><i className='fa fa-angle-down px-1'></i></span>
                                </a> */}
                                <NavLink className='nav-link mx-3 text-light' to='/shops'>
                                    SHOP<span><i className='fa fa-angle-down px-2'></i></span>
                                </NavLink>
                                <div className='mydropdown my-3 shadow'>
                                    
                                    <div className='px-3 py-2'>
                                        <h2>Trimmers</h2>
                                        <br/>
                                        <p>Philips</p>
                                        <p>Kemei</p>
                                        <p>Panasonic</p>
                                        <p>Havells</p>
                                    </div>
                                    <div className='px-3 py-2'>
                                        <h2>Shaving Kit</h2>
                                        <br/>
                                        <p>Gillette</p>
                                        <p>Park Avenue</p>
                                        <p>Sirona</p>
                                        <p>Beardo Chrome</p>
                                    </div>
                                    <div className='px-3 py-2'>
                                        <h2>Moisturizer</h2>
                                        <br/>
                                        <p>Cetaphil</p>
                                        <p>Dove</p>
                                        <p>Nivea</p>
                                        <p>Lakme</p>
                                    </div>
                                    <div className='px-3 py-2'>
                                        <h2>Face Wash</h2>
                                        <br/>
                                        <p>Himalaya</p>
                                        <p>Garnier</p>
                                        <p>Derma</p>
                                        <p>Mamaearth</p>
                                    </div>
                                    
                                    
                                </div>
                                {/* <NavLink className='nav-link text-light fw-bold mx-3' to='/about'>About Us</NavLink> */}
                            </li>
                            <li className="nav-item page">
                                {/* <a href="/page" className="nav-link mx-3 text-light" data-bs-toggle='dropdown'>
                                    PAGE <span><i className='fa fa-angle-down px-1'></i></span>
                                </a> */}
                                <NavLink className='nav-link mx-3 text-light' to='/page'>
                                    PAGE<span><i className='fa fa-angle-down px-2'></i></span>
                                </NavLink>
                                <ul className="mydropdown2 py-3 shadow-lg pb-0 ps-0">
                                    <li className='border-bottom'>
                                        <NavLink className="dropdown-link" to='/page'>Compare</NavLink>
                                    </li>
                                    <li className='border-bottom'>
                                        <NavLink className="dropdown-link" to='/page'>Checkout</NavLink>
                                    </li>
                                    <li className='border-bottom'>
                                        <NavLink className="dropdown-link" to='/page'>MyAccount</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-link" to='/page'>Register</NavLink>
                                    </li>
                                </ul>
                                {/* <NavLink className='nav-link text-light fw-bold mx-3' to='/contact'>Contact Us</NavLink> */}
                            </li>
                            <li className="nav-item blog">
                                {/* <a href="/blog" className="nav-link mx-3 text-light" data-bs-toggle='dropdown'>
                                    BLOG <span><i className='fa fa-angle-down px-1'></i></span>
                                </a> */}
                                <NavLink className='nav-link mx-3 text-light' to='/blog'>
                                    BLOG<span><i className='fa fa-angle-down px-2'></i></span>
                                </NavLink>
                                <ul className='mydropdown3 py-3 shadow-lg pb-0 ps-0'>
                                <li className="border-bottom">
                                        <NavLink className="dropdown-link" to='/blog'>Live Concerts 2k23</NavLink>
                                    </li>
                                    <li className="border-bottom">
                                        <NavLink className="dropdown-link" to='/blog'>Santa Winters</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-link" to='/blog'>Celebrity Walk</NavLink>
                                    </li>
                                </ul>
                                {/* <NavLink className='nav-link text-light fw-bold mx-3' to='/contact'>Contact Us</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <a href="/contact" className="nav-link mx-3 text-light">CONTACT</a> */}
                                {/* <NavLink className='nav-link text-light fw-bold mx-3' to='/services'>Services</NavLink> */}
                                <NavLink className='nav-link mx-3 text-light' to='/contact'>CONTACT</NavLink>
                            </li>
                        </ul>
                        <div className="navbar-nav me-4" id='nav-search'>
                            
                            {/* for responsive in mobile view d-flex is used */}
                            <div className="d-flex">
	                            <input className='search-in' type="text" placeholder="Search our catalog"/>
                                <div className="icon">
		                            <i className='fa fa-search'></i>
	                            </div>
                            </div>
    
                        </div>
                        <div className="navbar-nav">

                            <Stack spacing={4} direction="row">
                                <NavLink>
                                    <Badge badgeContent={4} color='error'>
                                        <FavoriteBorderOutlinedIcon sx={{color:"white"}}/>
                                    </Badge>
                                </NavLink>
                                <NavLink to="/cart">
                                    <Badge badgeContent={cartCount} color='error'>
                                        <ShoppingCartIcon sx={{color:"white"}}/>
                                    </Badge>
                                </NavLink>
                                <NavLink>
                                    <Badge variant='dot' color='error'>
                                        <SettingsIcon sx={{color:"white"}}/>
                                    </Badge>   
                                </NavLink>
                            </Stack>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Navbar2