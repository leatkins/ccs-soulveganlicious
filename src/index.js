import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CoverLogo from './images/CoverLogo2.png';



  ReactDOM.render(
    <React.StrictMode>
      <div className="cover-container">
      <div className="coverImage">
          <div className="logo text-center">
              <img src={CoverLogo} width="550em" alt="CCs Vegan Spot Logo" />
              <br />
              <a href="https://www.facebook.com/ccsveganspot" className="noDecoration" target="_blank" rel="noreferrer"> ::: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg> :::  LIKE US ON FACEBOOK</a>
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
