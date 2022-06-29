import "./ecommerce.css";
import img3 from "../../Assets/logo2.jpg";
import {Cart} from "./product";
import {CartItem} from "./product";
import { FiHeart } from "react-icons/fi";


import Navbar from "../Navbar/Navbar";
export default function Ecommerce() {
    return(
        <>
        <div> 
            <Navbar/>
        <div className="topcontainer">
            <div className="leftdiv">
             <img src={img3} alt="logo2" className="logo2"></img>
            </div>

            <div className="nextdiv">
                <h2>Iconic</h2>
                <span>Quick fashion for everyone</span>
            </div>


            <div className="centerdiv">
                <h2>&nbsp;Overview</h2>
                <span>&nbsp;252   4.7K    2.1K</span><br/>
                <span>Products    Likes Followers</span>
            </div>

            <div className="rightdiv">
                <h2>About Us</h2>
                <p>Browse our collection and discover our products.
                </p>

                
            </div>
            </div>

            <div className="cartitem">
                {
                    Cart && 
                    Cart.map((cart) => {
                        return (
                            <div className="cartvalue">
                        <div key={cart.id} >
                        <img src={cart.img} alt='cartitem' className="imagesrc"></img>
                        <div className="itemname">
                            {cart.itemname}
                        </div>
                            <br/>
                            <div className="description">
                            {cart.descrp}
                            </div>
                            <br/>
                            <div className="like">
                            <FiHeart className="heartIcon"/>
                            {cart.like}
                            </div>
                            <br/>
                            <div className="Amount">
                            {cart.amount}
                            </div>

                            <div className="btn">
                                <button><h3>Add to Cart</h3></button>
                            </div>

                        </div>
                        </div>

                        
                        
                        );
                    }
                    )
                    
                }
                </div>
            

            <div className="cartitem">
                {
                    CartItem && 
                    CartItem.map((cartitem) => {
                        return (
                            <div className="cartvalue">
                            <div key={cartitem.id}>
                        <img src={cartitem.img} alt='cartitem' className="imagesrc"></img>
                        <div className="itemname">
                            {cartitem.itemname}
                        </div>
                            <br/>
                            <div className="description">
                            {cartitem.descrp}
                            </div>
                            <br/>
                            <div className="like">
                            <FiHeart className="heartIcon"/>
                            {cartitem.like}
                            </div>
                            <br/>
                            
                            <div className="Amount">
                                 {cartitem.amount}       
                            </div>

                            <div className="btn">
                                <button><h3>Add to Cart</h3></button>
                            </div>

                            

                        </div>
                        </div>
                    
                    );
                    
                }
                    )
            }
            </div>

        </div>
        </>
        
    );
}