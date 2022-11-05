import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider';
import Register from './Pages/Register';
import { Login } from '@mui/icons-material';
import Cart from './Pages/Cart';
//https://www.exxpozed.com


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/sign-in' element={<Register/>}/>  
          <Route path='/product' element={<Slider/>}/> 
          <Route path='/cart' element={<Cart/>}/>  

      </Routes>
    </Router>
    
  );
}

export default App;
