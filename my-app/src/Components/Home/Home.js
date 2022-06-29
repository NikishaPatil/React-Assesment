import "./home.css";
import Navbar from "../Navbar/Navbar";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";
import PostSide from "../Feed/Postside";


function Home(){
    return(
        <>
        <Navbar/>
            <div className="home-Container">
             <Leftbar />
             <PostSide/>
             <Rightbar /> 
            </div> 

        </>
    );
}
export default Home;