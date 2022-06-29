
import './App.css';
import React,{useState,useEffect} from 'react';
import Explore from "./Components/Explore/Explore";
import Ecommerce from "./Components/Ecommerce/Ecommerce";
import Cart from "./Components/Ecommerce/Cart";
import { Routes} from "react-router-dom";
import { Route} from "react-router-dom";
import Home from './Components/Home/Home';
import BounceLoader from "react-spinners/BounceLoader";
import { CartItem } from './Components/Ecommerce/product';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])


  return (
  
    <div>
      {
        loading ?
      <BounceLoader className='loader'
                  color={'#50CEE3'} 
                  loading={loading} 
                   size={150} />
                   :

    <Routes>
      <Route path="/" exact element={<Home/>}></Route> 
      <Route path="/explore" element={<Explore/>}></Route> 
      <Route path="/ecommerce/explore" element={<Explore/>}></Route> 
      <Route path="/ecommerce" element={<Ecommerce/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      </Routes> 
      }

     </div>

  )
}

export default App;