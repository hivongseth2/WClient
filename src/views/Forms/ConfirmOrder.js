import React, { useEffect, useState } from "react";
import "../../styles/ConfirmOrder.scss";
const ConfirmOrder = ({
  cart,
  setIsConfirming,
  setPopupVisible,
  user,
  handleConfirm,
  total,
}) => {
  return (
    // ===================
    <div class="containerFormCheckOut">
      <div class="cardFormCheckOut cartFormCheckOut">
        <div class="titleFormCheckOut">
          <label>XÁC NHẬN ĐƠN HÀNG</label>
          <button
            className="closeBtn"
            onClick={() => {
              setPopupVisible(false);
            }}
          >
            X
          </button>
        </div>
        <div class="stepsFormCheckOut">
          <div class="stepFormCheckOut">
            <div>
              <span className="spanConFirmOrder">Tên khách hàng</span>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div>
              <span className="spanConFirmOrder">Địa chỉ giao hàng</span>
              <p>
                {user.street} {user.city}
              </p>
            </div>
            <div>
              <span className="spanConFirmOrder">Số điện thoại nhận hàng</span>
              <p>{user.phone}</p>
            </div>

            <div>
              <span className="spanConFirmOrder">Phương thức thanh toán</span>
              <p>Thanh toán khi nhận hàng</p>
            </div>
            {/* <hr /> */}

            <span className="spanConFirmOrder">Chi tiết đơn hàng</span>
            <div class="item">
              {cart.map((item) => (
                <div key={item.productId}>
                  <p>
                    <strong style={{ marginRight: "3em" }}>
                      {item.productName}
                    </strong>
                    Số lượng: <strong> {item.quantity}</strong>
                  </p>
                </div>
              ))}
            </div>

            <div class="paymentsFormCheckOut">
              <div class="details"></div>
            </div>
          </div>
        </div>
        <div class="cardFormCheckOut checkout">
          <div class="footer">
            <label class="titleFormCheckOut">
              Tổng số tiền cần thanh toán : {total.toFixed(2)} vnd
            </label>

            <button
              class="checkout-btn"
              onClick={() => {
                handleConfirm();
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
