import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setReview(data));
      }, []);
    return (
        <div className="container">
            <h1 className="text-center p-3">Reviews</h1>
            <div className="row ">
                {review?.map((r) =>(
                    <div className="col-md-3 p-1">
                    <div className="border border p-3">
                      <div className="">
                        <img className="border rounded-circle w-10" src={r?.img} alt="" />
                      </div>
                      <h5 className="mt-3 text-success" >{r?.user}</h5>
                      <h6 className="">{r?.review}</h6>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    );
};

export default Review;