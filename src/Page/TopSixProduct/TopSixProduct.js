import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopSixProduct = () => {
    const [topSix , setTopSix] = useState([]);
    useEffect(() => {
        fetch("https://fast-forest-95996.herokuapp.com/allProduct")
          .then((res) => res.json())
          .then(data=>{
            const slicedData = data.slice(0,6)
            setTopSix(slicedData)})
            },[]);
    return (
        <div className="container">
      <h1 className="text-center p-3"> Explore All products</h1>
      <div className="row ">
        {topSix?.map((p) => (
          <div className="col-md-4 p-1">
            <div className=" border border p-3">
              <div className="">
                <img className="w-100" src={p?.image} alt="" />
              </div>

              <h5 className="mt-3" >{p?.name}</h5>
              <h4 className="text-danger">Price : {p?.price} $</h4>
              <Link to={`/purchase/${p._id}`}>
                <button className="btn btn-success">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default TopSixProduct;