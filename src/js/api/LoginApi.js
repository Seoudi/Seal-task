import Request from './Request';

const LoginApi = {

    getRequestToken: () => {
            const subURL = 'https://api.themoviedb.org/3/authentication/token/new';
            return Request.get(subURL,{api_key:'112925816489df1493abf94b2fac935e'});
     },
     sessionLogin: (requestToken,username,password) => {
        const subURL = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
        return Request.get(subURL,{api_key:'112925816489df1493abf94b2fac935e',request_token:requestToken
        ,username:username,password:password});
    },

}

export default LoginApi;
