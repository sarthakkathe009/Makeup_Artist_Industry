import { Rating } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Products1(props){
    const{name,img,rs,rating}=props
    return(
        <>
            <div className="card border-0"> 
                <div className="card-header border-bottom-0">
                    <NavLink to="/shops">
                        <img src={img} className='img-fluid' alt="img" style={{height:"250px",width:"250px"}} />
                    </NavLink>
                </div>
                <div className="card-body text-start">
                    <div className="card-title d-flex">
                        <span className='pe-5'>Studio Design</span>
                        <span><Rating value={rating} precision={0.5} size='small' sx={{display:"inline"}}/></span>
                    </div>
                    <div className="card-title fw-bold">{name}</div>
                    <div className="card-title">Rs.&nbsp;{rs}</div>
                </div>
            </div>
        
        </>
    )
}

export default Products1;