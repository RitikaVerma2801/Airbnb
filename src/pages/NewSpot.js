
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateNewSpot from "../redux/actions/newSpotActions";
import "./NewSpot.css";

const NewSpot = () => {
  const formData = useSelector((state) => state.newSpot);
  console.log(formData)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateNewSpot({ ...formData, [name]: value }));
  };

  const renderFormGroup = (label, name, value, placeholder, type = "text", className = "") => (
  <div className={`form-group ${className}`}>
    <label>{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={type === "textarea" ? "textarea" : ""}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={type === "text" ? "photos" : ""}
      />
    )}
  </div>
);


  const renderPhotoInputs = () => {
    const placeholders = [
      "Preview Image URL",
      "Image URL",
      "Image URL",
      "Image URL",
      "Image URL",
    ];

    return placeholders.map((placeholder, index) => (
      <div key={index}>
        {renderFormGroup("Photo Link", `url${index}`, formData[`url${index}`], placeholder, "url")}
      </div>
    ));
  };

  return (
    <div className="container">
      <form className="form-container">
        <h1>Create a new Spot</h1>
        <h2>Where's your place located</h2>
        <h3>
          Guests will only get your exact address once they've booked a reservation.
        </h3>
        {renderFormGroup("Country", "country", formData.country, "Country")}
        {renderFormGroup("Street Address", "streetAddress", formData.streetAddress, "Address")}
        <div className="row">
          {renderFormGroup("City", "city", formData.city, "City")}
          {renderFormGroup("State", "state", formData.state, "State")}
        </div>
        <div className="row">
          {renderFormGroup("Latitude", "latitude", formData.latitude, "Latitude")}
          {renderFormGroup("Longitude", "longitude", formData.longitude, "Longitude")}
        </div>
        {renderFormGroup("Describe your place to guests", "description", formData.description, "Please write at least 30 characters", "textarea")}
        {renderFormGroup("Create a title for your spot", "title", formData.title, "Name of your spot")}
        {renderFormGroup("Set a base price for your spot", "basePrice", formData.basePrice, "Price per night (USD)")}
        <div className="form-group photos">
          <label>Liven up your spot with photos</label>
          <p>Submit a link to at least one photo to publish your spot.</p>
          {renderPhotoInputs()}
        </div>
        <div className="form-group">
          <button type="submit" className="create-spot-button">
            Create Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewSpot;



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import updateNewSpot from "../redux/actions/newSpotActions";
// import "./NewSpot.css";

// const NewSpot = () => {
//   const formData = useSelector((state) => state.newSpot);
//   console.log(formData);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedData = { ...formData, [name]: value };
//     dispatch(updateNewSpot(updatedData));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to the server
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="form-group">
//           <h1>Create a new Spot</h1>
//           <h2>Where's your place located</h2>
//           <h3>
//             Guests will only get your exact address once they booked a
//             reservation.
//           </h3>
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
//         <div className="form-group description">
//           <label>Describe your place to guests</label>
//           <p>
//             Mention the best features of your space, any special amenities like
//             fast wifi or parking, and what you love about the neighborhood.
//           </p>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Please write atleast 30 characters"
//           ></textarea>
//         </div>
//         <div className="form-group title">
//           <label>Create a title for your spot</label>
//           <p>
//             Catch guests' attention with a spot title that highlights what makes
//             your place special.
//           </p>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Name of your spot"
//           />
//         </div>
//         <div className="form-group prices">
//           <label>Set a base price for your spot</label>
//           <p>
//             Competitive pricing can help your listing stand out and rank higher
//             in search results.
//           </p>
//           <input
//             type="text"
//             name="basePrice"
//             value={formData.basePrice}
//             onChange={handleChange}
//             placeholder="Price per night (USD)"
//           />
//         </div>
//         <div className="form-group photos">
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
//   );
// };

// export default NewSpot;

