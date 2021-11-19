import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { reset, register, formState: { errors }, handleSubmit} = useForm();
    
    const onSubmit = data =>{
        console.log(data);
   fetch("https://fast-forest-95996.herokuapp.com/addProduct", {
       method: "POST",
       headers: { "content-type": "application/json" },
       body: JSON.stringify(data),
   })
     .then((res) => res.json())
     .then((result) => console.log(result));
     reset();
      
       };
    return (
        <div className="Add-Packages">
            <h1 className="text-center m-5">Add a Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",  { required: true, maxLength: 100 })} placeholder="Product Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("image")} placeholder="Image url" />
                <input type="number" {...register("price")} placeholder="Price"/>
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;