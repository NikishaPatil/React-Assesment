import "./middlebar.css";
import { FaHighlighter } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import img1 from "../../Assets/profile.jpeg";
import { FiYoutube } from "react-icons/fi";
import { FaSmileBeam } from "react-icons/fa";




export default function Middlebar() {
    return(


        
                <div class="write-post-container">
					<div class="user-profile">
                    <img src={img1} alt="profile" className="profileImg"></img>
						<div>
							<small>
                            <FaHighlighter/>
                            &nbsp;Public
							</small>
                            &nbsp; &nbsp; &nbsp;
                            <small>
                            <FiImage />
                            &nbsp;Albums
                            </small>
                            &nbsp; &nbsp; &nbsp;
                            <small>
                            <FiVideo/>
                            &nbsp;Video
                            </small>
						</div>
					</div>


					<div class="post-input-container">
						<textarea rows="3" placeholder="What's on your mind, Niki?"></textarea>
						<div class="add-post-links">
                            <h3><FiYoutube/> &nbsp;Media</h3>
                            &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp;
                           <h3><FaSmileBeam/>&nbsp;Activity</h3>
						</div> 
					</div>

                    </div>


			
       
    );
}