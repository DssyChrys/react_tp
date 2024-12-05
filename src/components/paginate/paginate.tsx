import './paginate.css';
interface PaginateProps{
    x?:number;
    y?:number;
    z?:number;
}
export default function Paginate(props: PaginateProps){
        return(
            <nav className='nav' aria-label="...">
                <ul className="pagination pagination-sm custom-pagination">
                    <li className="page-item active" aria-current="page">
                    <span className="page-link">{props.x}</span>
                    </li>

                    {props.y !== undefined && (
                    <li className="page-item"><a className="page-link" href="n">{props.y}</a></li>
                    )}

                    {props.z !== undefined && (
                    <li className="page-item"><a className="page-link" href="n">{props.z}</a></li>
                    )}
                    <li className="page-item next-btn"><a className="page-link" href="n">Next  ➜</a></li>
                </ul>
            </nav>

        );
}