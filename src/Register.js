import React from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { browserHistory, Router, Route } from 'react-router';
class Register extends React.Component{

    handleSubmit = e =>{
        e.preventDefault();
        const data={
            first_name:this.firstName,
            last_name:this.lastName,
            email: this.email

        };
        // to check if the signup button works well
        // console.log('works');
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"
                    onChange={e => this.firstName = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"
                    onChange={e => this.lastName = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email"
                    onChange={e => this.email = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={e => this.password = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password"
                    onChange={e => this.confirmPassword = e.target.value}/>
                </div>
                <button className="btn btn-primary btn-block">Sign Up</button>
                <Link to="/Login" className>Already have an account?</Link>
            </form>
        )
    }
}
export default Register