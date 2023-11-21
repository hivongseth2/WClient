import { useEffect } from "react";
import "../styles/OrderDetail.scss";
import OrderTracking from "./OrderTracking";
import { useLocation } from "react-router-dom";
import "../styles/Butoon30.scss"
const OrderDetail = ({}) => {
  function calculateTotal(order) {
    return order.orderDetails.reduce((total, orderDetail) => {
      const productTotal = orderDetail.quantity * orderDetail.price;
      return total + productTotal;
    }, 0);
  }

  const location = useLocation();
  const order = location.state.orderData;
  useEffect(() => {
    console.log(order);
    console.log(order.status);
  }, []);
  console.log(order);
  function getStatusText(orderId) {
    switch (orderId) {
      case "1":
        return "Đang xử lý";
      case "2":
        return "Đang được vận chuyển";
      default:
        return "Trạng thái không xác định";
    }
  }


  return (
    <div className="container-xxl DetailContainer">
      <div className="h-container" style={{ justifyContent: "space-around" }}>
        <div style={{ fontSize: "25px" }}>CHI TIẾT ĐƠN HÀNG {order.orderId}</div>
      </div>
      {/* ===============================khách hàng =============================== */}
      <div
        className="h-container"
        style={{
          justifyContent: "space-around",
          //   borderBottom: "1px solid #ccc",
          textDecoration: "underline",
        }}
      >
        Thông tin khách hàng
      </div>

      <div className="h-container">
        <div> Mã khách hàng : {order.customerId}</div>
        <div>
          Họ tên : {order.firstName} {order.lastName}
        </div>
      </div>
      <div className="h-container">
        <div>Địa chỉ nhận hàng : {order.address}</div>
        <div> Số điện thoại : {order.customerPhoneNumber}</div>
      </div>

      {/* ==================NHÂN VIÊN=================================== */}
      <hr />

      <OrderTracking orderStatus={order.status} />

      {/* ===============================ĐƠN HÀNG =============================== */}
      <div key={order.orderId} className="order-item">
        <div className="headerOrder">
          <div className="h-container">
            <span style={{ marginLeft: "2em", color: "#fff" }}>
              Ngày tạo đơn:{" "}
              <span style={{ color: "#fff" }}>
                {new Date(order.orderDate).toLocaleDateString()}
              </span>
            </span>
            <span style={{ color: "#fff" }}>
            Trạng thái: {getStatusText(order.status)}
            </span>
          </div>
          <div className="h-container">
            <span style={{ color: "#fff", marginLeft: "2em" }}>
              Mã đơn hàng
              {" "}
              {order.orderId}
            </span>
            <span style={{ color: "#fff" }}>Thanh toán khi nhận hàng</span>
          </div>
        </div>
        {order.orderDetails.map((orderDetail) => (
                <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">Sản phẩm {orderDetail.productName}</h5>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                      <h6 class="font-weight-bold my-2">Giá {orderDetail.quantity * orderDetail.price} $</h6>
                      <ul class="list-inline small">
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div className="h-container orderDetails">
                    <img
                      src={
                        orderDetail.productImages.length > 0
                          ? orderDetail.productImages[0]
                          : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png"
                      }
                      alt="Product"
                    />
                  </div>
                </div>
              ))}
        <div className="footerOrder">
          <div
            className="h-container mx-4"
            style={{ justifyContent: "right", color: "#E74646" }}
          >
            Tổng tiền: {calculateTotal(order).toFixed(2)} VND
          </div>
          <div
            className="h-container px-2"
            style={{ justifyContent: "right", paddingBottom: "1em" }}
          >
            {/* <button onClick={() => cancelOrder(order.id)}>Hủy đơn hàng</button> */}
            <button className="button-30-red">{order.status === "0" ? 'Đã hủy' : 'Hủy đơn hàng'}</button>
          </div>
        </div>
      </div>

      {/* =====ORDER TRACKING */}
    </div>
  );
};
export default OrderDetail;
