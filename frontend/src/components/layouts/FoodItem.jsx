import React from 'react'
import { useAlert } from 'react-alert';
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function FoodItem({fooditem}) {

    const alert = useAlert();
  return <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
    <div className='card p-3 rounded'>
        <img 
        src={fooditem.images[0].url}
            alt={fooditem.name} 
            className='card-img-top mx-auto' 
        />
        {/* Heading and Description */}
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title'>{fooditem.name}</h5>
            <p className='fooditem_des'>
                {fooditem.description}
            </p>
            <p className='card-text'>
                <LiaRupeeSignSolid />{fooditem.price}
                <br />
            </p>
            <button
                type='button'
                id='cart_btn'
                className='btn btn-primary d-inline ml-4'
                >
                    Add to Cart
                </button>
                <br />
                <p>
                    Status:{' '}
                    <span
                        id='stock_status'
                        className= {fooditem.stock ? "greenColor" : "redColor"}
                    >
                        {fooditem.stock ? "In Stock" : "Out of Stock"}
                    </span>
                </p>
        </div>
    </div>
  </div>
}
