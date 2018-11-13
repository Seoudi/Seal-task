import React from 'react'
import {getRequestToken,sessionLogin} from '../actions/loginActions'
import { connect } from "react-redux";
class Login extends React.Component{
    state = {
        username: '',
        password:''
      };
    componentDidMount(){
        this.props.getRequestToken();
    }
    handleClick = () => {
        this.props.sessionLogin(this.props.login.requestToken,this.state.username,this.state.password)
      };
    render(){
        return(
        <div className="text-center" style={{padding:"50px 0"}}>
            <div className="logo">login</div>
        
            <div className="login-form-1">
                <form id="login-form" className="text-left">
                    <div className="login-form-main-message"></div>
                    <div className="main-login-form">
                        <div className="login-group">
                            <div className="form-group">
                                <label htmlFor="lg_username" className="sr-only">Username</label>
                                <input type="text" className="form-control" id="lg_username" name="lg_username" value={this.state.username} onChange={event =>this.setState({ username:event.target.value })} placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lg_password" className="sr-only">Password</label>
                                <input type="password" className="form-control" id="lg_password" name="lg_password" value={this.state.password} onChange={event =>this.setState({ password:event.target.value })} placeholder="password"/>
                            </div>
                        </div>
                        <button type="submit" className="login-button" onClick = {this.handleClick}><i className="fa fa-chevron-right"></i></button>
                    </div>
                </form>
            </div>
        
        </div>)
    }

}
const mapStateToProps = state => ({
    login: state.login
  });
export default connect(
    mapStateToProps,
    { getRequestToken,sessionLogin }
  )(Login);