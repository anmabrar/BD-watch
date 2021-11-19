import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("https://fast-forest-95996.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => setReview(data));
      }, []);
    return (
        <div className="container">
            <h1 className="text-center p-3">Reviews</h1>
            <div className="row ">
                {review?.map((r) =>(
                    <div className="col-md-3 p-3">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                      <div className="">
                        <img className="border rounded-circle w-10" src={r?.img} alt="..." />
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