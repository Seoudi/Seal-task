import Request from './Request';

const MoviesApi = {

    getMovies: (page) => {
        
            const subURL = 'https://api.themoviedb.org/3/movie/popular';
            return Request.get(subURL,{api_key:'112925816489df1493abf94b2fac935e',
            region:'US',page:page});
     },
     getMovieDetails: (id) => {
        
            const subURL = `https://api.themoviedb.org/3/movie/${id}`;
            return Request.get(subURL,{api_key:'112925816489df1493abf94b2fac935e',
            language:'en-US'});
     },
     filterMovieByName: (text,page) => {
            const subURL = `https://api.themoviedb.org/3/search/movie`;
            return Request.get(subURL,{api_key:'112925816489df1493abf94b2fac935e',query:text,page:page,
            language:'en-US'});
     }

   
}

export default MoviesApi;
