import React, { Fragment, useEffect } from "react";
import Loader from "../layouts/Loader";
import { LiaRupeeSignSolid } from "react-icons/lia";

const OrderDetails = () => {
  return (
    <>
      {5 > 10 ? (
        <Loader />
      ) : (
        <>
          <div className="row d-flex justify-content-between orderdetails">
            <div className="col-12 col-lg-8 mt-1 order-details">
              <h1 className="my-5">Order # 123</h1>

              <h4 className="mb-4">Delivery Info</h4>
              <p>
                <b>Name:</b> WSA Developer
              </p>
              <p>
                <b>Phone:</b> 9874563210
              </p>
              <p className="mb-4">
                <b>Address:</b>
                abd house, def street, city, state - 987456
              </p>
              <p>
                <b>Amount:</b> <LiaRupeeSignSolid /> 170
              </p>

              <hr />

              <h4 className="my-4">
                Payment :
                <span className={5 < 10 ? "greenColor" : "redColor"}>
                  <b>{5 < 10 ? " PAID" : " NOT PAID"}</b>
                </span>
              </h4>
              <h4 className="my-4">
                Order Status :
                <span className={5 > 10 ? "greenColor" : "redColor"}>
                  <b>On the Way!!</b>
                </span>
              </h4>
              <h4 className="my-4">Order Items:</h4>

              <hr />
              {/* <div className="cart-item my-1">
                {5 < 10 &&
                  orderItems.map((item) => (
                    <div key={item.fooditem} className="row my-5">
                      <div className="col-4 col-lg-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          height="45"
                          width="65"
                        />
                      </div>

                      <div className="col-5 col-lg-5">
                        <Link to={`/products/${item.product}`}>
                          {item.name}
                        </Link>
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p>
                          <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
                          {item.price}
                        </p>
                      </div>

                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <p>{item.quantity} Item(s)</p>
                      </div>
                    </div>
                  ))}
              </div> */}
              <hr />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetails;
