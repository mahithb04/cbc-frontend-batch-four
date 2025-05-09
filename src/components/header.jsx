import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className = "w-full  h-[50px] flex text-[20px] justify-center items-center bg-gray-100">
            <div className="w-[500px] h-full flex items-center justify-evenly text-pink-400 text-xl">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/reviews">Reviews</Link>
            </div>
            
        </header>
    )
}