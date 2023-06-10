import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = createContext();

export function ProductProvider({ children }) {
  const [productData, setProductData] = useState([]);

  const getProduct = async () => {
    const res = await fetch("http://localhost:3000/api/admin/products", {
      method: "GET",
    });
    setProductData(await res.json());
    // console.log(await res.json());
  };
  useEffect(() => {
    getProduct();
  }, [productData]);

  return (
    <useProducts.Provider
      value={{
        productData,
        setProductData,
      }}
    >
      {children}
    </useProducts.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node,
};
