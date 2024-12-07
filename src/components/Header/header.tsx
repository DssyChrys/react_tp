import './header.css';
import { Link } from 'react-router-dom'
 
export default function Header(){
    return(
        <div className='header'>
                <div className='navbar'>
                <nav>
                    <div className="image">
                        <Link to="/" ><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png" alt="TechWire Logo" /></Link>
                    </div>
                    <ul>
                        <Link to='/about us'><li>About us</li></Link>
                        <Link to='/living'><li>Living room</li></Link>                                               
                        <Link to='/kitchen'><li>Kitchen</li></Link>   
                        <Link to='/outdoor'><li>Outdoor</li></Link>                       
                        <Link to='/contact'><li>Contact</li></Link>                        

                    </ul>
                </nav>
                </div>

                <div className='text'>
                    <h1>Coming Home Never Felt So Good</h1>
                    <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
                    <h4>FIND YOUR STYLE</h4>
                </div>
        </div>
    );
}