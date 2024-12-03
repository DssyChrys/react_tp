import "./Recentpost.css";
export default function Recentpost() {
  return (
      <div className="leftcolonne">
      <form action="#" className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <i className="bx bx-search " style={{marginLeft:"330px",top: "-33px", position:"relative", fontSize:"25px"}}></i>
      </form>
      <div className="Articles">
        <h2>Recent Posts</h2>
        <div className="article-r1">
          <img src="images\pic26-free-img-150x150.jpg" />
          <div className="description">
            <a href="#">Consectetuer vehicula ab</a>
            <p>In Kitchen,Lifestyle</p>
          </div>
        </div>
        <hr />
        <div className="article-r2">
          <img src="images\hero01-free-img-150x150.jpg" />
          <div className="description">
            <a href="#">Taciti hendrerit dis odit incident</a>
            <p>In Kitchen,Living Room,Reading Room</p>
          </div>
        </div>
        <hr />
        <div className="article-r3">
          <img src="images\pic20-free-img-150x150.jpg" />
          <div className="description">
            <a href="#">Sunt doloremque blandit inven</a>
            <p>In Living Room</p>
          </div>
        </div>
        <hr />
        <div className="article-r4">
          <img src="images\hero01-free-img-150x150 (1).jpg" />
          <div className="description">
            <a href="#">Fugit quaerat vulputé! Irure</a>
            <p>In Living Room</p>
          </div>
        </div>
        <hr />
        <div className="article-r5">
          <img src="images\sofa-with-pot-150x150.jpg" />
          <div className="description">
            <a href="#">Litora aptent magnam laoreet!</a>
            <p>In Living Room</p>
          </div>
        </div>
      </div>
    </div>
  
   
  );
}
