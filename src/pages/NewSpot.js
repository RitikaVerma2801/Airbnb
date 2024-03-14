import React, { useState } from "react";
import "./NewSpot.css";
import FormInputGenerator from "../component/common/InputField/FormInputGenerator";
import Button from "../component/common/Button/Button";

const NewSpot = () => {
  const [formData, setFormData] = useState({
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    latitude: "",
    longitude: "",
    description: "",
    title: "",
    basePrice: "",
    previewUrl: "",
    url1: "",
    url2: "",
    url3: "",
    url4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formData");
  };

  const inputFields = [
    {
      label: "Country",
      name: "country",
      placeholder: "Country",
    },
    { label: "Street Address", name: "streetAddress", placeholder: "Address" },
    { label: "City", name: "city", placeholder: "City" },
    { label: "State", name: "state", placeholder: "State" },
    { label: "Latitude", name: "latitude", placeholder: "Latitude" },
    { label: "Longitude", name: "longitude", placeholder: "Longitude" },
    {
      label: "Describe your place to guests",
      name: "description",
      placeholder: "Please write at least 30 characters",
    },
    {
      label: "Create a title for your spot",
      name: "title",
      placeholder: "Name of your spot",
    },
    {
      label: "Set a base price for your spot",
      name: "basePrice",
      placeholder: "Price per night (USD)",
    },
    {
      label: "Preview Image URL",
      name: "previewUrl",
      placeholder: "Preview Image URL",
    },
    { label: "Image URL", name: "url1", placeholder: "Image URL" },
    { label: "Image URL", name: "url2", placeholder: "Image URL" },
    { label: "Image URL", name: "url3", placeholder: "Image URL" },
    { label: "Image URL", name: "url4", placeholder: "Image URL" },
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <h1>Create a new Spot</h1>
          <h2>Where's your place located</h2>
          <h3>
            Guests will only get your exact address once they've booked a
            reservation.
          </h3>
          <FormInputGenerator
            fields={inputFields}
            formData={formData}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Button type="submit" label="Create Spot" />
        </div>
      </form>
    </div>
  );
};

export default NewSpot;

// import React, { useState } from "react";
// import "./NewSpot.css";

// const NewSpot = () => {
//   const [formData, setFormData] = useState({
//     country: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     latitude: "",
//     longitude: "",
//     description: "",
//     title: "",
//     basePrice: "",
//     previewUrl: "",
//     url1: "",
//     url2: "",
//     url3: "",
//     url4: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData, "formData");
//   };

//   return (
//     <>
//           <div className="container">
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="form-group">
//           <h1>Create a new Spot</h1>
//           <h2>Where's your place located</h2>
//           <h3>Guests will only get your exact address once they've booked a reservation.</h3>
//           <label>Country</label>
//           <input
//             type="text"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             placeholder="Country"
//           />
//         </div>
//         <div className="form-group">
//           <label>Street Address</label>
//           <input
//             type="text"
//             name="streetAddress"
//             value={formData.streetAddress}
//             onChange={handleChange}
//             placeholder="Address"
//           />
//         </div>
//         <div className="row">
//           <div className="form-group">
//             <label>City</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               placeholder="City"
//             />
//           </div>
//           <div className="form-group">
//             <label>State</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               placeholder="State"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="form-group">
//             <label>Latitude</label>
//             <input
//               type="text"
//               name="latitude"
//               value={formData.latitude}
//               onChange={handleChange}
//               placeholder="Latitude"
//             />
//           </div>
//           <div className="form-group">
//             <label>Longitude</label>
//             <input
//               type="text"
//               name="longitude"
//               value={formData.longitude}
//               onChange={handleChange}
//               placeholder="Longitude"
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label>Describe your place to guests</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Please write at least 30 characters"
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label>Create a title for your spot</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Name of your spot"
//           />
//         </div>
//         <div className="form-group">
//           <label>Set a base price for your spot</label>
//           <input
//             type="text"
//             name="basePrice"
//             value={formData.basePrice}
//             onChange={handleChange}
//             placeholder="Price per night (USD)"
//           />
//         </div>
//         <div className="form-group">
//           <label>Liven up your spot with photos</label>
//           <p>Submit a link to at least one photo to publish your spot.</p>
//           <div>
//             <input
//               type="text"
//               name="previewUrl"
//               value={formData.previewUrl}
//               onChange={handleChange}
//               placeholder="Preview Image URL"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="url1"
//               value={formData.url1}
//               onChange={handleChange}
//               placeholder="Image URL"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="url2"
//               value={formData.url2}
//               onChange={handleChange}
//               placeholder="Image URL"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="url3"
//               value={formData.url3}
//               onChange={handleChange}
//               placeholder="Image URL"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="url4"
//               value={formData.url4}
//               onChange={handleChange}
//               placeholder="Image URL"
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <button type="submit" className="create-spot-button">
//             Create Spot
//           </button>
//         </div>
//       </form>
//     </div>

//     </>
//   );
// };

// export default NewSpot;
