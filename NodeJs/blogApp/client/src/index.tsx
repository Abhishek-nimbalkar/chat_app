import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './views/LoginPage';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {RoutesA} from "routes"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
      <Routes>
        {RoutesA?.map((ele,key):ReactNode=>(
          <Route 
          key={key}
          path={ele.path}
          element={ele.element} 
          />
        ))}
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

