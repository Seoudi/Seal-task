import {GET_REQUEST_TOKEN,SESSION_LOGIN} from '../constants/action-types';
import API from '../api/API'
import axios from 'axios';
  
    export const  getRequestToken =  ()  => (dispatch) => {
        return API.LoginApi.getRequestToken().then((res) => {
            console.log("data recieved");
            dispatch({
                    type: GET_REQUEST_TOKEN,
                    payload: res.data.request_token                                    
                    })
            

        }).catch((err) => {
            console.log(err);
        })
        
    }
    export const  sessionLogin =  (requestToken,username,password)  => (dispatch) => {
        return API.LoginApi.sessionLogin(requestToken,username,password).then((res) => {
            console.log("data recieved");
            dispatch({
                    type: SESSION_LOGIN,
                    payload: res.data                                    
                    })
            

        }).catch((err) => {
            console.log(err);
        })
        
    }

  
  
  
  