import "./leftbar.css";
import img2 from "../../Assets/weather.jpeg";

export default function Leftbar() {
    return(
        <div className="leftbar-container">
            <div>
                <img src={img2} alt="logo" className="weatherlogo"></img>
            </div>
        </div>
    );
}