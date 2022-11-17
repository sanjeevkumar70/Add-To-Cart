
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Style.css'
const CardDetails = () => {

    const [data1,setData1]=useState([]);
const {id}=useParams();

const getData = useSelector((state) => state.cartReducer.carts);
console.log(getData);

const compare=()=>{
    let compareData=getData.filter((e)=>{
        return e.id==id
    })
    setData1(compareData);
}
useEffect(()=>{
    compare();
},[id])

  return (
    <>
        <div className="container">
            <h2 className="text-center">Items details Page</h2>
        </div>

        <div className="container mt-5">
        {
                data1.map((e)=>{
                    return (
                        <div className=" row my-4 product">
            
            <div className="col-md-3 g-0 row  product-img">
                <img src={e.image} alt="" />
            </div>
            <div className=" col-md-3 product-details">
               <p><span>Product Name:</span>{e.title} </p>
               <p><span>Price:</span> {e.price}</p>
               <p><span>Avaliable:</span>{e.rating.count} in Stock </p>
               <p><span>Total:</span> nhh </p>
            </div>
            <div className=" col-md-4 product-details">
               <p><span>Category:</span> {e.category} </p>
               <p><span>Rating :</span> {e.rating.rate} </p>
               <p><span>Remove:</span>   <i className="fas fa-trash text-danger"></i> </p>
              
            </div>
        </div>
                    )
                })
            }
           
        </div>
    </>
  )
}

export default CardDetails