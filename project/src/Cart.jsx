import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Stack } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Breadcrumbs, Typography } from "@mui/material";
// import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import axios from 'axios';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Button from '@mui/material/Button';
import { Box, Fab } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  
  const[cartData,setCartData]=useState([])

  const[cartCount,setCartCount]=useState(0)

  // const[open,setOpen]=useState(false)

  const FetchData = async() => {
    const res=await axios.get(`http://localhost:3000/cart`)
    const initialCartData = res.data.map((item) => ({
      ...item,
      count: 1, // Set the initial count to 1
      totalPrice:item.rs
    }));
    setCartData(initialCartData);
    setCartCount(res.data.length)
  }

  const discount=(rs,rs1)=>{ 
    const discount = ((rs1 - rs) / rs1) * 100;
    return `${Math.round(discount)}%`;
  }

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`).then(()=>FetchData());
  };
  
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 2) // Add 2 days to the current date

  const month = currentDate.toLocaleDateString('default', { month: 'short' })
  const date = currentDate.getDate()
  const day = currentDate.toLocaleDateString('default', { weekday: 'short' })

  const handleDecrement = (index) => {
    const updateCartData = [...cartData];
    if (updateCartData[index].count > 1) {
      updateCartData[index].count -= 1;
      updateCartData[index].totalPrice=updateCartData[index].totalPrice-updateCartData[index].rs
      setCartData(updateCartData);
    }
  };
  
  const handleIncrement = (index) => {
    const updateCartData = [...cartData];
    updateCartData[index].count += 1;
    updateCartData[index].totalPrice=updateCartData[index].totalPrice+updateCartData[index].rs
    setCartData(updateCartData);
  };

  const sumPrice = () =>{
    let totalPrice=0
    let totalDiscount=0
    cartData.forEach((item)=>{
      totalPrice += item.rs1 * item.count
      const discountedPrice = item.rs1 - item.rs
      totalDiscount += discountedPrice * item.count
    })
    const deliveryCharges = cartData.length === 0 ? 0 : totalPrice < 500 ? 40 : "Free"
    return {totalPrice,totalDiscount,deliveryCharges}
  }

  useEffect(()=>{
    FetchData()
  },[])

  

  return (
    <>
      <div className="navbar navbar-expand-lg bg-secondary-subtle">
        <div className="container">
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#cartnav">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="cartnav">

            <div className="navbar-nav" id='nav-search'>
              {/* for responsive in mobile view d-flex is used */}
                <div className="d-flex">
                  <input className='search-in' type="text" placeholder="Search our catalog"/>
                  <div className="icon">
                    <i className='fa fa-search'></i>
                  </div>
                </div>
            </div>

            <div className="navbar-nav m-auto">
                <NavLink to="/" className="navbar-brand text-dark fw-bold fs-4 px-5">
                  <span><i className='fa fa-modx fs-1'/></span>Urban Arts
                </NavLink>
            </div>

            <div className="navbar-nav ms-5 ps-5">

              <Stack spacing={4} direction="row">
                <NavLink>
                  <Badge badgeContent={4} color='error'>
                    <FavoriteBorderOutlinedIcon sx={{color:"black"}}/>
                  </Badge>
                </NavLink>
                <NavLink to="/cart">
                  <Badge badgeContent={cartCount} color='error'>
                    <ShoppingCartIcon sx={{color:"black"}}/>
                  </Badge>
                </NavLink>
                <NavLink>
                  <Badge variant='dot' color='error'>
                    <SettingsIcon sx={{color:"black"}}/>
                  </Badge>   
                </NavLink>
              </Stack>

            </div>
          </div>
        </div>
      </div>

      <div className="container my-4 text-center">
          <h1 className="fw-bold">Shopping Cart</h1>
          <div className="d-flex justify-content-center">
            <Breadcrumbs separator={<ArrowRightIcon/>}>
              <NavLink to="/" className="navbar nav-link text-dark">Home</NavLink>
              <NavLink to="/shops" className="navbar nav-link text-dark">Shop</NavLink>
              <Typography className="text-dark">Shopping Cart</Typography>
            </Breadcrumbs>
          </div>
      </div>

      {/* End of Nav */}

      <div className="container">
        <div className="row">
        <div className="col-md-7">
            {
              cartData.map((val,index)=>{
                
                return(
                  <>
                      <div className="card p-1 my-3">
                        <div className="row align-items-center">
                          <div className="col-md-3 py-2 text-center">
                            <img src={val.img} className="img-fluid" style={{height:170}} alt="img"/>
                            <div className="grid pt-3">
                              <button className="border border-2 bg-light rounded-circle" onClick={()=>handleDecrement(index)}><RemoveIcon sx={{fontSize:15}}/></button>
                              <div className="d-inline px-3 py-1 mx-2 border border-2">{val.count}</div>
                              <button className="border border-2 bg-light rounded-circle" onClick={()=>handleIncrement(index)}><AddIcon sx={{fontSize:15}}/></button>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="card-body">
                              <div className="card-title fs-5 fw-bold">{val.name}</div>
                              <div className="card-title text-end pe-2" style={{fontSize:13}}>{`Delivery by ${day}, ${date} ${month}`}</div>
                              <div className="card-text fw-bold text-danger">Save{discount(val.rs,val.rs1)}</div>
                              <div className="card-text fs-2 mt-2">
                                <sup><CurrencyRupeeIcon fontSize="small"/></sup>{val.totalPrice} <span className='fs-6 text-muted'>Rs.<del>{val.rs1}</del></span>
                              </div>
                              <div className="card-text mt-3">
                                <Box className="d-flex justify-content-between">
                                  <Stack spacing={2} direction="row">
                                    <Button size="medium" variant="contained" color="success" startIcon={<FlashOnIcon/>}>Buy Now</Button>
                                    <Button size="medium" variant="outlined" color="error" startIcon={<FavoriteBorderOutlinedIcon/>}>Wishlist</Button>
                                  </Stack>
                                  <Fab onClick={()=>{if(window.confirm("Are you sure?")){deleteItem(val.id)}}} size="medium"><DeleteOutlineIcon/></Fab>
                                  {/* <Dialog open={open}>
                                    <DialogTitle>Remove Item</DialogTitle>
                                    <DialogContent>Are you sure?</DialogContent>
                                    <DialogActions>
                                      <Button onClick={()=>deleteItem(val.id)}>Yes</Button>
                                      <Button onClick={()=>setOpen(false)}>No</Button>
                                    </DialogActions>
                                  </Dialog> */}
                                </Box>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </>
                )
              })
            }
            </div>
          <div className="col-md-5 my-3">
            <div className="row">
              <div className="col-md-12">
                <div className="card p-2">
                    <div className="card-header text-secondary fw-bold py-4">PRICE DETAILS</div>
                    <div className="card-body">
                      <div className="py-3 d-flex justify-content-between">
                        <div>Price {`(${cartCount}items)`}</div>
                        <div><CurrencyRupeeIcon fontSize=""/>{sumPrice().totalPrice}</div>
                      </div>
                      <div className="py-3 d-flex justify-content-between">
                        <div>Discount</div>
                        <div className="text-success">
                          <RemoveIcon sx={{fontSize:15}}/><CurrencyRupeeIcon fontSize=""/>{sumPrice().totalDiscount}
                        </div>
                      </div>
                      <div className="py-3 d-flex justify-content-between">
                        <div>Delivery Charges</div>
                        <div>{sumPrice().deliveryCharges}</div>
                      </div>
                    </div>
                    <div className="card-footer py-4">
                      <div className="d-flex justify-content-between fw-bold">
                        <div>Total Price</div>
                        <div>{sumPrice().totalPrice < 500 ? sumPrice().totalPrice - sumPrice().totalDiscount + 40 : sumPrice().totalPrice - sumPrice().totalDiscount}</div>
                      </div>
                    </div>
                    <div className="card-footer pt-3 text-success">
                      You Save <span className="fw-bold"><CurrencyRupeeIcon fontSize=""/>{sumPrice().totalDiscount} </span>on this order
                    </div>
                </div>
              </div>
              <div className="col-md-12 my-3">
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;
