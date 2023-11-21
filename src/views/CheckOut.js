import { withRouter, useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
// import ConfirmationForm from "./ConfirmationForm";
import ConfirmOrder from "./Forms/ConfirmOrder";
import CheckoutItem from "../components/CheckoutItem";
// import Address from "../components/Address";
import FormCheckOut from "./Forms/FormCheckOut";
const CheckOut = (props) => {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState();
  const [CartId, setCartId] = useState([]);
  const accessToken = localStorage.getItem("token");
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  // lấy thông tin user
  useEffect(() => {
    const UserData = JSON.parse(localStorage.getItem("data"));

    setUser(UserData);
  }, []);
  useEffect(() => {
    setCart(props.location.state.listCheckout);
  }, [CartId]);

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(
        cart.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0)
      );
    }
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      setQuantity(
        cart.reduce((total, item) => {
          return total + item.quantity;
        }, 0)
      );
    }
  }, [cart]);

  // =========tạo order
  const handleConfirm = async () => {
    console.log("user nè ", user);
    // Prepare the order details as specified
    const orderData = {
      customerId: user.personId,
      orderDate: new Date(),
      orderId: Math.random(),
      shipDate: null,
      status: 1,
      address: `${user.street}, ${user.city}`,
      orderDetails: cart.reduce((details, item) => {
        details[item.productId] = item.quantity;
        return details;
      }, {}),
    };

    const res = await axios
      .post("http://localhost:8081/order/add", orderData)
      .then((res) => {
        console.log("đơn hàng đã được tạo:", res.data);
        toast.success(`bạn đã tạo đơn hàng thành công`);
        history.push("/SuccessOrder");
      })
      .catch((error) => {
        // Xử lý khi có lỗi xảy ra
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
        console.log(error);
      });
  };

  // ====

  return (
    <div className="container-lg mt-1 bg-white rounded">
      <div className="row">
        {cart.length > 0 ? (
          <div className="col-12">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <h4 className="mb-3">Tiến hành thanh toán</h4>
                <a href="home">Thay đổi thông tin</a>
                <form className="needs-validation" noValidate>
                  <FormCheckOut note={note} setNote={setNote} />
                </form>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="shadow bg-white rounded">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.length > 0 &&
                        cart.map((item, index) => {
                          return item.quantity !== 0 ? (
                            <CheckoutItem data={item} index={index} />
                          ) : null;
                        })}

                      <tr className="sum">
                        <th scope="total">Thành tiền</th>
                        <td></td>
                        <td></td>
                        <td>{quantity}</td>
                        <th>{total}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <button
                className="w-100 btn btn-danger btn-lg"
                type="submit"
                onClick={() => setPopupVisible(true)} // Show the popup
              >
                Continue to checkout
              </button>
            </div>
            {popupVisible && (
              <ConfirmOrder
                cart={cart}
                // isConfirming={isConfirming}
                handleConfirm={handleConfirm}
                setIsConfirming={setIsConfirming}
                setPopupVisible={setPopupVisible}
                user={user}
                total={total}
              />
            )}
          </div>
        ) : (
          <div className="col-12">Bạn chưa chọn sản phẩm nào</div>
        )}
      </div>
    </div>
  );
};
export default CheckOut;
