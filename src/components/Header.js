import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import "./Style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add To Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div className="card_details1">
              <table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Prduct details</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`cart/${e.id}`}>
                            <img
                              src={e.image}
                              style={{ width: "6rem", height: "7rem" }}
                              className="me-4"
                            />
                            </NavLink>
                          </td>
                          <td>
                            <p>Title: {e.title}</p>
                            <p>Price: ₹ {e.price}</p>
                            <p>Quantity: ₹ {e.price}</p>
                          </td>
                          <td> 
                        <p><i className="fas fa-trash text-danger" style={{ cursor: "pointer", fontSize: "20px", paddingLeft:"12px" }}  ></i>  </p>
                       
                         </td>
                        
                        </tr>
                        <hr />
                      </>
                    );
                  })}
                  <h6>Total:</h6>
                </tbody>
              </table>
             
            </div>
          ) : (
            <div className="card_details2">
              <i className="fas fa-close cross-icon" onClick={handleClose}></i>{" "}
              <br />
              <p>Your cart is empty</p>
              <img
                className="cart-image"
                src="https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
