import {GET_MOVIES_POPULAR ,GET_MOVIE_DETAILS, GET_MOVIE_BY_NAME,REMOVE_MOVIES,TOGGLE_MODAL} from '../constants/action-types';
import API from '../api/API'
import axios from 'axios';
  
    export const  getMoviesPopular =  (page)  => (dispatch) => {
        return API.MoviesApi.getMovies(page).then((res) => {
            console.log("data recieved");
            dispatch({
                    type: GET_MOVIES_POPULAR,
                    payload: res.data.results                                    
                    })
            

        }).catch((err) => {
            console.log(err);
        })
        
    }

  export const  getMovieDetails =  (id)  => (dispatch) => {
    return API.MoviesApi.getMovieDetails(id).then((res) => {
        console.log("data recieved");
        dispatch({
                type: GET_MOVIE_DETAILS,
                payload: res.data       
                })
        

    }).catch((err) => {
        console.log(err);
    })
    
  }
  export const  filterMovieByName =  (text,page)  => (dispatch) => {
    return API.MoviesApi.filterMovieByName(text,page).then((res) => {
        console.log("data recieved");
        dispatch({
                type: GET_MOVIE_BY_NAME,
                payload:{data:res.data.results,text:text}      
                })
        

    }).catch((err) => {
        console.log(err);
    })
    
  }
  export const  removeMovies =  ()  => (dispatch) => {
    dispatch({
      type: REMOVE_MOVIES,
      payload:[]       
      })
  }
  export const  toggleModal =  (modalState)  => (dispatch) => {
    dispatch({
      type: TOGGLE_MODAL,
      payload:modalState    
      })
  }
  
  
  