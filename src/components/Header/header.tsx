import './header.css';
 
export default function Header(){
    return(
        <div className='header'>
                <div className='navbar'>
                <nav>
                    <div className="image">
                        <img src="/image/logo.png" alt="TechWire Logo" />
                    </div>
                    <ul>
                        <li>About us</li>
                        <li>Living Room</li>
                        <li>Kitchen</li>
                        <li>Outdoor</li>
                        <li>Contact</li>
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