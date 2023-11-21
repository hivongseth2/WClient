import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Order.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OrderDetail from "./OrderDetail";
import "../styles/Butoon30.scss"
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
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container-xxl ">
      {listOrder.map((order) => (
        <div key={order.id} className="order-item">
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
                {" "}
                Mã đơn hàng {order.orderId}
              </span>
              <span style={{ color: "#fff" }}>Thanh toán khi nhận hàng</span>
            </div>
          </div>

          {showDetails && (
            <div>
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
            </div>
          )}
          <div className="footerOrder">
            <div
              className="h-container"
              style={{ justifyContent: "right", color: "#E74646" }}
            >
              Tổng tiền: {calculateTotal(order).toFixed(2)} VND
            </div>
            <div
              className="h-container px-2"
              style={{ justifyContent: "right", paddingBottom: "1em" }}
            >
              {order.orderDetails.length > 1 && (
                <button
                  type="button"
                  className="button-30"
                  onClick={toggleDetails}
                >
                  {showDetails ? "Ẩn chi tiết" : "Xem thêm"}
                </button>
              )}
              <button
                className="button-30"
                onClick={() => cancelOrder(order)}
              >
                {order.status === "0" ? 'Đã hủy' : 'Hủy đơn hàng'}
              </button>

              {/* <button className="btn btn-danger">Hủy đơn hàng</button> */}
              <button
                className="button-30"
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
