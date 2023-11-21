// Cart.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CartItem from "../components/CartItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Cart = () => {
  const accessToken = localStorage.getItem("token");
  const [dataUser, setDataUser] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const datatemp = localStorage.getItem("data");
  const [CartId, setCartId] = useState();
  const history = useHistory();
  // state để theo dõi trạng thái đã chọn của từng sản phẩm
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedItemCount, setSelectedItemCount] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(
        cart.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0)
      );
    }
  }, [cart]);

  // useEffect(() => {
  //   if (datatemp) {
  //     const parsedData = JSON.parse(datatemp);
  //     setDataUser(parsedData);

  //     console.log(datatemp + "user");
  //     if (parsedData && parsedData.shoppingCart && parsedData.shoppingCart.id) {
  //       setCartId(parsedData.shoppingCart.id);
  //     }
  //   }
  // }, [datatemp]);

  useEffect(() => {
    fetchData();
  }, []);

  const updateCart = async () => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      setQuantity(
        cart.reduce((total, item) => {
          return total + item.quantity;
        }, 0)
      );
    }
  }, [cart]);

  const fetchData = async () => {
    const user = JSON.parse(datatemp);
    try {
      const response = await fetch(
        `http://localhost:8081/cart/getCartItems?customerId=${user.personId}`
      );

      if (response.ok) {
        const data = await response.json();

        setCart(data);
      } else {
        console.log("errrrrrrrrrrrrrrrr");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectItem = (itemId, isSelected) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemId]: isSelected,
    }));
  };

  useEffect(() => {
    if (selectedItems) {
      const count = Object.values(selectedItems).filter(
        (isSelected) => isSelected
      ).length;
      setSelectedItemCount(count);

      // Tính tổng tiền dựa trên selectedItems và cập nhật quantity
      const { updatedTotal, updatedQuantity } = cart.reduce(
        (acc, item) => {
          if (selectedItems[item.cartDetailId]) {
            acc.updatedTotal += item.quantity * item.price;
            acc.updatedQuantity += item.quantity;
          }
          return acc;
        },
        { updatedTotal: 0, updatedQuantity: 0 }
      );

      setTotal(updatedTotal);
      setQuantity(updatedQuantity);
    }
  }, [selectedItems, cart]);

  useEffect(() => {
    if (selectedItems) {
      const count = Object.values(selectedItems).filter(
        (isSelected) => isSelected
      ).length;
      setSelectedItemCount(count);
    }
  }, [selectedItems]);

  const handleCheckOut = () => {
    const listCheckout = cart
      .filter((item) => selectedItems[item.cartDetailId])
      .map((item) => item);

    history.push("/Checkout", { listCheckout });
  };

  return (
    <section
      className="h-100 gradient-custom mt-12"
      style={{ backgroundColor: "white", marginTop: "30px" }}
    >
      <div className="container-xxl py-12 mt-12">
        <div className="row container-fluid">
          <div className="col-md-12">
            <div
              className="card mb-12 item"
              // style={{ width: "45em", maxWidth: "50em" }}
            >
              <div className="card-header" style={{ backgroundColor: '#4eaf9b' }}>
                <h3 className="mb-0"> {cart.length} mặt hàng</h3>
              </div>

              <div className="card-body" style={{ backgroundColor: "white" }}>
                {datatemp ? (
                  cart.map((item, index) => {
                    {
                      console.log(item.productId);
                    }
                    return item.quantity !== 0 ? (
                      <CartItem
                        item={item}
                        key={index}
                        token={accessToken}
                        setCart={setCart}
                        updateCart={updateCart}
                        selected={selectedItems[item.cartDetailId] || false}
                        onSelect={() =>
                          handleSelectItem(
                            item.cartDetailId,
                            !selectedItems[item.cartDetailId]
                          )
                        }
                      />
                    ) : null;
                  })
                ) : (
                  <div>Bạn chưa đăng nhập</div>
                )}

                <div className="card-header py-3">
                  {/* Tổng kết{" "} */}
                  <h2 className="list-group-item d-flex justify-content-between align-items-center ">
                    {selectedItemCount} mặt hàng đã chọn
                  </h2>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                      Tổng tiền
                      <span>{`${total.toFixed(2)} VND`}</span>
                      <span className="list-group-item d-flex justify-content-between align-items-center ">
                        {quantity}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      {/* Shipping */}
                      <span></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 ">
                      <div>
                        <strong>Tổng số tiền</strong>
                        <strong>
                          <p className="mb-0">(Đã bao gồm VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{`${total.toFixed(2)} VND`}</strong>
                      </span>
                    </li>
                    <strong>Thời gian giao hàng dự kiến</strong>
                    <p className="mb-5">3 ngày từ khi đặt hàng thành công</p>
                  </ul>

                  <button
                    type="button "
                    className="btn btn-primary btn-lg  btn-block"
                    onClick={() => handleCheckOut()}
                  >
                    Tiến hành thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================= Total */}

      {/* </div> */}
    </section>
  );
};

export default Cart;
