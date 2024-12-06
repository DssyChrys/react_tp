import React from 'react';
import nice from './nice.png'


const About = () => {
    return (
        <>
       <div
  className="d-flex align-items-center justify-content-center"
  style={{ margin: '180px' }}
>
  <div className="d-flex flex-column flex-lg-row align-items-center">
    <div>
      <img
        src={nice}
        className="img-fluid"
        style={{
          margin: "10px",
        }}
      />
    </div>
    <div className="text-center text-lg-start ms-lg-4 mt-3 mt-lg-0">
      <h1 className="fw-bold fs-0 mb-3">Working Since 1995</h1>
      <p className="fs-5 mb-2">
        Taciti alias conubia, senectus, soluta nisl interdum vitae eius<br />
        habitant metus dapibus quis eos, risus, vehicula! Egestas qui<br />
        interdum habitant! Laoreet, placeat maxime Suspendisse. Taciti<br />
        alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.
      </p>
      <h2 className="fw-bold fst-italic mb-3">Design is a funny word</h2>
      <p className="fs-5">
        Taciti alias conubia, senectus, soluta nisl interdum vitae eius<br />
        habitant metus dapibus quis eos, risus, vehicula! Egestas qui<br />
        interdum habitant! Laoreet, placeat maxime Suspendisse. Taciti<br />
        alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.
      </p>
    </div>
  </div>
</div>


        <div className="logo2">
            <div>
                <img
                    src="/image/logo2.png"
                    style={{ width: "100%", height: "100%", objectFit: "cover", margin:"0", marginBottom:"0px"}}


                />
            </div>
            </div>
        </>
        
    );
};

export default About;
