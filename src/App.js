import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Header from './Page/Shared/Header/Header';
import Home from './Page/Home/Home/Home';
import AddProduct from './Page/AddProduct/AddProduct';
import AllProducts from './Page/AllProducts/AllProducts';
import Footer from './Page/Shared/Footer/Footer';
import Login from './Page/Login/Login/Login';
import Purchase from './Page/Purchase/Purchase';
import MyOrder from './Page/MyOrder/MyOrder';
import ManageOrder from './Page/ManageOrder/ManageOrder';
import AddReview from './Page/AddReview/AddReview';
import Register from './Page/Login/Register/Register';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';
import NotFound from './Page/NotFound/NotFound';
import ManageProducts from './Page/ManageProducts/ManageProducts';
import Dashboard from './Page/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route path ="/home">
              <Home></Home>
            </Route>
            <Route path ="/login">
              <Login></Login>
            </Route>
            <Route path ="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path ="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route  path ="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute  path ="/purchase/:productID">
             <Purchase></Purchase>
            </PrivateRoute>
            {/* <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/myOrders">
              <MyOrder></MyOrder>
            </Route>
            <PrivateRoute path="/manageOrders">
             <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
             <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path="/addReview">
            <AddReview></AddReview>
            </Route> */}
            <Route path="*">
            <NotFound></NotFound>
            </Route>
            
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
