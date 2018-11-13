import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getMoviesPopular,removeMovies } from '../actions/moviesActions';
import API from '../api/API'
import MovieCard from './MovieCard'
import InfiniteScroll from 'react-infinite-scroller';
import Waypoint from 'react-waypoint';

class MoviesList extends React.Component{
  state = {
    page: 1
  };
  componentDidMount() {
    this.loadMovies();
  }
  componentWillUnmount(){
    this.props.removeMovies()
  }

  loadMovies = () => {
    this.props.getMoviesPopular(this.state.page);
    this.setState({ page: this.state.page + 1 });
  };
  render(){
    let { movies } = this.props.movies;    
    return(
            <div className="row">
              {movies.map(movie => (
                <MovieCard key={movie.id} selectedMovie={movie}/>
              ))}
              <Waypoint onEnter={this.loadMovies} />
            </div>


    )
  }
 
}


const mapStateToProps = state => ({
  movies: state.movies
});
export default connect(
  mapStateToProps,
  { getMoviesPopular,removeMovies }
)(MoviesList);
