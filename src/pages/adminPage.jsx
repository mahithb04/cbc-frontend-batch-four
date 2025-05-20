import { FaFileInvoice, FaUsers } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AdminProductsPage from "./admin/products";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProduct";
import AdminOrdersPage from "./admin/adminOrders";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminPage(){

    const [userValidated ,setUserValidated] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token == null){
            toast.error("You are not logged in");
            navigate("/login");
        }else{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/user/current", {
                headers : {
                    Authorization : "Bearer " + token,
                },
            }).then((response) =>{
                if(response.data.user.role == "admin"){
                    setUserValidated(true);
                }else{
                    toast.error("You are not an admin");
                    navigate("/login");
                }
            }).catch(
                ()=>{
                    toast.error("Something went wrong Please login again");
                    navigate("/login")
                }
            )
        }
    }, [])

    return(
        
        <div className="w-full h-screen bg-gray-200 flex">
            {userValidated? (
            <>
                <div className="h-full w-[300px]">
                    <Link to="/admin/users" className="p-2 flex items-center"><FaUsers className="mr-2"/>Users</Link>
                    <Link to="/admin/products" className="p-2 flex items-center"><MdWarehouse className="mr-2"/>Products</Link>
                    <Link to="/admin/orders" className="p-2 flex items-center"><FaFileInvoice className="mr-2"/>Orders</Link>
                    
                </div>
                <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg m-2">
                    <Routes path = "/*">
                        <Route path = "/users" element={<h1>Users</h1>}/>
                        <Route path = "/products" element={<AdminProductsPage/>}/>
                        <Route path = "/orders" element={<AdminOrdersPage/>}/>
                        <Route path = "/addProduct" element={<AddProductForm/>}/>
                        <Route path = "/editProduct" element={<EditProductForm/>}/>

                    </Routes>

                </div>
            </>
            ) : (
                    <Loader/>
                )} 
            
        </div>
    )
}