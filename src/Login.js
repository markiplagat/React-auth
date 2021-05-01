import React from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { browserHistory, Router, Route } from 'react-router';
class Login extends React.Component{
    handleSubmit = e =>{
        e.preventsDefault();
    const data={
        email:this.email,
        password: this.password
    }

    }
    render(){
        return(
        <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email"
                    onChange={e => this.Email = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password"
                    onChange={e => this.Password = e.target.value}/>
                </div>
                <button className="btn btn-primary btn-block">Sign In</button>
                 <Link to="/ForgotPassword">Forgot password?</Link>
                </form>
        )
    }

}
export default Login;