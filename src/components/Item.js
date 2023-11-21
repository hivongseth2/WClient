import "../styles/Item.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import Filter from "./Filter";
import BtnCart from "./BtnCart";

const Item = (props) => {
  const [data, setData] = useState(props);
  const [img, setImg] = useState();

  const history = useHistory();
  // const url = "";
  // const fectImg = () => {
  //   fetch;
  // };

  // useEffect lấy ảnh all

  // =======================addd cart

  // const addCartItem = async () => {
  //   // console.log(data.children);
  //   const userData = JSON.parse(localStorage.getItem("data"));

  //   const form = {
  //     product: { id: data.children.id },
  //     shoppingCart: { id: userData.shoppingCart.id },
  //     quantity: 1,
  //   };
  //   console.log(form);
  //   if (userData && userData.token) {
  //     delete userData.token;
  //   }

  //   await axios
  //     .post(
  //       "http://localhost:8521/api/v1/shoppingCartDetails/saveOrUpdate",
  //       form
  //     )
  //     .then((response) => console.log(response));
  //   //console.log("user", userData);
  // };

  const addCartItem = async () => {
    const userData = JSON.parse(localStorage.getItem("data"));

    const form = {
      customerId: userData.personId,
      quantity: 1,

      productId: data.children.productId,
    };

    await axios.put("http://localhost:8081/cart/updateCartItem", form);
  };

  // =============
  useEffect(async () => {
    if (props) {
      {
        props && data.children.images.length > 0
          ? setImg(data.children.images[0].id)
          : setImg(
              "https://media.istockphoto.com/id/936182806/vi/vec-to/kh%C3%B4ng-c%C3%B3-d%E1%BA%A5u-hi%E1%BB%87u-h%C3%ACnh-%E1%BA%A3nh-kh%E1%BA%A3-d%E1%BB%A5ng.jpg?s=612x612&w=0&k=20&c=AqTYDe8XDlTT4HlkKmWrI57391QNOV0zZeC7u8TKYiE="
            );
      }
      setData(props);
    }
  }, [props]);

  const handleView = () => {
    const currentPath = window.location.pathname;
    const newPath = `/Shopping/${data.children.productId}`;

    if (currentPath.match(/\/Shopping\/SP\d{4}/)) {
      const updatedPath = currentPath.replace(/\/Shopping\/SP\d{4}/, newPath);
      window.location.href = `${window.location.origin}${updatedPath}`;
    } else {
      history.push(newPath);
    }
  };

  return (
    <>
      <div class="col hp">
        <div class="card h-100 shadow-sm">
          <a
            target="_blank"
            href={data.children ? data.children.productLink : "#"}
          >
            <img
              src={img}
              class="card-img-top"
              alt={data.children ? data.children.name : "Product Title"}
              onClick={() => handleView()}
            />
          </a>

          <div class="label-top shadow-sm">
            <a class="text-white" target="_blank" onClick={() => handleView()}>
              {data.children ? data.children.name : ""}
            </a>
          </div>
          <div class="card-body">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-primary">
                {" "}
                {data.children ? data.children.price : 0} <span>VND </span>
              </span>
            </div>
            <h5 class="card-title">
              <a target="_blank" href="#">
                {data.children ? data.children.name : ""}
              </a>
            </h5>

            <div class="d-grid gap-2 my-4">
              <button
                class="btn btn-primary bold-btn"
                onClick={() => addCartItem()}
              >
                add to cart
              </button>
            </div>
            <div class="clearfix mb-1">
              <span class="float-start">
                <a href="#">
                  <i class="fas fa-question-circle"></i>
                </a>
              </span>

              <span class="float-end">
                <i class="far fa-heart" style={{ cursor: "pointer" }}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
