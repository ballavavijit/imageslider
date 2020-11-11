import {
    IMAGE_LIST
  } from './actionTypes';
  
  export const initialState = {
    loading: false,
    currentImages: []
  };
  
  const imageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
  
      case `${IMAGE_LIST}_PENDING`:
        console.log("*********_PENDING********");
        return { ...state, loading: true };
      
        case `${IMAGE_LIST}_FULFILLED`:
        console.log("*********_FULFILLED********");
        return { ...state, loading: false, currentImages: payload };
      
        case `${IMAGE_LIST}_REJECTED`:
        console.log("*********_REJECTED********");
        return { ...state, loading: false, error: payload };
  
      default:
        return state;
    }
  };
  
  export default imageReducer;