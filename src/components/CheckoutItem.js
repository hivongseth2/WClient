import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/CheckoutItem.scss";
const CheckoutItem = (props) => {
  const [activeImg, setActiveImg] = useState();

  return (
    <tr key={props.index}>
      {console.log(props)}
      <th scope="row">{props.index}</th>
      <td>
        <b>{props.data.productName}</b>
        <p>{props.data.price} VND</p>
      </td>
      <td>
        {
          <img
            style={{ height: "100%" }}
            src={
              props.data.productImages.length > 0
                ? props.data.productImages[0]
                : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png"
            }
          ></img>
        }
      </td>
      <td>{props.data.quantity}</td>
      <td>{props.data.quantity * props.data.price}</td>
    </tr>
  );
};
export default CheckoutItem;
