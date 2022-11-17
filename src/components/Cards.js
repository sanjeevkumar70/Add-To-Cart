
import React, { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import Card from "react-bootstrap/Card";
import './Style.css'
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/actions";
const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((udata) => {
        console.log(udata);
        setData(udata);
      });
  }, []);

  const dispatch =useDispatch();
  const send=(e)=>{
   dispatch(ADD(e));
  }

  return (
    <div className="container-fluid mt-3 ">
      <h2>Add product in cart</h2>
      <div className="row d-flex justify-content-center align-items-center mb-4">
      {data.map((e, id) => {
       return (
        <>
        <Card style={{ width: "22rem",border:"none" }} className="card-box m-3">
          <Card.Img variant="top" src={e.image} style={{height:"20rem"}} />
          <Card.Body>
            <Card.Title className="card_title">{e.title}</Card.Title>
            <Card.Text className="card_text">
             Price: ₹ {e.price}
            </Card.Text>
            <Button onClick={()=>send(e)} className="col-lg-12" variant="contained" color="secondary">Add To Cart</Button>
          </Card.Body>
        </Card>
        </>
       )
      })}

      </div>
    </div>
  );
};

export default Cards;
