import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';

const MyOrder = () => {
    const {user} = useAuth()
    const [order, setOrder] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data));
      }, [control]);
     
      const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert('Deleted Successfully');
              setControl(!control);
            }
          });
        
      };
      
    return (
        <div className ="container">
      <h1 className="text-center m-5">My orders </h1>

      <div className="order">
        <div className="row ">
          {order?.map((pd) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="order-img ">
                  <img className="w-100" src={pd?.image} alt="" />
                </div>

                <h5 className="mt-3">{pd?.name}</h5>
                <h3 className="text-danger">Price: {pd?.price} Tk</h3>

                <button
                  onClick={() => handleDelete(pd?._id)}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default MyOrder;