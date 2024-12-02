import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import Recentpost from './components/Recentpost/Recentpost';
import Grid from './components/Grid/Grid';
import { Tags } from './components/Tags/Tags';
import Consectetuer from './components/Consectetuer/Consectetuer';
import Paginate from './components/paginate/paginate';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Header />
      <div className="container_p">
        <div className="left-column">
          <Consectetuer />
          <Grid/>
          <Paginate/>
        </div>
        <div className="right-column">
          <Recentpost />
          <Tags/>
        </div>
      </div>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
