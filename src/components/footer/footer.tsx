import './footer.css'
export default function Footer(){
    return(
        <div className='footer'>
            <div className='about'>
                    <h1>ABOUT</h1>
                    <p>Nulla quis lorem ut libero malesuada feugiat. </p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, </p>
                    <p>egestas non nisi. Pellentesque in ipsum id orci porta </p>
            </div>
            <div className='social'>
                    <h1>SOCIAL</h1>
                    <p></p>
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
    );
}