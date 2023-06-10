import { useState } from "react"
import "./ProductManage.css"

export default function YoutubeManage(){
    const [ videos, setVideos] = useState({
        link: "",
        title: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideos((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };

    return <div>
    <form onSubmit={handleSubmit} className="login-sec-2">
        <h1>Add Product</h1>
      <label>
        <input type="link" name="link" value={videos.link} onChange={handleChange} placeholder='Youtube link'/>
      </label>

      <label>
        <input type="text" name="category" value={videos.title} onChange={handleChange} placeholder="Category"/>
      </label>

      <label>
        <input type="text" name="price" value={videos.category} onChange={handleChange} placeholder="Price"/>
      </label>

      
      <button type="submit">Submit</button>
    </form>
    {/* <div className="product-display">
        <ul>{
            youtubeData.map(items=>{
             const { _id, name, category, description1, description2, manufactureYear, price, edition, numberOfPages, language } = items;
             return <li key={_id}>{name} -- { category } -- { description1 } -- { description2 } -- {manufactureYear} -- { price } -- { edition } -- { numberOfPages } -- { language }</li>     
            })    
        }</ul>
    </div> */}
    </div>
}