import "./explore.css";
import { FiFilter } from "react-icons/fi";

import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";



export default function Explore() {
    return(
        <>
            <Navbar/>
     
            <div className="icondiv">
                <h3>Explore</h3>
                    
                    
                    <input placeholder="   Filter" className="filterInput" /> 
                    <FiFilter className="filteroutlineIcon"/>
                
            </div>
    

        <div className="explore-icons1" >
        <Link to="/">
            <div className="column" >
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/clover.svg" alt="1" width="60px" />
                <h4>Feed</h4>
            </div>
            </Link>

            <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/friends.svg" alt="2" width="60px"/>
                <h4> Friends</h4>
            </div>

            <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/videos.svg" alt="3" width="60px"/>
                <h4>  Videos</h4>
            </div>

            <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/tag-euro.svg" alt="4" width="60px"/>
                <h4>  Pages</h4>
            </div>


           <Link to="/ecommerce">
            <div className="column">
            <img src="https://friendkit.cssninja.io/assets/img/icons/explore/cart.svg" alt="5"  width="60px" />
                <h4>Commerce</h4>
         
            </div>
            </Link>
            </div>


            <div className="explore-icons2">
                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/house.svg" alt="6" width="60px"/>
                <h4>Interests</h4>
                </div>


                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/videos.svg" alt="7" width="60px"/>
                <h4>Stories</h4>
                </div>

                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/question.svg" alt="8" width="60px"/>
                <h4>Questions</h4>
                </div>


                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/news.svg" alt="9" width="60px"/>
                <h4>News</h4>
                </div>

                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/cake.svg" alt="10" width="60px"/>
                <h4>Groups</h4>
                </div>
            </div>


            <div className="explore-icons3">
                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/envato.svg" alt="11" width="60px"/>
                <h4>Envato</h4>
                </div>


                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/calendar.svg" alt="12" width="60px"/>
                <h4>Events</h4>
                </div>

                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/pin.svg" alt="13" width="60px"/>
                <h4>CssNinja</h4>
                </div>


                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/idea.svg" alt="14" width="60px"/>
                <h4>Elements</h4>
                </div>

                <div className="column">
                <img src="https://friendkit.cssninja.io/assets/img/icons/explore/settings.svg" alt="15" width="60px"/>
                <h4>Settings</h4>
                </div>
            </div>

           
    
    </>
    );
}