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
import About from './components/About/About';
import 'boxicons/css/boxicons.min.css';
import 'boxicons';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const articles = [
    {
        p:"November 21, 2017 / Kitchen, Living Room, Reading Room",
        h1: "Taciti hendrerit dis odit incidunt November 21 2",
        img: "images/kitchen01.jpg",
        p1: "Cillum corrupti accumsan non cumque alias ",
        p2:"ipsa, platea! Mollis auctor, repellendus sagittis? ",
        p3:"Corporis dictumst mollis, curae. Eaque, quam ",
        p4:"per, praesent pretium eu non cumque animi ",
  
      },
      {
          p:"November 20, 2017 / Living Room",
          h1: "Sunt doloremque blandit inven",
          img: "images/accueil02.jpg",
          p1: "Nisl vel urna debitis morbi fringilla malesuada ",
          p2:"maiores optio! Ratione, facilis. Illum ",
          p3:"accusantium eros sed tristique, cubilia? Vel eu  ",
          p4:"cupiditate. Habitasse urna molestie hendrerit, ",
    
        },
        {
          p:"November 20, 2017 / Living Room",
          h1: "Imperdiet phasellus aliquamJ",
          img: "images/kitchen01.jpg",
          p1: "Lorem ipsum dolor sit amet, consectetur ",
          p2:"adipiscing elit. Ut elit tellus, luctus nec ",
          p3:"ullamcorper mattis, pulvinar dapibus leo. Sed ",
          p4:"non mauris vitae erat consequat auctor eu in",
    
        },
        {
          p:"November 7, 2017 / Living Room",
          h1: "Fugit quaerat vulputate! Irure",
          img: "images/accueil04.jpg",
          p1: "Sodales inceptos dolorem elit molestias ",
          p2:"minima quam ipsa proident maecenas ",
          p3:"magnam massa. Hac maiores? Dis elit facilisis ",
          p4:"cupiditate. Habitasse urna molestie hendrerit,",
    
        },
  ];
  const kitchen = [
    {
      p:"November 21, 2017 / Kitchen, Living Room, Reading Room",
      h1: "Taciti hendrerit dis odit incidunt November 21 2",
      img: "images/kitchen01.jpg",
      p1: "Cillum corrupti accumsan non cumque alias ",
      p2:"ipsa, platea! Mollis auctor, repellendus sagittis? ",
      p3:"Corporis dictumst mollis, curae. Eaque, quam ",
      p4:"per, praesent pretium eu non cumque animi ",

    },
    {
        p:"August 8, 2017 / Kitchen",
        h1: "Sodales arcu consequatur consectetur",
        img: "images/kitchen02.jpg",
        p1: "Consectetur dolor sit amet adipiscing elit. Ut ",
        p2:"elit tellus, luctus nec ullamcorper mattis, ",
        p3:"pulvinar dapibus leo. Sed non mauris vitae erat ",
        p4:"consequat auctor eu in elit. Class",
  
      },
      {
        p:"June 17, 2017 / Kitchen",
        h1: "Imperdiet phasellus aliquamJ",
        img: "images/kitchen03.jpg",
        p1: "Lorem ipsum dolor sit amet, consectetur ",
        p2:"adipiscing elit. Ut elit tellus, luctus nec ",
        p3:"ullamcorper mattis, pulvinar dapibus leo. Sed ",
        p4:"non mauris vitae erat consequat auctor eu in",
  
      },
      {
        p:"October 5, 2010 / Kitchen, Lifestyle",
        h1: "Impedit sit.",
        img: "images/kitchen04.jpg",
        p1: "Nisl vel urna debitis morbi fringilla malesuada ",
        p2:"maiores optio! Ratione, facilis. Illum ",
        p3:"accusantium eros sed tristique, cubilia? Vel eu ",
        p4:"cupiditate. Habitasse urna molestie hendrerit,",
  
      },
  ];
  const outdoor = [
    {
      p:"November 2, 2017 / Outdoors",
      h1: "Eleifend sodales molestiae deserunt",
      img: "images/terasse.jpg",
      p1: "Cillum corrupti accumsan non cumque alias ",
      p2:"ipsa, platea! Mollis auctor, repellendus sagittis? ",
      p3:"Corporis dictumst mollis, curae. Eaque, quam ",
      p4:"per, praesent pretium eu non cumque animi ",

    },
    {
        p:"October 17, 2017 / Outdoors",
        h1: "Crporis quae purus inventore!",
        img: "images/interieur.jpg",
        p1: "Consectetur dolor sit amet adipiscing elit. Ut ",
        p2:"elit tellus, luctus nec ullamcorper mattis, ",
        p3:"pulvinar dapibus leo. Sed non mauris vitae erat ",
        p4:"consequat auctor eu in elit. Class",
  
      },
      {
        p:"April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
        h1: "Ex maxime quibusdam quam",
        img: "images/cinema.jpg",
        p1: "Lorem ipsum dolor sit amet, consectetur ",
        p2:"adipiscing elit. Ut elit tellus, luctus nec ",
        p3:"ullamcorper mattis, pulvinar dapibus leo. Sed ",
        p4:"non mauris vitae erat consequat auctor eu in",
  
      },
      {
        p:"March 15, 2012 / Living Room, Outdoors",
        h1: "Natoque odio amet autem parturient",
        img: "images/jardin.jpg",
        p1: "Nisl vel urna debitis morbi fringilla malesuada ",
        p2:"maiores optio! Ratione, facilis. Illum ",
        p3:"accusantium eros sed tristique, cubilia? Vel eu ",
        p4:"cupiditate. Habitasse urna molestie hendrerit,",
  
      },
  ];
  const page2 = [
    {
      p:"November 2, 2017 / Outdoors",
      h1: "Eleifend sodales molestiae deserunt",
      img: "images/terasse.jpg",
      p1: "Cillum corrupti accumsan non cumque alias ",
      p2:"ipsa, platea! Mollis auctor, repellendus sagittis? ",
      p3:"Corporis dictumst mollis, curae. Eaque, quam ",
      p4:"per, praesent pretium eu non cumque animi ",

    },
    {
        p:"October 17, 2017 / Outdoors",
        h1: "Crporis quae purus inventore!",
        img: "images/interieur.jpg",
        p1: "Consectetur dolor sit amet adipiscing elit. Ut ",
        p2:"elit tellus, luctus nec ullamcorper mattis, ",
        p3:"pulvinar dapibus leo. Sed non mauris vitae erat ",
        p4:"consequat auctor eu in elit. Class",
  
      },
      {
        p:"April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
        h1: "Ex maxime quibusdam quam",
        img: "images/cinema.jpg",
        p1: "Lorem ipsum dolor sit amet, consectetur ",
        p2:"adipiscing elit. Ut elit tellus, luctus nec ",
        p3:"ullamcorper mattis, pulvinar dapibus leo. Sed ",
        p4:"non mauris vitae erat consequat auctor eu in",
  
      },
      {
        p:"March 15, 2012 / Living Room, Outdoors",
        h1: "Natoque odio amet autem parturient",
        img: "images/jardin.jpg",
        p1: "Nisl vel urna debitis morbi fringilla malesuada ",
        p2:"maiores optio! Ratione, facilis. Illum ",
        p3:"accusantium eros sed tristique, cubilia? Vel eu ",
        p4:"cupiditate. Habitasse urna molestie hendrerit,",
  
      },
      {
        p:"April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
        h1: "Ex maxime quibusdam quam",
        img: "images/cinema.jpg",
        p1: "Lorem ipsum dolor sit amet, consectetur ",
        p2:"adipiscing elit. Ut elit tellus, luctus nec ",
        p3:"ullamcorper mattis, pulvinar dapibus leo. Sed ",
        p4:"non mauris vitae erat consequat auctor eu in",
  
      },
  ];
  const page3 = [
    {
      p:"October 17, 2017 / Outdoors",
      h1: "Crporis quae purus inventore!",
      img: "images/interieur.jpg",
      p1: "Consectetur dolor sit amet adipiscing elit. Ut ",
      p2:"elit tellus, luctus nec ullamcorper mattis, ",
      p3:"pulvinar dapibus leo. Sed non mauris vitae erat ",
      p4:"consequat auctor eu in elit. Class",

    },
    {
        p:"August 8, 2017 / Kitchen",
        h1: "Sodales arcu consequatur consectetur",
        img: "images/kitchen02.jpg",
        p1: "Consectetur dolor sit amet adipiscing elit. Ut ",
        p2:"elit tellus, luctus nec ullamcorper mattis, ",
        p3:"pulvinar dapibus leo. Sed non mauris vitae erat ",
        p4:"consequat auctor eu in elit. Class",
  
      },
      {
        p:"June 17, 2017 / Kitchen",
        h1: "Imperdiet phasellus aliquamJ",
        img: "images/kitchen03.jpg",
        p1: "Lorem ipsum dolor sit amet, consectetur ",
        p2:"adipiscing elit. Ut elit tellus, luctus nec ",
        p3:"ullamcorper mattis, pulvinar dapibus leo. Sed ",
        p4:"non mauris vitae erat consequat auctor eu in",
  
      },
      {
        p:"October 5, 2010 / Kitchen, Lifestyle",
        h1: "Impedit sit.",
        img: "images/kitchen04.jpg",
        p1: "Nisl vel urna debitis morbi fringilla malesuada ",
        p2:"maiores optio! Ratione, facilis. Illum ",
        p3:"accusantium eros sed tristique, cubilia? Vel eu ",
        p4:"cupiditate. Habitasse urna molestie hendrerit,",
  
      },
  ];
  const living = [
    {
      p:"November 20, 2017 / Living Room",
      h1: "Sunt doloremque blandit inven",
      img: "images/accueil02.jpg",
      p1: "Nisl vel urna debitis morbi fringilla malesuada",
      p2:"maiores optio! Ratione, facilis. Illum ",
      p3:"accusantium eros sed tristique, cubilia? Vel eu  ",
      p4:"cupiditate. Habitasse urna molestie hendrerit,  ",

    },
    {
        p:"November 20, 2017 / Living Room",
        h1: "Fugit quaerat vulputate! Irure.",
        img: "images/kitchen01.jpg",
        p1: "Sodales inceptos dolorem elit molestias ",
        p2:"minima quam ipsa proident maecenas ",
        p3:"magnam massa. Hac maiores? Dis elit facilisis ",
        p4:"sapiente! Vulputate praesent esse! Hic?",
  
      },
      {
        p:"November 7, 2017 / Living Room",
        h1: "Litora aptent magnam laoreet!",
        img: "images/accueil04.jpg",
        p1: "Lorem ipsum dolor sit amet, consectetur ",
        p2:"adipiscing elit. Ut elit tellus, luctus nec ",
        p3:"ullamcorper mattis, pulvinar dapibus leo. Sed ",
        p4:"non mauris vitae erat consequat auctor eu in",
  
      },
      {
        p:"April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
        h1: "Ex maxime quibusdam quam",
        img: "images/cinema.jpg",
        p1: "Nullam ac urna eu felis dapibus condimentum ",
        p2:"maiores optio! Ratione, facilis. Illum ",
        p3:"accusantium eros sed tristique, cubilia? Vel eu ",
        p4:"cupiditate. Habitasse urna molestie hendrerit,",
  
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
                              <Consectetuer 
                                  content1='Consectetuer vehicula ab'
                                  content2='November 21, 2017 / Kitchen, Lifestyle'
                                  content3='Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]'
                                  img="/images/bureau.jpg"
                              />
                              <Grid articles={articles}/>
                              <Paginate 
                                x={1}
                                y={2}
                                z={3}
                                nex='yes'
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
              path="/2"
              element={
                  <>
                      <Header />
                      <div className="container_p">
                          <div className="left-column">
                              <Grid articles={page2}/>
                              <Paginate 
                                prev="yes"
                                x={1}
                                y={2}
                                z={3}
                                nex='yes'
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
              path="/3"
              element={
                  <>
                      <Header />
                      <div className="container_p">
                          <div className="left-column">
                              <Grid articles={page3}/>
                              <Paginate 
                                prev="yes"
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
                        aboutus='Know more'
                          title="About Us"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/lady-in-balcony.jpg"
                      /> 
                     <About/>
                     <Footer/>
                  </>
              }
          />
          <Route
              path="/living"
              element={
                  <>
                        <Header2
                          title="Living Room "
                          content="Home » Living Room"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg"
                      /> 
                      <div className="container_p">
                             <div className="left-column">
                             <Consectetuer 
                                  content1='Consectetuer vehicula ab'
                                  content2='November 21, 2017 / Kitchen, Lifestyle'
                                  content3='Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]'
                                  img="/images/bureau.jpg"
                              />
                                     <Grid articles={living}/>
                                     <Paginate 
                                      x={1}
                                      y={2}
                                      nex='yes'
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
              path="/kitchen"
              element={
                  <>
                        <Header2
                          title="Kitchen"
                          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.Home » Kitchen"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg"
                      /> 
                       <div className="container_p">
                             <div className="left-column">
                             <Consectetuer 
                                  content1='Consectetuer vehicula ab'
                                  content2='November 21, 2017 / Kitchen, Lifestyle'
                                  content3='Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]'
                                  img="/images/bureau.jpg"
                              />
                                     <Grid articles={kitchen}/>
                                      
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
              path="/outdoor"
              element={
                  <>
                        <Header2
                          title="Outdoor"
                          content="Home >> Outdoor"
                          // image en background doit etre une url
                          background="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic04-free-img.jpg"
                      />
                       <div className="container_p">
                          <div className="left-column">
                          <Consectetuer 
                                  content1='Icinia soluta. Lacus quas.'
                                  content2='November 7, 2017 / Outdoors'
                                  content3='Dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class […]'
                                  img="/images/outdoor.jpg"
                              />
                              <Grid articles={outdoor}/>
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
