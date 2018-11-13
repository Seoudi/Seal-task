import React from 'react'
import { connect } from "react-redux";
import { compose } from 'redux';
import { Link,withRouter } from 'react-router-dom';
import { toggleModal } from '../actions/moviesActions';

class MovieCard extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.onOpenModal= this.onOpenModal.bind(this);
    }
    onOpenModal(){
        this.props.toggleModal(true)
        this.props.history.push(`/${this.props.selectedMovie.id}`);
    }
    render(){
        const {selectedMovie} = this.props;
        let date = new Date(selectedMovie.release_date);
        let month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][date.getMonth()];
        let newDate = month+' '+date.getDate()+', '+date.getFullYear();
        let overview=selectedMovie.overview.length>100? selectedMovie.overview.substring(0,200)+'...':selectedMovie.overview
        return(
            <div className="col-md-4 my-3"
            onClick = {this.onOpenModal}>
            
            <div className="card h-100">
            
              <div className="card-block row no-gutters h-100">
             
              <div className='col-md-4'>
                     <img  
                        className='card_image mx-0'  
                        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                        alt={selectedMovie.title}/>
                </div>
                <div className='card_content col-md-8 pl-1 d-flex flex-column justify-content-between'>
                <div className='card-header'>
                    <h4 className="card-title">{selectedMovie.title}</h4>
                    <h6 className="card-subtitle text-muted">{newDate}</h6>
                </div>
                    <p className="card-text ">{overview}</p>
                    <div className='card-footer'>
                    <Link id='footer-link'onClick = {event => event.stopPropagation()}to={`/${selectedMovie.id}`}>More Info</Link>
                    </div>
                </div>

              </div>
            </div>
          </div>

        );
    }

}

export default compose(
    withRouter,
    connect(
      null,
      { toggleModal }
    )
  )(MovieCard);