export default function AddressPage(){
    return <>
    <div className="login-sec-2">
        <h1>Add Product</h1>
        <label>
          <input
            type="text"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            placeholder="Full Name"
          />
        </label>

        <label>
          <input
            type="text"
            name="category"
            // value={formData.category}
            // onChange={handleChange}
            placeholder="Mobile Number"
          />
        </label>

        <label>
          <input
            type="text"
            name="price"
            // value={formData.price}
            // onChange={handleChange}
            placeholder="Address Lane 1"
          />
        </label>

        <label>
          <input
            type="text"
            name="description1"
            // value={formData.description1}
            // onChange={handleChange}
            placeholder="Address Lane 2"
          ></input>
        </label>


        <label>
          <input
            type="text"
            name="City"
            // value={formData.manufactureYear}
            // onChange={handleChange}
            placeholder="City"
          />
        </label>

        <label>
          <input
            type="text"
            name="edition"
            // value={formData.edition}
            // onChange={handleChange}
            placeholder="Pin Code"
          />
        </label>

        <label>
          <input
            type="text"
            name="numberOfPages"
            // value={formData.numberOfPages}
            // onChange={handleChange}
            placeholder="Country"
          />
        </label>


        <button>Submit</button>
      </div>
    </>
}