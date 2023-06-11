import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryBox from "../../Components/CategoryBox";
import ProductCard from "../../Components/ProductCard";
import "./Homepage.css";
import { useProducts } from "../../main";

export default function HomePage() {
  const { productData } = useContext(useProducts);



  const addProduct = () => {
    
  };

  return (
    <>
      <div className="home-carousel">
        <Carousel>
          <div className="home-carousel-layout">
            <img src="https://picsum.photos/200/300" alt="Carousel Image 1" width="100" height="100" className="Image-carousel
            "/>
          </div>
          <div className="home-carousel-layout">
            <img src="https://picsum.photos/200/300" alt="Carousel Image 2" width="100" height="100" className="Image-carousel
            "/>
          </div>
          <div className="home-carousel-layout">
            <img src="https://picsum.photos/200/300" alt="Carousel Image 3" width="100" height="100" className="Image-carousel
            "/>
          </div>
        </Carousel>
      </div>
      <div className="home-category">
        <CategoryBox />
      </div>
      <div className="home-products">
        {
            productData?.map(items=>{
             const { _id, name, category, description1, description2, manufactureYear, price, edition, numberOfPages, language } = items;
             return <ProductCard key={_id} _id={_id} name={name} category={category} description1={description1} description2={description2} price={price} edition={edition} manufactureYear={manufactureYear} numberOfPages={numberOfPages} language={language}/>   
            })    
        }
        
      </div>
    </>
  );
}
