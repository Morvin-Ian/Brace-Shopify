import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import View from './Pages/View';
//https://www.exxpozed.com


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/sign-up' element={<Register/>}/>  
          <Route path='/view/:id' element={<View/>}/> 
          <Route path='/cart' element={<Cart/>}/>  

      </Routes>
    </Router>
    
  );
}

export default App;
