import { useContext, useState } from "react";
import "./ProductManage.css";
import { useProducts } from "../../main";

export default function ProductManage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description1: "",
    description2: "",
    manufacturingYear: "",
    edition: "",
    numberOfPages: "",
    language: "",
  });

  const { productData } = useContext(useProducts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/admin/products/add", {
      mehod: "post",
      body:{ ...formData },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-sec-2">
        <h1>Add Product</h1>
        <label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>

        <label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
        </label>

        <label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </label>

        <label>
          <textarea
            name="description1"
            value={formData.description1}
            onChange={handleChange}
            placeholder="Description 1"
          ></textarea>
        </label>

        <label>
          <textarea
            name="description2"
            value={formData.description2}
            onChange={handleChange}
            placeholder="Description 2"
          ></textarea>
        </label>

        <label>
          <input
            type="text"
            name="manufacturingYear"
            value={formData.manufacturingYear}
            onChange={handleChange}
            placeholder="Manufacturing year"
          />
        </label>

        <label>
          <input
            type="text"
            name="edition"
            value={formData.edition}
            onChange={handleChange}
            placeholder="Edition"
          />
        </label>

        <label>
          <input
            type="text"
            name="numberOfPages"
            value={formData.numberOfPages}
            onChange={handleChange}
            placeholder="Number of pages"
          />
        </label>

        <label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            placeholder="Language"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      <div className="product-display">
        <ul>
          {productData.map((items) => {
            const {
              _id,
              name,
              category,
              description1,
              description2,
              manufactureYear,
              price,
              edition,
              numberOfPages,
              language,
            } = items;
            return (
              <li key={_id}>
                {name} -- {category} -- {description1} -- {description2} --{" "}
                {manufactureYear} -- {price} -- {edition} -- {numberOfPages} --{" "}
                {language}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
