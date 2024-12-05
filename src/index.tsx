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
import Map from "./components/map/map";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const articles = [
    {
      p:"",
      h1: "salut",
      img: "images/hero01-free-img-150x150 (1).jpg",
      p1: "Cursus iaculis etiam in In nullam donec sem sed ",
      p2:"",
      p3:"",
      p4:"",

    },
  ];
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
                              <Grid articles={articles}/>
                              <Paginate 
                                x={1}
                                y={2}
                                z={3}
                              />
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
                      /> 
                      <p>elisee</p>
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
                      /> 
                      <p>farhan</p>
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
                      /> 
                      <p>hilal</p>
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
                      />
                      <p>kenneth</p> 
                  </>
              }
          />
          <Route
              path="/contact"
              element={
                  <>
                        <Header2
                          title="Get in Touch"
                          content=""
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/lady-in-balcony.jpg"
                        /> 
                        <Map />
                        <Footer />
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
