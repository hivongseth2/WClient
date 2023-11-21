import React, { useEffect, useState } from "react";
import "../styles/OrderTracking.scss";

const OrderTracking = ({ orderStatus }) => {
  console.log('order tracking',orderStatus);

  return (
    <div className="container-xxl padding-bottom-3x mb-1">
      <div className="card mb-3">
        <div className="p-4 text-center text-white text-lg bg-dark rounded-top">
          <span className="text-uppercase">Thông tin vận chuyển</span>
          <span className="text-medium"></span>
        </div>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
          {/* <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Shipped Via:</span> UPS Ground
          </div> */}
          <div className="w-100 text-center py-1 px-2">
            {/* <span className="text-medium">Trạng thái: </span> */}
            <span
              className="text-large"
              style={{ color: "#053B50", fontWeight: "600" }}
            >
              {orderStatus}
            </span>
          </div>
          {/* <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Expected Date:</span> SEP 09, 2017
          </div> */}
        </div>
        <div className="card-body">
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <div
              className={`step ${orderStatus === "1" && "completed"}`}
            >
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-shopping-cart me-1"></i>
                </div>
              </div>
              <h4 className="step-title">Chờ xác nhận</h4>
            </div>

            <div
              className={`step ${
                orderStatus === "2" && "completed"
              }`}
            >
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
              </div>
              <h4 className="step-title">Xác nhận đơn hàng</h4>
            </div>

            <div
              className={`step ${
                orderStatus === "3" && "completed"
              }`}
            >
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fa fa-dolly"></i>{" "}
                </div>
              </div>
              <h4 className="step-title">Giao cho đơn vị vận chuyển</h4>
            </div>

            {/* <div
              className={`step ${
                orderStatus === "4" && "completed"
              }`}
            >
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-truck"></i>
                </div>
              </div>
              <h4 className="step-title">Đang vận chuyển</h4>
            </div> */}

            <div
              className={`step ${orderStatus === "4" && "completed"}`}
            >
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-check-double"></i>
                </div>
              </div>
              <h4 className="step-title">Hoàn thành</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
