import React from 'react';
import {Link } from 'react-router-dom';
class Nav extends React.Component{
    render(){
        return(
     <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
           <Link to ={'/'} className="nav-link">Home</Link>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                  <Link to ={'/Login'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                   <Link to ={'/Register'} className="nav-link">Sign Up</Link>
                </li>

              </ul>
          </div>
          

        </div>

      </nav>
        );
    }


}
export default Nav;