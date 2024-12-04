import './header2.css';
import { Link } from 'react-router-dom'
 
interface Header2Props{
    title:string;
    content:string;
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
                        <Link to="/" ><img src="/image/logo.png" alt="TechWire Logo" /></Link>
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
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                </div>
        </div>
    );
}