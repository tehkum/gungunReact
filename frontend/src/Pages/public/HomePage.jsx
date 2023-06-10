import { useEffect, useState } from "react";
import CategoryBox from "../../Components/CategoryBox";
import Productcard from "../../Components/productCard";
import "./Homepage.css";



export default function HomePage(){
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('/api/products')
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error:', error));
      }, []);

      const addProduct = () => {
            const newProduct = { name: 'New Product', price: 9.99 };
        
            fetch('/api/products', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newProduct),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data.message);
                // Refresh the product list
                fetch('/api/products')
                  .then((response) => response.json())
                  .then((data) => setProducts(data))
                  .catch((error) => console.error('Error:', error));
              })
              .catch((error) => console.error('Error:', error));
          };

    return <>
        <div className="home-sec-one">
            
        </div>
        <div className="home-sec-two">
            <CategoryBox />
        </div>
        <div className="home-sec-three">
        <button onClick={addProduct}>Add Product</button>
        <ul>
      {products?.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
            {/* <button onClick={() => deleteProduct(product._id)}>Delete</button> */}
          </li>
        ))}
      </ul>
            <Productcard />
        </div>
    </>
}