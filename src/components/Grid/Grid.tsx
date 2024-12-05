import './Grid.css'


interface article{
    h1:string;
    p:string;
    img:string;
    p1:string;
    p2:string;
    p3:string;
    p4:string;
}
interface articleBase{
    articles:article[];
}
const Grid = ({articles}:articleBase) => {
    return (
        <div>
            <div className="grid">
            {articles.map((article, index) => (  

                            <div className="container my-5">

                            <h1 className="fw-bold fs-2">{article.h1}</h1>

                            <p className="fs-5 text-danger">{article.p}</p>
                            <img
                            src={article.img}
                            className="d-grid gap-3"
                            style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <p className="fs-5">{article.p1}<br/> {article.p2}<br/> {article.p3}<br/>{article.p4}</p>
                            <p className="fs-5 text-danger">Read More</p>

                            </div>


            ))}

        </div>
        </div>
        
        
    
       
    );
};

export default Grid;