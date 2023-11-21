import "../styles/Item.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import "../styles/Butoon30.scss"

import Filter from "./Filter";
import BtnCart from "./BtnCart";

const Item = (props) => {
  const [data, setData] = useState(props);
  const [img, setImg] = useState();
  console.log(data.children.images[0]);
  console.log(data.children.productId);

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
    console.log("cục này là data", data);

    console.log("userDTA DÒNG 50 NÈ ", userData);
    const form = {
      customerId: userData.personId,
      quantity: 1,

      productId: data.children.productId,
    };

    // Fetch existing shopping cart data

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
        <div class="col-md-9 col-lg-6 col-xl-10">
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

            <div class="card-body">
              <div class="text-center">
                <p class="text-muted mb-2" target="_blank" onClick={() => handleView()}>{data.children ? data.children.name : ""}</p>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Giá</span><span>${" "}
                    {data.children ? data.children.price : 0}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Nhà sản xuất</span><span>{data.children ? data.children.brandName : 0}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Loại máy ảnh</span><span>{data.children ? data.children.categoryName : 0}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Ngày phát hành</span>
                  <span>{data.children ? new Date(data.children.yearOfManual).toLocaleDateString() : 'N/A'}</span>

                </div>
              </div>
              <div class="d-flex justify-content-center total font-weight-bold mt-2">
                <div class="d-grid gap-2 my-4">
                  <button
                    class="btn button-custom bold-btn"
                    onClick={() => addCartItem()}
                  >
                    add to cart
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
