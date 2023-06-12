import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./Product.css";
import { useProducts } from "../../main";


export default function ProductPage() {
  const { productId } = useParams();
  const [specificProduct, setProduct] = useState({});
  const { productData } = useContext(useProducts);

  

  useEffect(()=>{
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  },[])

  useEffect(()=>{
    setProduct( productData.find(({_id})=> _id == productId));
  },[productId])

const { _id, name, category, description1, description2, manufactureYear, price, edition, numberOfPages, language } = specificProduct;


  return <>
    <div className="container-product">
      <div className="card-right">
        <img src="https://picsum.photos/200/300" alt="..."/>
        <img src="https://picsum.photos/200/300" alt="..."/>
        <img src="https://picsum.photos/200/300" alt="..."/>
        <img src="https://picsum.photos/200/300" alt="..."/>
      </div>
      <div className="card-left">
        <p className="product-type">{category}</p>
        <h1 className="product-title">{name}</h1>
        <p className="product-price-desc"><b>MRP in Indian currency:</b></p>
        <p className="product-price">{price} per pair</p>
        <p className="product-tax">[Inclusive of all taxes]</p>
        <p className="product-desc">{description1}</p>
        <p className="product-desc">{description2}</p>
        <p className="product-desc"><b>Manufacture Year: </b>{manufactureYear}</p>
        <p className="product-desc"><b>Edition: </b>{edition}</p>
        <p className="product-desc"><b>Number of pages: </b>{numberOfPages}</p>
        <p className="product-desc"><b>Language: </b>{language}</p>

        <button className="cart-btn" >Add to cart</button>
        <button className="wishlist-btn">Order now</button>      
      </div>
    </div>
  </>;
}
