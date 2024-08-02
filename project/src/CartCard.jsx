// import React, { useState } from 'react'
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import FlashOnIcon from '@mui/icons-material/FlashOn';
// import Button from '@mui/material/Button';
// import { Box, Fab } from "@mui/material";
// import { Stack } from '@mui/system';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
//import axios from 'axios';


// const CartCard = (props) => {

//     const{name,img,rs,rs1,off}=props

//     const currentDate = new Date();
//     currentDate.setDate(currentDate.getDate() + 2) // Add 2 days to the current date

//     const month = currentDate.toLocaleDateString('default', { month: 'short' })
//     const date = currentDate.getDate()
//     const day = currentDate.toLocaleDateString('default', { weekday: 'short' })

//     const[count,setCount]=useState(1)

//     const handleDecrement = () => {
//         if (count > 1) {
//           setCount(count - 1);
//         }
//     }

//     return(
//         <>
//             <div className="card">
//               <div className="row">
//                 <div className="col-md-3 py-2 text-center">
//                   <img src={img} className="img-fluid" style={{height:170}} alt="img"/>
//                   <div className="grid pt-3">
//                     <button className="border border-2 bg-light rounded-circle" onClick={handleDecrement}><RemoveIcon sx={{fontSize:15}}/></button>
//                     <div className="d-inline px-3 py-1 mx-2 border border-2">{count}</div>
//                     <button className="border border-2 bg-light rounded-circle" onClick={()=>{setCount(count+1)}}><AddIcon sx={{fontSize:15}}/></button>
//                   </div>
//                 </div>
//                 <div className="col-md-9">
//                   <div className="card-body">
//                     <div className="card-title fs-5 fw-bold">{name}</div>
//                     <div className="card-title text-end pe-2" style={{fontSize:13}}>{`Delivery by ${day}, ${date} ${month}`}</div>
//                     <div className="card-text fw-bold text-danger">Save{off}</div>
//                     <div className="card-text fs-2 mt-2">
//                       <sup><CurrencyRupeeIcon fontSize="small"/></sup>{rs} <span className='fs-6 text-muted'>Rs.<del>{rs1}</del></span>
//                     </div>
//                     <div className="card-text mt-3">
//                       <Box className="d-flex justify-content-between">
//                         <Stack spacing={2} direction="row">
//                           <Button size="medium" variant="contained" color="success" startIcon={<FlashOnIcon/>}>Buy Now</Button>
//                           <Button size="medium" variant="outlined" color="error" startIcon={<FavoriteBorderOutlinedIcon/>}>Wishlist</Button>
//                         </Stack>
//                         <Fab size="medium"><DeleteOutlineIcon/></Fab>
//                       </Box>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
        
//         </>
//     )
// }

// export default CartCard