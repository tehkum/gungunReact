import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = createContext();

export function ProductProvider({ children }) {
  const [ productData, setProductData ] = useState([])
  const [ isClicked, setClicked ] = useState(false);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/admin/products",{method: 'GET'});
    const product = await res.json();
    setProductData(product.products);

  useEffect(() => {   
    fetchData();
  }, [productData]);

  const clicked = () => {
    setClicked(!isClicked);
  }
  
  return (
    <useProducts.Provider
      value={{
        productData,
        setProductData,
        clicked
      }}
    >
      {children}
    </useProducts.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node,
};
