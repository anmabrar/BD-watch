import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from '../../Hook/useAuth';

const Purchase = () => {
    const {user} = useAuth()
    const {productID} =useParams();
    const [watchProduct , setWatchProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/purchaseProduct/${productID}`)
        .then((res) => res.json())
        .then((data) => setWatchProduct(data));
      } , []);
    
      console.log(watchProduct);
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        data.email = user.email;
        data.status = "pending";
    
        fetch("http://localhost:5000/confirmOrder", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            alert('Are you Confirm Order ?');
          });
        console.log(data);
      };
    
    return (
        <div className= "container">
      <h1 className="text-center m-5">Purchase Form</h1>


  <div className="row">
    <div className="col-md-6">
      <div className="details-img">
        <img className="w-100" src={watchProduct?.image} alt="" />
      </div>
      <h2 className="mt-3">{watchProduct?.name}</h2>
      <p className="text-start">{watchProduct?.description}</p>
      <h1> price: {watchProduct?.price} Tk</h1>
    </div>
    <div className="col-md-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          defaultValue={watchProduct?.name}
          className="p-2 m-2 w-100"
        />
        <br />
        <input
          {...register("image")}
          defaultValue={watchProduct?.image}
          className="p-2 m-2 w-100"
        />
        <br />
        <input
          {...register("date")}
          // placeholder="Name"
          type="date"
          className="p-2 m-2 w-100"
        />
        <br />

        <input
          {...register("price", { required: true })}
          defaultValue={watchProduct?.price}
          className="p-2 m-2 w-100"
        />
        <br />
        <select {...register("productType")} className="p-2 m-2 w-100">
        <option value="classic">Economic</option>
          <option value="premium">premium</option>
          <option value="business">business</option>
        </select>
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          type="submit"
          value="Order Now"
          className="btn btn-info m-2 w-50"
        />
      </form>
    </div>
  </div>

    </div>
    );
};

export default Purchase;