import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {  handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contact py-5">
                <div className="container shadow p-3 mb-5 bg-body rounded  ">
                    <h2 className="text-center py-1 m-3">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3 p-5 ">
                        <div className="col-md-6">
                            <input type="text" placeholder="First Name..." className="form-control" id="fName"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="Last Name..." className="form-control" id="lName"/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" placeholder="Email..." className="form-control" id="email"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="Phone..." className="form-control" id="phone"/>
                        </div>
                        <div className="col-12">
                            <textarea className="w-100 p-2 form-control" style={{height:'100px'}} placeholder="Message...">

                            </textarea>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary  text-white" >Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Contact;