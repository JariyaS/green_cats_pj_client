import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import React from "react";

function HeaderUser() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ width: "40vw", marginLeft: "20px" }}>
            {" "}
            <h1 style={{ margintop: "100px" }}>GREEN CATS</h1>
            <h4 style={{ margin: 0 }}>Spent Auto Catalytic Converter Buyer</h4>
          </div>
        </div>
        <div
          style={{
            width: "40vw",
            alignSelf: "end",
            textAlign: "right",
            marginRight: "10%",
          }}
        >
          <div style={{ display: "block", padding: 30 }}>
            <div>
              <Badge color="secondary" badgeContent={"0"}>
                <ShoppingCartIcon />
              </Badge>
              {/* <ButtonGroup>
            <Button onClick={handleClickAdd}>
              <RemoveIcon fontSize="small" />
            </Button>
            <Button onClick={handleClickAdd}>
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup> */}
            </div>
          </div>
          <Link to="/home" style={{ padding: "10px", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/catalogue-wp"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            Catalogue
          </Link>
          <Link to="/cart" style={{ padding: "10px", textDecoration: "none" }}>
            Cart
          </Link>
          <Link
            to="/contact"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            Contact
          </Link>
          <Link to="/" style={{ padding: "10px", textDecoration: "none" }}>
            <span onClick={() => logout()}>signout</span>
          </Link>
          <Link
            to="/quotation"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <span>submit</span>
          </Link>
        </div>
      </div>
      <hr width="100%;" color="blue" size="5"></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around ",
        }}
      ></div>
    </>
  );
}
export default HeaderUser;
