import './paginate.css';
export default function Paginate(){
        return(
            <nav className='nav' aria-label="...">
                <ul className="pagination pagination-sm custom-pagination">
                    <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item next-btn"><a className="page-link" href="#">Next  ➜</a></li>
                </ul>
            </nav>

        );
}