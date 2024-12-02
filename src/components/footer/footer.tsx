import './footer.css'
export default function Footer(){
    return(




        <div className='bigfooter'>
                             <div className='footer'>
            <div className='about'>
                    <h1>ABOUT</h1>
                    <p>Nulla quis lorem ut libero malesuada feugiat. </p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, </p>
                    <p>egestas non nisi. Pellentesque in ipsum id orci porta </p>
            </div>
            <div className='social'>
                    <h1>SOCIAL</h1>
                    <div>
                            <div className="social-icons">
                                <a href="#" className="icon">
                                    <img src="/images/facebook.png" alt="Facebook" />
                                </a>
                                <a href="#" className="icon">
                                    <img src="/images/twitter.png" alt="Twitter" />
                                </a>
                                <a href="#" className="icon">
                                    <img src="/images/instagram.png" alt="Instagram" />
                                </a>
                                <a href="#" className="icon">
                                    <img src="/images/pinterest.png" alt="Pinterest" />
                                </a>
                            </div>
                     </div>
            </div>
            <div className='contact'>
                    <h1>CONTACT US</h1>
                    <p>500 Terry Francois St.</p>
                    <p>San Francisco,</p>
                    <p>CA 94158</p>
                    <p>cnfo@example.com</p>
                    <p>contact@example.com</p>
            </div>
            
        </div>




        <hr />
        <div className='copyright'>
        <p>Copyright © 2024 Home Decor | Powered by Home Decor</p>
        <p>About Us   Living Room   Kitchen    Outdoors   Contact </p>
        </div>
        
        </div>
       
    );
}