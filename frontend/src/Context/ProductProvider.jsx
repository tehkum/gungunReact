import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = createContext();

export function ProductProvider({ children }) {
  const [ productData, setProductData ] = useState([])
  const [ isClicked, setClicked ] = useState(false);

  
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/admin/products");
    setProductData(res.data);
  };

  useEffect(() => {   
    fetchData();
  }, [isClicked]);

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
