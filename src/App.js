import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import  Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { browserHistory, Router, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Nav />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
