import React from 'react';
import nice from './nice.png'
import client1 from './client1.png'
import client2 from './client3.png'
import client4 from './client4.png'
import client5 from './client5.png'

const About = () => {
    return (
        <>
        <div className="grido d-flex align-content-center  align-items-center">
            <div>
            <img
                src={nice}
                className="d-grid gap-3"
                style={{ width: "700px", height: "500px", objectFit: "cover", borderRadius: "8px", margin:"200px", marginRight:"130px" }}
                />
            </div>
            <div >
                <h1 className=" fw-bold fs-0 mb-5">Working Since 1995</h1>
                <p className="fs-5 mb-3 ">Taciti alias conubia, senectus, soluta nisl interdum vitae eius<br/> habitant metus dapibus quis eos, risus, vehicula! Egestas qui<br/> interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti<br/> alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</p>
                <h2 className="fw-bold fst-italic mb-4">Design is a funny word</h2>
                <p className="fs-5  ">Taciti alias conubia, senectus, soluta nisl interdum vitae eius<br/> habitant metus dapibus quis eos, risus, vehicula! Egestas qui<br/> interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti<br/> alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</p>


            </div>
            
            


        </div>
        <div className=" bg-light grido d-flex align-content-center  align-items-center">
            <div>
                <img
                    src={client1}
                    style={{ width: "220px", height: "50px", objectFit: "cover", borderRadius: "8px", margin:"50px"}}


                />
            </div>
            <div>
                <img
                    src={client2}
                    style={{ width: "220px", height: "50px", objectFit: "cover", borderRadius: "8px", margin:"50px"}}


                />
            </div>
            <div>
                <img
                    src={client4}
                    style={{ width: "220px", height: "50px", objectFit: "cover", borderRadius: "8px", margin:"50px"}}


                />
            </div>
            <div>
                <img
                    src={client5}
                    style={{ width: "220px", height: "50px", objectFit: "cover", borderRadius: "8px", margin:"50px"}}


                />
            </div>
            <div>
                <img
                    src={client2}
                    style={{ width: "220px", height: "50px", objectFit: "cover", borderRadius: "8px", margin:"50px"}}


                />
            </div>

        </div>
       


        </>
        
    );
};

export default About;
