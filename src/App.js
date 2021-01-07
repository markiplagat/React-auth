import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
     <Nav />
      <div className="auth-wrapper">
        <div className="auth-inner">
            <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
