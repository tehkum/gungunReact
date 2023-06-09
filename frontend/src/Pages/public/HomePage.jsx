import CategoryBox from "../../Components/CategoryBox";
import Productcard from "../../Components/productCard";
import "./Homepage.css";

export default function HomePage(){
    return <>
        <div className="home-sec-one">
            
        </div>
        <div className="home-sec-two">
            <CategoryBox />
        </div>
        <div className="home-sec-three">
            <Productcard />
        </div>
    </>
}