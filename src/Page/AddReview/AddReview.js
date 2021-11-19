import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import './AddReview.css'

const AddReview = () => {
    const { user} = useAuth();
    const { reset, register, formState: { errors }, handleSubmit} = useForm();
    
    const onSubmit = data =>{
        data.img = user.photoURL;
    fetch("https://fast-forest-95996.herokuapp.com/addReview", {
       method: "POST",
       headers: { "content-type": "application/json" },
       body: JSON.stringify(data),
       
   })
     .then((res) => res.json())
     .then((result) => console.log(result));
     reset();
     console.log(data);
       };
    return (
        <div className="Add-Review">
            <h1 className="text-center m-5">Add a Product Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("user")} defaultValue={user?.displayName} />
                <input {...register("email")} defaultValue={user?.email} />
                <textarea {...register("review")} placeholder="write your review" />
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;