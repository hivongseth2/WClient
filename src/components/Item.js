import "../styles/Item.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import "../styles/Butoon30.scss";

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
    console.log(form);

    await axios.put("http://localhost:8081/cart/updateCartItem", form);
  };

  // =============
  useEffect(async () => {
    if (props) {
      {
        props && data.children.images.length > 0
          ? setImg(data.children.images[0].id)
          : setImg(
              "https://media.istockphoto.com/id/936182806/vi/vec-to/kh%C3%B4ng-c%C3%B3-d%E1%BA%A5u-hi%E1%BB%87u-h%C3%ACnh-%E1%BA%A3nh-kh%E1%BA%A3-d%E1%BB%A5ng.jp...u8TKYiE="
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
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-6 col-xl-12">
          <div class="card text-black">
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

            <div class="card-body body-card">
              <div class="text-center">
                <p
                  class="text-muted mb-2 hightlight"
                  target="_blank"
                  onClick={() => handleView()}
                >
                  {data.children ? data.children.name : ""}
                </p>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span className="hightlight">Giá</span>
                  <span>$ {data.children ? data.children.price : 0}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span className="hightlight">Nhà sản xuất</span>
                  <span>{data.children ? data.children.brandName : 0}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span className="hightlight">Loại máy ảnh</span>
                  <span>{data.children ? data.children.categoryName : 0}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span className="hightlight">Ngày phát hành</span>
                  <span>
                    {data.children
                      ? new Date(
                          data.children.yearOfManual
                        ).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
              </div>

              <div class="d-flex justify-content-center total font-weight-bold mt-2">
                <div class="d-grid gap-2 my-4">
                  {/* <button
                    class="btn button-custom bold-btn"
                    onClick={() => addCartItem()}
                  >
                    add to cart
                  </button> */}
                  {/* <button class="btn">
                    <svg
                      height="24"
                      width="24"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      data-name="Layer 1"
                      id="Layer_1"
                      class="sparkle"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>

                    <span class="text">Cart</span>
                  </button> */}
                  <button onClick={() => addCartItem()}>
                    <div class="default-btn">
                      <svg
                        class="css-i6dzq1"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        fill="none"
                        stroke-width="2"
                        stroke="#FFF"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle r="3" cy="12" cx="12"></circle>
                      </svg>
                      <span>Quick View</span>
                    </div>
                    <div class="hover-btn">
                      <svg
                        class="css-i6dzq1"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        fill="none"
                        stroke-width="2"
                        stroke="#ffd300"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                      >
                        <circle r="1" cy="21" cx="9"></circle>
                        <circle r="1" cy="21" cx="20"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      <span>Shop Now</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
