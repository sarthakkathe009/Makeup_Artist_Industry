import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Stack } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Breadcrumbs, Button, TextField, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

class Login extends Component{

    constructor(){
        super()
        this.state=({
            name:"",
            pass:"",
            nerror:"",
            perror:""
        })
    }
    
    validations = () =>{
        let error = true
        
        const nameRegex = /^[a-z0-9_]+$/
        const passRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/

        if(this.state.name===""){
            error=false
            this.setState({nerror:"Required"})
        }
        else if(!nameRegex.test(this.state.name)){
            error=false
            this.setState({nerror:"Must no contain space and uppercase character"})
        }
        else{
            this.setState({nerror:""})
        }

        if(this.state.pass===""){
            error=false
            this.setState({perror:"Required"})
        }
        else if(!passRegex.test(this.state.pass)){
            error=false
            this.setState({perror:"Must have 8 characters, number, symbol and at least one uppercase character"})
        }
        else{
            this.setState({perror:""})
        }

        return error
    }

    saveForm = (e) =>{
        e.preventDefault()


        if(this.validations()){
            alert("Login Successfully")

            this.setState({
                name:"",
                pass:""
            })
        }
    }

    render(){
        const{name,nerror,pass,perror}=this.state
        return(
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
                            <Badge variant='dot' color='error'>
                                <FavoriteBorderOutlinedIcon sx={{color:"black"}}/>
                            </Badge>
                            </NavLink>
                            <NavLink to="/cart">
                            <Badge variant='dot' color='error'>
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

                {/* End of Nav */}

                <div className="container my-4 text-center">
                    <h1 className="fw-bold">Login</h1>
                    <div className="d-flex justify-content-center">
                        <Breadcrumbs separator={<ArrowRightIcon/>}>
                        <NavLink to="/" className="navbar nav-link text-dark">Home</NavLink>
                        <Typography className="text-dark">Login</Typography>
                        </Breadcrumbs>
                    </div>
                </div>

                <div className="container my-4 border border-dark">
                    <form action="" onSubmit={this.saveForm}>
                        <div className="row justify-content-center">
                            <div className="col-md-6 my-3">
                                <div className="form-group">
                                    <TextField helperText={nerror && nerror} name='name' type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value})}} color='action' className='form-control' label="Username" placeholder='Enter Your Username' FormHelperTextProps={{ style: { color: 'red' } }}/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 my-3">
                                <div className="form-group">
                                    <TextField helperText={perror && perror} name='pass' type='password' value={pass} onChange={(e)=>{this.setState({pass:e.target.value})}} color='action' className='form-control' label="Password" placeholder='Enter Your Password' FormHelperTextProps={{ style: { color: 'red' } }}/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2 my-3">
                                <div className="form-group">
                                    <Button variant='contained' type='submit' className='py-2 form-control' color="inherit">Login</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            
            </>
        )
    }
}
export default Login