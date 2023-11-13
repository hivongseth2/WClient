import { useState } from "react";
import "../styles/BtnCart.scss";
import { useEffect } from "react";
const BtnCart = (props) => {
  const [CartItem, setCartItem] = useState();
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const accessToken = localStorage.getItem("token");

  const addCart = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/cart-item/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        productId: props.data.id,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <button
      className="btn btn-primary col-12"
      onClick={(event) => addCart(event)}
    >
      Cart
    </button>
  );
};
export default BtnCart;
