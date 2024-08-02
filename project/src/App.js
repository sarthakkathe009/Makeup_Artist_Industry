//import logo from './logo.svg';
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Blog from './Blog.jsx';
import Page from './Page.jsx';
import Shop from './Shop.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Cart from './Cart.jsx';
import Login from './Login.jsx';


function App() {
  return (
    <>
      <Router>
          
          
        <Routes>
          
            <Route path='/' element={<Home/>}></Route>
            <Route path='/shops' element={<Shop/>}></Route>
            <Route path='/page' element={<Page/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>

            <Route path='*' element={<h1 className='text-danger fw-bold'>Error 404<br/>Page Not Found!!!</h1>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
