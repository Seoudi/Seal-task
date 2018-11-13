import {
    GET_REQUEST_TOKEN,SESSION_LOGIN
  } from '../constants/action-types';
  
  const initialState = {
    requestToken:''

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_REQUEST_TOKEN:
        return {
          ...state,
          requestToken: action.payload,
        };
        case SESSION_LOGIN:
        return {
          ...state,
          requestToken: action.payload,
        };
      default:
        return state;
    }
  }

  