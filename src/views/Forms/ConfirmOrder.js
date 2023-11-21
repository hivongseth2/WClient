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
      <div class="plan">
        <div class="inner">
          <span
            class="pricing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "14px", // Điều chỉnh kích thước chữ
            }}
          >
            <span style={{ color: "red" }}>
              {total.toFixed(2)} vnd/
              {cart.map((item) => (
                <div
                  key={item.productId}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginBottom: "0.5em",
                    marginRight: "1em",
                  }}
                >
                  <p
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      marginBottom: "0.5em",
                      marginRight: "0.5em",
                      fontSize: "14px",
                      color: "red", // Điều chỉnh kích thước chữ
                    }}
                  >
                    <strong style={{ color: "red" }}>
                      {" "}
                      {item.quantity} sản phẩm
                    </strong>{" "}
                    {/* Ngắn gọn hơn */}
                  </p>
                </div>
              ))}
            </span>
          </span>

          <p class="title">Hóa đơn của bạn</p>
          <p class="info" style={{ fontStyle: "italic" }}>
            Chúc bạn có một trải nghiệm tuyệt vời với sản phẩm của chúng tôi!
          </p>
          <ul class="features">
            <li>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "1em", verticalAlign: "middle" }}>
                  <span className="spanConFirmOrder">
                    <strong>Tên khách hàng:</strong>
                  </span>
                </div>
                <div style={{ verticalAlign: "middle" }}>
                  <p style={{ margin: 0 }}>
                    {user.firstName} {user.lastName}
                  </p>
                </div>
              </span>
            </li>

            <li>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "1em", verticalAlign: "middle" }}>
                  <span className="spanConFirmOrder">
                    <strong>Địa chỉ giao hàng:</strong>
                  </span>
                </div>
                <div style={{ verticalAlign: "middle" }}>
                  <p style={{ margin: 0 }}>
                    {user.street} {user.city}
                  </p>
                </div>
              </span>
            </li>
            <li>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "1em", verticalAlign: "middle" }}>
                  <span className="spanConFirmOrder">
                    <strong>Số điện thoại :</strong>
                  </span>
                </div>
                <div style={{ verticalAlign: "middle" }}>
                  <p style={{ margin: 0 }}>{user.phone}</p>
                </div>
              </span>
            </li>

            <li>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "1em", verticalAlign: "middle" }}>
                  <span className="spanConFirmOrder">
                    <strong>Phương thức thanh toán:</strong>
                  </span>
                </div>
                <div style={{ verticalAlign: "middle" }}>
                  <p style={{ margin: 0 }}>Thanh toán khi nhận hàng nha!!!</p>
                </div>
              </span>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <span class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  className="spanConFirmOrder"
                  style={{ marginRight: "1em" }}
                >
                  <strong>Chi tiết đơn hàng:</strong>
                </span>
                <div
                  className="item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {cart.map((item) => (
                    <div
                      key={item.productId}
                      style={{ marginRight: "1em", marginTop: 10 }}
                    >
                      <p style={{ marginBottom: "0.5em" }}>
                        {item.productName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div
            class="action"
            onClick={() => {
              handleConfirm();
            }}
          >
            <a class="button" href="#">
              Xác nhận
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
