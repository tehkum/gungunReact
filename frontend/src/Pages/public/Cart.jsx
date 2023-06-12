import { useEffect, useState } from "react";
import "./Cartpage.css";
import CartCard from "../../Components/CartBox";


export default function CartPage() {
  const [ cartData, setCart ] = useState([]);

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("cart")) ?? [] )
  },[cartData])

  return (
    <>
      <div className="cartpage">
        <div className="left-cart-area">
          <h1>Your Cart</h1>
          <div className="sec2-cart-right">
            <p>Delivery</p>
            <p>FREE</p>
          </div>
          <hr />
          <div className="sec3-cart-right">
            <div>
              <p>
                <b>Total : </b>
              </p>
              <p>[Inclusive of all taxes]</p>
            </div>
            {/* <p>₹{totalPrice}</p> */}
          </div>
          <ul>{
            cartData.map(item=>{
              const { _id, name, price } = item;
              return <CartCard key={_id} _id={_id} name={name} amount={price} />
            })
          }</ul>
          <hr />
          <div className="payment-logos">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/visa.png"
              alt="visa"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/mastercard-logo.png"
              alt="mastercard-logo"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/rupay.png"
              alt="rupay"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/banknotes.png"
              alt="banknotes"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/bhim-upi.png"
              alt="bhim-upi"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/bank-cards--v1.png"
              alt="bank-cards--v1"
            />
          </div>
        </div>
      </div>
      {/* <AlertBox alertMessage={btnClicked?.message} clicked={btnClicked?.clicked}/> */}
    </>
  );
}
