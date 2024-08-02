import React, { useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

const Products = (props) => {

    const[pop,setPop]=useState({
        open:false,
        duplicate:false
    })

    const{name,img,rs,rs1,off}=props

    const{open,duplicate}=pop

    const AddData = async() =>{
        const isDuplicate = await checkDuplicate()

        if(!isDuplicate){
                await axios.post("http://localhost:3000/cart",{
                name:name,
                img:img,
                rs:rs,
                rs1:rs1,
            })
            setPop({open:true,duplicate:false})
        }
        else{
            setPop({open:true,duplicate:true})
        }
          
    }

    const checkDuplicate = async() => {
        const cartData = await axios.get("http://localhost:3000/cart") 
        return cartData.data.some((item)=>item.name === name) 
    }

    return(
        <>
            <div className="card border shadow-lg my-4 mx-2">
                <div className="card-header">
                    <p className='text-center fw-bold fs-5'>{name}</p>
                </div>
                <div className="card-body text-center">
                    <img src={img} className='img-fluid' alt="Item" style={{height:'250px'}}/>
                    <p className='fw-bold my-1 fs-3'><sup><CurrencyRupeeIcon fontSize='small'/></sup>{rs}&nbsp;
                        <span className='fs-6 text-muted'>M.R.P : Rs.<del>{rs1}</del></span>
                        <span className='offer fs-6'>({off}off)</span> 
                    </p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-dark fw-bold px-2 mx-3" onClick={AddData}>Add To Cart</button>
                    <button className="btn btn-outline-danger fw-bold px-4 mx-3">Buy Now</button>
                </div>
                { open && (
                    <Snackbar
                        onClose={()=>setPop({open:false})} 
                        autoHideDuration={1000} 
                        open={open} 
                        anchorOrigin={{vertical:'bottom',horizontal:'right'}} 
                    >
                    {duplicate ? <Alert variant='filled' severity='error' sx={{ width:300,fontWeight:"bold" }}>
                        Item is already in the Cart 
                    </Alert>  :
                    <Alert variant='filled' color='error' sx={{ width:300,fontWeight:"bold" }}>
                        Added to Cart
                    </Alert>}
                    </Snackbar>
                    )
                }
            </div>
        
        
        </>
    )
}

export default Products