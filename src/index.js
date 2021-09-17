import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CoverLogo from './images/CoverLogo2.png';



  ReactDOM.render(
    <React.StrictMode>
      <div className="container-fluid">
      <div className="coverImage">
          <div className="logo text-center">
              <img src={CoverLogo} width="500px" alt="CCs Vegan Spot Logo" />
              <br />
              <a href="https://www.facebook.com/ccsveganspot" target="_blank" rel="noreferrer"><button className="btn btn-secondary"><h5>Like us on Facebook<br /> @ccsveganspot</h5></button></a>
            </div>
            <div className="text-center beginBtn">
                <button className="btn-lg btn-warning" onClick={OpenApp}><h1>START ORDER</h1></button>
            </div>
        </div>
        </div>
    </React.StrictMode>, 
    document.getElementById('root')
  ); 

function OpenApp(){
  ReactDOM.render(
   <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

export default OpenApp; 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
