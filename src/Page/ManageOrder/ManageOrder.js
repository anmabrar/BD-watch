import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {

    const [manageOrder, setManageOrder] = useState([]);
    const [status, setStatus] = useState("");
    const [control, setControl] = useState(false);

    const handleStatus = (e) => {
        setStatus(e.target.value);
      };
      console.log(setStatus);
      useEffect(() => {
        fetch("http://localhost:5000/manageOrders")
          .then((res) => res.json())
          .then((data) => setManageOrder(data));
      }, [control]);
    
        // const status = "approved";
      const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ status }),
        });
      };

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
        <div className="container">
      <h1 className="text-center m-5">All manage Order : {manageOrder.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Tour Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {manageOrder?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.date}</td>
              <td>{pd.price}</td>
              <td>
              <select onClick={handleStatus} >
        <option  value={pd.status}>{pd.status}</option>
          <option value="Approve">Approve</option>
        </select>
              </td>
              <button onClick={() => handleDelete(pd?._id)} className="btn bg-danger p-2">Delete</button>
              <button
                onClick={() => handleUpdate(pd._id)}
                className="btn bg-success p-2"
              >
                Update
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    );
};

export default ManageOrder;