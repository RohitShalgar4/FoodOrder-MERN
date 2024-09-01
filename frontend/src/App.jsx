import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Search from "./components/layouts/Search";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import store from "./store";
import { useEffect } from "react";
import { loadUser } from "./actions/userAction";
import Profile from "./components/users/Profile";
import UpdateProfile from "./components/users/UpdateProfile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCartItem } from "./actions/cartAction";



export default function App() {

  //dispatch exactly once when te component is first rendered, and check whether user is aythenticated or not
  console.log(store);
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);

  // const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);

  // if (user) {
  //   dispatch(fetchCartItem());
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:id/menus"
            element={<Menu />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/forgotPassword" element={<ForgotPassword />} />
            <Route path="/users/resetPassword/:token" element={<NewPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/eats/orders/me/myOrders" element={<ListOrders />} />
            <Route path="/eats/orders/:id" element={<OrderDetails />} />
            <Route path="*" element={
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh'
              }}>
                <h1>This page is doesnot exist</h1>
              </div>} 
            />
          </Routes>
        </div>
      <Footer />
      </div>
    </BrowserRouter> 
  );
}
