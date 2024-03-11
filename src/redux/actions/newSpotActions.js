const updateNewSpot = (formData) =>{
    return {
        type: 'UPDATE_NEW_SPOT',
        payload: formData,
    };
};

export default updateNewSpot;