import { Route, Routes } from "react-router";
import HomePage from "../Pages/public/HomePage";
import CartPage from "../Pages/public/Cart";
import ConfirmPage from "../Pages/public/ConfirmOrder";
import LoginPage from "../Pages/public/Login";
import CheckoutPage from "../Pages/public/Checkout";
import ProductPage from "../Pages/public/Product";
import AddressPage from "../Pages/public/Address";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/confirm" element={<ConfirmPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/Address" element={<AddressPage/>}/>
    </Routes>
}