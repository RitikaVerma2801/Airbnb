const initialState = {
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
    url1:"",
    url2:"",
    url3:"",
    url4:""
  };
  
  const newSpotReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_NEW_SPOT':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default newSpotReducer;
  