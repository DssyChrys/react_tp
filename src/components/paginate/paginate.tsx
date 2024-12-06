import { Link } from 'react-router-dom';
import './paginate.css';
interface PaginateProps{
    x?:number;
    y?:number;
    z?:number;
    prev?:string;
    nex?:string;
}
export default function Paginate(props: PaginateProps){
        return(
            <nav className='nav' aria-label="...">
                <ul className="pagination pagination-sm custom-pagination">

                    {props.prev !== undefined && (
                    <li className="page-item next-btn1"><a className="page-link1" href="n"><i className='bx bx-left-arrow-alt' ></i> Previous</a></li>
                    )}


                    <li className="page-item active" aria-current="page">
                    <Link to="/"><span className="page-link">{props.x}</span></Link>
                    </li>
                    

                    {props.y !== undefined && (
                    <Link to="/2" ><li className="page-item"><a className="page-link" href="n">{props.y}</a></li></Link>
                    )}

                    {props.z !== undefined && (
                    <Link to="/3" ><li className="page-item"><a className="page-link" href="n">{props.z}</a></li></Link>
                    )}

                    {props.nex !== undefined && (
                    <li className="page-item next-btn"><a className="page-link" href="n">Next <i className='bx bx-right-arrow-alt' ></i></a></li>
                )}
                </ul>
            </nav>

        );
}