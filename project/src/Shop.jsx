import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Products from './Products'
import axios from 'axios'

class Shop extends Component{
  constructor(){
    super()

    this.state=({
      data:[],
      data1:[],
      data2:[],
      data3:[],
      category:'',
      showScrollButton: false,
    })
  }

  fetchData = async() =>{
    const res=await axios.get('http://localhost:3000/trimmers')
    this.setState({data:res.data})

    const res1=await axios.get('http://localhost:3000/shavingKit')
    this.setState({data1:res1.data})

    const res2=await axios.get('http://localhost:3000/moisturizer')
    this.setState({data2:res2.data})

    const res3=await axios.get('http://localhost:3000/facewash')
    this.setState({data3:res3.data})
    
  }  

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.fetchData()
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  handleScroll = () => {
    const scrollY = window.scrollY;

    const scrollThreshold = 200;

    this.setState({
      showScrollButton: scrollY > scrollThreshold,
    });
  };


  handleCategeoryChange(NewCategory){
    this.setState({category:NewCategory})
    // console.log(this.state.category);
  }


  calculateDiscountPercentage(rs, rs1) {
    const discount = ((rs1 - rs) / rs1) * 100;
    return `${Math.round(discount)}%`;
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  render(){

    const{data,data1,data2,data3,category,showScrollButton}=this.state

    let currentData;

    switch (category) {
      case data1:
        currentData = data1;
        break;
      case data2:
        currentData = data2;
        break;
      case data3:
        currentData = data3;
        break;
      default:
        currentData = data;
    }
    
    return(
      <>
          <Navbar2/>
          
          <div className="container-fluid">
            <ul className="nav nav-tabs my-2 fw-bold">
              <li className="nav-item">
                <button onClick={()=>this.handleCategeoryChange(data)} className={`nav-link active`}>Trimmers</button>
              </li>
              <li className="nav-item">
                <button onClick={()=>this.handleCategeoryChange(data1)} className="nav-link text-secondary">Shaving Kit</button>
              </li>
              <li className="nav-item">
                <button onClick={()=>this.handleCategeoryChange(data2)} className="nav-link text-secondary">Moisturizer</button>
              </li>
              <li className="nav-item">
                <button onClick={()=>this.handleCategeoryChange(data3)} className="nav-link text-secondary">Face Wash</button>
              </li>
            </ul>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
              {
                currentData.map((val)=>{
                    const discount = this.calculateDiscountPercentage(val.rs, val.rs1);
                  return(
                    <>
                      <div className="col-md-3">
                      <Products
                          id={val.id}
                          name={val.name}
                          img={val.img}
                          rs={val.rs}
                          rs1={val.rs1}
                          off={discount}
                      />
                      </div>
                    
                    </>
                  )
                })
              }
              </div>
              </div>
              <div className="col-md-12 text-center">
                  {showScrollButton && (
                    <div className="scroll-to-top-button">
                      <button className='px-3 py-2 btn btn-danger scroll-btn rounded-circle' onClick={this.scrollToTop}><i className='fa fa-angle-up fa-2x'></i></button>
                    </div>
                  )} 
              </div>
            </div>
          </div>          
      </>
    )
  }
}

export default Shop