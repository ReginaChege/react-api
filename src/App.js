// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Products from './Products';
import Navbar from './Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    
    <div>
            <Navbar/>
 <BrowserRouter>
 <Routes>
  <Route path='/login' element= {<Login/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route></Route>

 </Routes>
 </BrowserRouter>
      
    </div>
  );
}
export default App;
