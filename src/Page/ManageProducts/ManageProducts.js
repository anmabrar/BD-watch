import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [product, setProduct] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("https://fast-forest-95996.herokuapp.com/manageProducts")
          .then((res) => res.json())
          .then((data) => setProduct(data));
      }, [control]);

      const handleDelete = (id) => {
        fetch(`https://fast-forest-95996.herokuapp.com/deleteProduct/${id}`, {
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
        <div className="container">
      <h1 className="text-center p-3">Manage products</h1>
      <div className="row ">
        {product?.map((p) => (
          <div className="col-md-4 p-1">
            <div className=" border border p-3">
              <div className="">
                <img className="w-100" src={p?.image} alt="" />
              </div>

              <h5 className="mt-3" >{p?.name}</h5>
              <h4 className="text-danger">Price : {p?.price} Tk</h4>
              <button
                  onClick={() => handleDelete(p?._id)}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ManageProducts;