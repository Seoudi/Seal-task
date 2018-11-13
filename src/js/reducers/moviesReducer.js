import {
    GET_MOVIES_POPULAR,
    GET_MOVIE_DETAILS,
    GET_MOVIE_BY_NAME,
    REMOVE_MOVIES,
    TOGGLE_MODAL
  } from '../constants/action-types';
  
  const initialState = {
    movies: [],
    movie:null,
    modalBoolean:null,
    movieInput:''
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_MOVIES_POPULAR:
        return {
          ...state,
          movies: state.movies.concat(action.payload),
          modalBoolean:false
        };
      case GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
      };
      case GET_MOVIE_BY_NAME:
      return {
        ...state,
        movies: action.payload.data,
        movieInput: action.payload.text
      };
      case REMOVE_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
      case TOGGLE_MODAL:
      return {
        ...state,
        modalBoolean: action.payload,
      };
      default:
        return state;
    }
  }
  