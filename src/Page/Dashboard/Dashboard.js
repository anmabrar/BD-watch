import React, { useEffect, useState } from "react";
import './Dashboard.css'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import AddProduct from "../AddProduct/AddProduct";
import MyOrder from "../MyOrder/MyOrder";
import AddReview from "../AddReview/AddReview";
import Payment from "../Payment/Payment"
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../Hook/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
   const {admin} = useAuth()
 
    return (
        <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-2 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}/payment`}>
                <li className="dashboard-menu mt-5">Payment</li>
              </Link>
              <Link to={`${url}/myOrder`}>
                <li className="dashboard-menu mt-">My Order</li>
              </Link>

              <Link to={`${url}/addReview`}>
                <li className="dashboard-menu mt-">Add Review</li>
              </Link>

              {admin && ( 

              <div className="admin-dashboard">
               
                  <Link to={`${url}/manageOrder`}>
                    <li className="dashboard-menu">Manage Orders</li>
                  </Link>
                  <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add Product</li>
                  </Link>
                <Link to={`${url}/manageProducts`}>
                  <li className="dashboard-menu">Manage Product</li>
                </Link>
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
              </div>  )}
            </div>
           
          </div>
          <div className="col-md-10">
            <Switch>
              <Route exact path={path}>
              </Route>
              <Route exact path={`${path}/payment`}>
              <Payment></Payment>
              </Route>
              <Route exact path={`${path}/myOrder`}>
              <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/addReview`}>
                <AddReview></AddReview>
              </Route>
              
              <AdminRoute exact path={`${path}/manageOrder`}>
              </AdminRoute>
              <AdminRoute exact path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageProducts`}>
              </AdminRoute>
              <AdminRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;