import terasse from '../../assets/images/terasse.jpg'
import interieur from '../../assets/images/interieur.jpg'
import cinema from '../../assets/images/cinema.jpg'
import jardin from '../../assets/images/jardin.jpg'
import './Grid.css'

const Grid = () => {
    return (
        <div>
            <div className="grid">
             <div className="container my-5">

                    <h2 className="fw-bold fs-2">Eleifend sodales molestiae deserunt</h2>

                    <p className="fs-5 text-danger">November 2, 2017 / Outdoors</p>
                    <img
                    src={terasse}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Nullam ac urna eu felis dapibus condimentum<br/>sit amet a augue. Sed non neque elit. Sed ut<br/>imperdiet nisi. Proin condimentum fermentum<br/>nunc. Lorem ipsum dolor</p>
                    <p className="fs-5 text-danger">Read More</p>

                </div>
                
                <div className="container my-5">

                    <h2 className="fw-bold fs-2">Crporis quae purus <br/>inventore!</h2>

                    <p className="fs-5 text-danger">October 17, 2017 / Outdoors</p>
                    <img
                    src={interieur}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Luctus nec ullamcorper mattis, pulvinar<br/>dapibus leo. Sed non mauris vitae erat<br/>consequat auctor eu in elit. Class aptent taciti<br/>sociosqu ad litora torquent per conubia nostra.</p>
                    <p className="fs-5 text-danger">Read More</p>


                </div>
                


            </div>
            <div className="grid">
                <div className="container my-5">

                    <h1 className="fw-bold fs-2">Ex maxime quibusdam<br/> quam</h1>

                    <p className="fs-5 text-danger">April 2,2017/Fashion, Lifestyle, Living Room, Outdoors</p>
                    <img
                    src={cinema}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Nullam ac urna eu felis dapibus condimentum<br/>sit amet a augue. Sed non neque elit. Sed ut<br/>imperdiet nisi. Proin condimentum fermentum<br/>nunc. Lorem ipsum dolor.</p>
                    <p className="fs-5 text-danger">Read More</p>


                </div>
                <div className="container my-5">

                    <h1 className="fw-bold fs-2">Natoque odio amet autem parturient</h1>

                    <p className="fs-5 text-danger">March 15, 2012 / Living Room, Outdoors</p>
                    <img
                    src={jardin}
                    className="d-grid gap-3"
                    style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <p className="fs-5">Velit mauris egestas quam, ut aliquam massa<br/>nisl quis neque. Suspendisse in orci<br/>enim.Mauris in erat justo. Nullam ac urna eu<br/>felis dapibus condimentum sit amet a</p>
                    <p className="fs-5 text-danger">Read More</p>


                </div>


            </div>

        </div>
        
        
    
       
    );
};

export default Grid;