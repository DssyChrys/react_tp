import salon from '../../assets/images/salon.jpg'
import cuisine from '../../assets/images/cuisine.jpg'
import sofa from '../../assets/images/sofa.jpg'
import './Grid.css'

const Grid = () => {
    return (
        <div>
            <div className="grid">
             <div className="container my-5">

                    <h1 className="fw-bold fs-2">Taciti hendrerit dis odit incidunt</h1>

                    <p className="fs-5 text-danger">November 21, 2017 / Kitchen, Living Room, Reading Room</p>
                    <img
                    src={cuisine}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Cillum corrupti accumsan non cumque alias<br/> ipsa, platea! Mollis auctor, repellendus sagittis?<br/> Corporis dictumst mollis, curae. Eaque, quam per,<br/> praesent pretium eu non cumque animi dolorem</p>
                    <p className="fs-5 text-danger">Read More</p>

                </div>
                
                <div className="container my-5">

                    <h1 className="fw-bold fs-2">Sunt doloremque blandit inven</h1>

                    <p className="fs-5 text-danger">November 20, 2017 / Living Room</p>
                    <img
                    src={salon}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Nisl vel urna debitis morbi fringilla<br/> malesuada maiores optio! Ratione, facilis.<br/> Illum accusantium eros sed tristique,<br/> cubilia? Vel eu cupiditate. Habitasse<br/> urna molestie hendrerit, animi eros</p>
                    <p className="fs-5 text-danger">Read More</p>


                </div>
                


            </div>
            <div className="grid">
                <div className="container my-5">

                    <h1 className="fw-bold fs-2">Fugit quaerat vulputate! Irure.</h1>

                    <p className="fs-5 text-danger">November 20, 2017 / Living Room</p>
                    <img
                    src={cuisine}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Nisl vel urna debitis morbi fringilla<br/> malesuada maiores optio! Ratione, facilis.<br/> Illum accusantium eros sed tristique,<br/> cubilia? Vel eu cupiditate. Habitasse<br/> urna molestie hendrerit, animi eros</p>
                    <p className="fs-5 text-danger">Read More</p>


                </div>
                <div className="container my-5">

                    <h1 className="fw-bold fs-2">Litora aptent magnam laoreet!</h1>

                    <p className="fs-5 text-danger">November 7, 2017 / Living Room</p>
                    <img
                    src={sofa}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Ut elit tellus, luctus nec ullamcorper mattis,<br/> pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu</p>
                    <p className="fs-5 text-danger">Read More</p>


                </div>


            </div>

        </div>
        
        
    
       
    );
};

export default Grid;