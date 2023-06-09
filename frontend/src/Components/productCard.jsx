import "./Productcard.css";

export default function Productcard() {
  return (
    <div className="productcard">
      <div className="product-card-img">
        <img src="https://picsum.photos/200/300" alt=".." />
        <p>Product Price</p>
      </div>
      <div className="product-card-desc">
      <h2>Product Name</h2>
      <p className="product-cat">Product Category</p>
      <p>Product size</p>
      <button>Add To Cart</button></div>
    </div>
  );
}
