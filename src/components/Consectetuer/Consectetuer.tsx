import React from 'react';
import "./Consectetuer.css";
interface ConsectetuerProps{
    content1:string;
    content2:string;
    img:string;
    content3:string;
}

function Consectetuer(props: ConsectetuerProps) {
    return(
                 <div className='cont'>
            <p className='bold'>{props.content1}</p>
            <p className='nov'>{props.content2}</p>
            <span className='consec'>
            
                <img className="img" src={props.img}/>
                </span>
                <div className='cont2'>
                <p>{props.content3}</p>
                <p className="fs-5 text-danger">Read More</p>
                </div>
        <hr/>
        </div>
    );
};
export default Consectetuer;
