import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import { filterMovieByName ,removeMovies,getMoviesPopular} from '../actions/moviesActions';

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component { 
  constructor(props, context) {
    super(props, context);
    this.state= {
      movieInput:''
    };

    this.onInputChange= this.onInputChange.bind(this);
    this.updateView= this.updateView.bind(this);
}
  state ={
    movieInput:''
  }
  updateView (){
    this.props.removeMovies()
    this.props.getMoviesPopular();

  }
  
  onInputChange = e => {
    e.preventDefault();
    this.setState({ movieInput: e.target.value });
    e.target.value===''?this.updateView():
    this.props.filterMovieByName(e.target.value,1);
  };
  render(){
    const { match } = this.props;
    console.log('match', match)
    let detailsbol ;
    match===undefined?detailsbol=false:detailsbol=true;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
         <Link to="/" className="navbar-brand mr-auto" id='navbar-title'>
          SealTask
        </Link>
        <button 
          className="navbar-toggler"
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto"/>
          {/* <ul className="navbar-nav  ml-3 ">

            <li className="nav-item">
            <Link className="nav-link" to="/login" >
              Login
            </Link>
            </li>
          </ul>  */}
          <form className="form-inline my-2 my-lg-0">
            <input
              type="text"
              className="form-control mr-sm-2 font-awesome"
              placeholder="Search for a movie"
              value={this.state.movieInput}
              onChange={this.onInputChange}
              disabled={detailsbol}
            />
          </form>
        </div>
      </nav>

    )
  }

}

export default connect(
  null, { filterMovieByName ,removeMovies,getMoviesPopular }
)(Header);

