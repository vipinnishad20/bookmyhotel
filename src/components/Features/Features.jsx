import React from "react";
import "./Features.css";
const Features = ()=>{
  return ( 
  <>
  
    <div className="featured">
      <div className="featured_item">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/10/99/d0/swimming-pool.jpg" alt="" className="featured_image" />
        <div className="featured_title">
          <h3>Mumbai</h3>
          <h4>560 property</h4>
        </div>
      </div>
    

    
      <div className="featured_item">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/374987469.webp?k=8c8b05e6c67a852c0bd5af16f5eb710ed650dd01ff3cbf084d43a83f12e62fa9&o=&s=1" alt="" className="featured_image" />
        <div className="featured_title">
          <h3>Goa</h3>
          <h4>370 property</h4>
        </div>
      </div>
    

    
      <div className="featured_item">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/330746644.webp?k=5b1c34b3a6150ef906a160644507816e3a42aa46fce95a41aec25c7272532d00&o=&s=1" alt="" className="featured_image" />
        <div className="featured_title">
          <h3>Rishikesh</h3>
         <h4>340 property</h4>
        </div>
      </div>
    

    
      {/* <div className="featured_item">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/10/99/d0/swimming-pool.jpg" alt="" className="featured_image" />
        <div className="featured_title">
          <h1>title</h1>
          <h2>123 property</h2>
        </div>
      </div>
     */}

{/*     
      <div className="featured_item">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/10/99/d0/swimming-pool.jpg" alt="" className="featured_image" />
        <div className="featured_title">
          <h1>title</h1>
          <h2>123 property</h2>
        </div>
      </div> */}
      </div>
  
  </>
  )
};
export default Features;