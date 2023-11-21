import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Order.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OrderDetail from "./OrderDetail";
import { toast } from "react-toastify";
const ListOrder = () => {
  const [listOrder, setListOrder] = useState([]);
  const [user, setUser] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("data"));
    setUser(temp);
    console.log(temp);
  }, []);

  const cancelOrder = (order) => {
    if (order.status === "1") {
      fetch(`http://localhost:8081/order/updateStatus/${order.orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: "0",
      }).then((res) => {
        console.log(res.data);
        //   history.push("/Personal");
        toast.success("Bạn đã hủy đơn hàng thành công");
      })
        .catch((error) => {
          toast.error("Có lỗi xảy ra vui lòng thử lại sau!");
          console.log(error);
        });
    }
    else {
      toast.error("Đơn hàng đã được xử lý không thể hủy!");
    }
  };

  const handleViewOrderDetail = (order) => {
    history.push(`/OrderDetail/${order.orderId}`, { orderData: order });
  };
  const handleShowOrderDetail = (order) => {
    setShowOrderDetail(true);
    setSelectedOrder(order);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:8081/order/getOrdersByCustomerId?customerId=${user.personId}`)
        .then((res) => {
          setListOrder(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);
  function calculateTotal(order) {
    return order.orderDetails.reduce((total, orderDetail) => {
      const productTotal = orderDetail.quantity * orderDetail.price;
      return total + productTotal;
    }, 0);
  }

  return (
    <div className="container-xxl ">
      {listOrder.map((order) => (
        <div key={order.id} className="order-item">
          <div className="headerOrder">
            <div className="h-container">
              <span style={{ marginLeft: "2em", color: "#9DB2BF" }}>
                Ngày tạo đơn:{" "}
                <span style={{ color: "#9DB2BF" }}>
                  {new Date(order.orderDate).toLocaleDateString()}
                </span>
              </span>
              <span style={{ color: "#9DB2BF" }}>
                Trạng thái: null
              </span>
            </div>
            <div className="h-container">
              <span style={{ color: "#DDE6ED", marginLeft: "2em" }}>
                {" "}
                {order.orderId}
              </span>
              <span style={{ color: "#9DB2BF" }}>Thanh toán khi nhận hàng</span>
            </div>
          </div>
          {order.orderDetails.map((orderDetail) => (
            <div className="orderItemContainer">
              <span className="h-container" style={{ color: "#176B87" }}>
                {orderDetail.productName}
                <span style={{ marginInline: "1em" }}>
                  x{orderDetail.quantity}
                </span>
              </span>
              <div className="h-container orderDetails">
                <img
                  src={
                    orderDetail.productImages.length > 0
                      ? orderDetail.productImages[0]
                      : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png"
                  }
                  alt="Product"
                />
                <span className="totalOrder" style={{ color: "#176B87" }}>
                  {orderDetail.quantity * orderDetail.price} VND
                </span>
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
              <button
                className="btn btn-danger"
                onClick={() => cancelOrder(order)}
              >
                {order.status === "0" ? 'Đã hủy' : 'Hủy đơn hàng'}
              </button>

              {/* <button className="btn btn-danger">Hủy đơn hàng</button> */}
              <button
                className="btn btn-light mx-2"
                onClick={() => {
                  //   handleShowOrderDetail(order);
                  handleViewOrderDetail(order);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      ))}
      {showOrderDetail && selectedOrder && (
        <OrderDetail
          order={selectedOrder}
          setShowOrderDetail={setShowOrderDetail}
        />
      )}
    </div>
  );
};

export default ListOrder;
