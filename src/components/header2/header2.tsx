import './header2.css';
import { Link } from 'react-router-dom'
 
interface Header2Props{
    aboutus?:string;
    title:string;
    content?:string;
    background:string;
}
export default function Header2(props: Header2Props){
    return(
        <div className='header2' style={{backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${props.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       }}>
                <div className='navbar2'>
                <nav>
                    <div className="image2">
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

                <div className='text2'>
                {props.aboutus !== undefined && (
                    <h3 className='about'>{props.aboutus}</h3>
                )}
                    <h1 >{props.title}</h1>

                {props.content !== undefined && (
                    <p>{props.content}</p>
                )}
                    
                </div>
        </div>
    );
}