import React from "react";

const SuccessOrder = () => {
  const cardStyle = {
    background: "white",
    padding: "60px",
    borderRadius: "4px",
    boxShadow: "0 2px 3px #C8D0D8",
    display: "inline-block",
    with: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    textAlign: "center",
    margin: "0 auto",
  };

  const iconStyle = {
    color: "#9ABC66",
    fontSize: "100px",
    lineHeight: "200px",
    marginLeft: "-15px",
  };

  return (
    <div style={cardStyle}>
      <div
        style={{
          borderRadius: "200px",
          height: "200px",
          width: "200px",
          background: "#F8FAF5",
          margin: "0 auto",
        }}
      >
        <i className="checkmark" style={iconStyle}>
          ✓
        </i>
      </div>
      <h1
        style={{
          color: "#88B04B",
          fontFamily: "Nunito Sans",
          fontWeight: 900,
          fontSize: "40px",
          marginBottom: "10px",
        }}
      >
        Success
      </h1>
      <p
        style={{
          color: "#404F5E",
          fontFamily: "Nunito Sans",
          fontSize: "20px",
          margin: "0",
        }}
      >
        Chúng tôi đã nhận được đơn đặt hàng của bạn! Chúng tôi đang tiến hành
        gửi hàng cho bạn ! <br />
        Cảm ơn bạn đã mua hàng tại shop !
      </p>
      <hr />
      <a href="/" style={{ textDecoration: "none" }}>
        {" "}
        Tiếp tục mua sắm
      </a>
    </div>
  );
};

export default SuccessOrder;
