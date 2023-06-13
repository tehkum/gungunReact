import { useState } from "react";

export default function AddressPage(){
  const [ addressData, setAddress ] = useState({
    fullName: "",
    phoneNo: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    country: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(addressData);
  };


    return <>
    <div className="login-sec-2">
        <h1>Personal Information</h1>
        <label>
          <input
            type="text"
            name="fullName"
            value={addressData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </label>

        <label>
          <input
            type="number"
            name="phoneNo"
            value={addressData.phoneNo}
            onChange={handleChange}
            placeholder="Mobile Number"
          />
        </label>

        <label>
          <input
            type="text"
            name="address1"
            value={addressData.address1}
            onChange={handleChange}
            placeholder="Address Lane 1"
          />
        </label>

        <label>
          <input
            type="text"
            name="address2"
            value={addressData.address2}
            onChange={handleChange}
            placeholder="Address Lane 2"
          ></input>
        </label>


        <label>
          <input
            type="text"
            name="city"
            value={addressData.city}
            onChange={handleChange}
            placeholder="City"
          />
        </label>

        <label>
          <input
            type="number"
            name="pincode"
            value={addressData.pincode}
            onChange={handleChange}
            placeholder="Pin Code"
          />
        </label>

        <label>
          <input
            type="text"
            name="country"
            value={addressData.country}
            onChange={handleChange}
            placeholder="Country"
          />
        </label>


        <button>Submit</button>
      </div>
    </>
}