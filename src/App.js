import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
//https://www.exxpozed.com


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/sign-up' element={<Register/>}/>  
          <Route path='/view/:id' element={<Slider/>}/> 
          <Route path='/cart' element={<Cart/>}/>  

      </Routes>
    </Router>
    
  );
}

export default App;
