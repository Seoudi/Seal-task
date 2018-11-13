
import axios from 'axios';


const Request = {

    post: (subUrl, data) => {
        let method = 'POST';
        return RequestHandler.handelRequest(subUrl, data, method);
    },



    get: (subUrl, parameters) => {
        let method = 'GET';
        return RequestHandler.handelRequest(subUrl, parameters, method);
        
    }
}

// Here is the middle ware
// subUrl:string,data,method
const RequestHandler = {
    handelRequest: (url, params, method, config) => {
        console.log('url',url +', ' +JSON.stringify(params)+', '+method+', '+config)
        return new Promise((resolve, reject) => {
            axios({
              method, url, params, headers: {
                    'Content-Type':  "application/json"
                }
            })
                .then(function (response) {
                    console.log(response)
                    resolve(response)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                });
        });

    },
    handleResponse: (response) => { return response },

}



export default Request;
