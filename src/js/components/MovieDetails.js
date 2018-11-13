import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { getMovieDetails,toggleModal } from '../actions/moviesActions';
class MovieDetails extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.onCloseModal= this.onCloseModal.bind(this);
    }
    onCloseModal(){
        this.props.toggleModal(false)
        this.props.history.push(`/`);
        
    } 
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getMovieDetails(id);

    }
    componentWillUnmount(){
        this.props.history.push(`/`);
      }
     
    render(){

      
        let {movie,modalBoolean} = this.props.movie;
        let starsCount;
        movie!=null? starsCount= String(movie.vote_average).split('.')[0]:''
        let stars = [];
        for (let i = 0; i < starsCount; i++) {

            stars.push(<span class="fa fa-star checked"></span>);
        }
        while(starsCount<10){
            stars.push(<span class="fa fa-star"></span>);
            starsCount++
        }
        // modalBoolean ===null?this.props.history.push(`/`):''
       
        return(
            movie!=null?
                modalBoolean? 
                <div className='supreme-container'>
                <div className={'modal '} style={{ display: modalBoolean? 'block' : 'none'}} id="basicExample" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content"  >
        
                            <div className="modal-header">
                            <h1>{movie.title}</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCloseModal}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="modal-body" >
                                <div className='container row'>
                                    <div className='container-image col-md-4'>
                                        <img  
                                            className='mx-0 w-100'  
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title}/>
                                    </div>
                                    <div className='container-content col-md-8'>
                                        <div className='content-header'>
                                            
                                            <ul className='content-list'>
                                                <li>{movie.release_date.split('-')[0]} <span class="far fa-calendar-alt"></span></li>
                                                <li>{movie.runtime}<span class="far fa-clock ml-1"></span></li>
                                                <li>{movie.genres[0].name}</li>
                                            </ul>
                                            <div className="rating">
                                                <div className="stars">
                                                
                                                {stars}
                                                    
                                                </div>
                                                <span class="review-no">{`${movie.vote_count} reviews`}</span>
                                            </div>
                                        </div>
                                        <div className='content-text'>
                                            <h2>Overview</h2>
                                            <p>{movie.overview}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                
                                    
                        </div>
                
                    </div>
                </div>
                </div>
                :
                <div className='container mt-5 row'>
                    <div className='container-image col-md-4'>
                        <img  
                            className='mx-0 w-100'  
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}/>
                    </div>
                    <div className='container-content col-md-8'>
                        <div className='content-header'>
                            <h1>{movie.title}</h1>
                            <ul className='content-list'>
                                <li>{movie.release_date.split('-')[0]} <span class="far fa-calendar-alt"></span></li>
                                <li>{movie.runtime}<span class="far fa-clock ml-1"></span></li>
                                <li>{movie.genres[0].name}</li>
                            </ul>
                            <div className="rating">
                                <div className="stars">
                                    {stars}
                                    
                                </div>
                                <span class="review-no">{`${movie.vote_count} reviews`}</span>
                            </div>
                        </div>
                        <div className='content-text'>
                            <h2>Overview</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            :''
        
        )
    }

}

const mapStateToProps = state => ({
    movie: state.movies
  });
export default connect(
    mapStateToProps,
    { getMovieDetails,toggleModal }
  )(MovieDetails);
  