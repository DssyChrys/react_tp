import './Grid.css';

interface Article {
    h1: string;
    p: string;
    img: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
}
interface ArticleBase {
    articles: Article[];
}

const Grid = ({ articles }: ArticleBase) => {
    return (
        <div className="grid">
            {articles.map((article, index) => (
                <div className="container" key={index}>
                    <h1 className="fw-bold fs-2">{article.h1}</h1>
                    <p className="fs-5 text-danger">{article.p}</p>
                    <img
                        src={article.img}
                        alt={article.h1}
                        style={{
                            width: "90%",
                            height: "300px",
                            objectFit: "cover",
                        }}
                    />
                    <p className="fs-5">
                        {article.p1}
                        <br />
                        {article.p2}
                        <br />
                        {article.p3}
                        <br />
                        {article.p4}
                    </p>
                    <p className="fs-5 text-danger">Read More</p>
                </div>
            ))}
        </div>
    );
};

export default Grid;
