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
import Header2 from './components/header2/header2';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Router>
      <Routes>
          <Route
              path="/"
              element={
                  <>
                      <Header />
                      <div className="container_p">
                          <div className="left-column">
                              <Consectetuer />
                              <Grid />
                              <Paginate />
                          </div>
                          <div className="right-column">
                              <Recentpost />
                              <Tags />
                          </div>
                      </div>
                      <Footer />
                  </>
              }
          />
          <Route
              path="/about us"
              element={
                  <>
                        <Header2
                          title="Title"
                          content="uuiguhiu"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg"
                          //elisee fait appael de ces composants ici
                      /> 
                  </>
              }
          />
          <Route
              path="/living"
              element={
                  <>
                        <Header2
                          title="Title"
                          content="uuiguhiu"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg"
                          //farhan fait appel de ces composans ici
                      /> 
                  </>
              }
          />
           <Route
              path="/kitchen"
              element={
                  <>
                        <Header2
                          title="Title"
                          content="uuiguhiu"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg"
                          //hilal fait appel de ces composans ici
                      /> 
                  </>
              }
          />
          <Route
              path="/outdoor"
              element={
                  <>
                        <Header2
                          title="Title"
                          content="uuiguhiu"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg"
                          //kenneth fait appel de ces composans ici
                      /> 
                  </>
              }
          />
          <Route
              path="/contact"
              element={
                  <>
                        <Header2
                          title="Title"
                          content="uuiguhiu"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg"
                           //chrys fait appel de ces composans ici
                      /> 
                  </>
              }
          />
      </Routes>
  </Router>

  
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
