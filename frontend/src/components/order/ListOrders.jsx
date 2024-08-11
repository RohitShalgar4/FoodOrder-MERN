import React from "react";
// import { MDBDataTable } from "mdbreact";
import { FaRegEye } from "react-icons/fa6";
import Loader from "../layouts/Loader";

const ListOrders = () => {
  return (
    <>
      <div className="cartt">
        <h1 className="my-5">My Orders</h1>

        {5 > 10 ? (
          <Loader />
        ) : (
          // <MDBDataTable data="" className="px-3" bordered striped hover />
          <p>Your Order Details</p>
        )}
      </div>
    </>
  );
};

export default ListOrders;
