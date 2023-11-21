import "bootstrap/dist/css/bootstrap.min.css";
import { CustomFetch } from "../utils/CustomFetch";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles/Personal.scss";
import { Link, NavLink } from "react-router-dom";

import FormatDate2Input from "../utils/FormatDate2Input";
import { useHistory } from "react-router-dom";
import { useAuth } from "../stores/AuthContext"; // Import useAuth từ context
import OrderDetail from "../components/OrderDetail";
import { useEffect, useState, useContext, createContext } from "react";
import OrderTracking from "../components/OrderTracking";
import ListOrder from "../components/ListOrder";
const Personal = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [flag, setFlag] = useState();
  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setcity] = useState("");
  const [street, setstreet] = useState("");
  const [sex, setSex] = useState(0);
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [account, setAccount] = useState();
  const { setIsLoggedIn } = useAuth();

  // ==========================================

  const SignOut = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    history.push("/login");
  };
  //   ======
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "lName":
        setLastName(value);
        break;
      case "fName":
        setFirstName(value);
        break;
      case "street":
        setstreet(value);
        break;
      case "city":
        setcity(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "sex":
        setSex(value);
        break;

      default:
        break;
    }
  };
  //   ===================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const customerData = {
      id: id,
      firstName,
      lastName,
      email,
      dateOfBirth: city,
      sex: parseInt(sex),
      phone,
      street,
      account,
      customerType: "customer",
      avatar: null,
    };

    console.log(customerData);
    axios
      .post(
        "http://localhost:8521/api/v1/customer/createOrUpdate",
        customerData
      )
      .then((response) => {
        // Xử lý khi tạo khách hàng thành công
        console.log("Khách hàng đã được tạo:", response.data);
        localStorage.setItem("data", JSON.stringify(response.data));
        setFlag(!flag);

        toast.success(`Cập nhật thành công`);
      })
      .catch((error) => {
        // Xử lý khi có lỗi xảy ra
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau");

        console.log(error);
      });
  };

  //   ===========================

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("data"));
    setUser(temp);
    if (temp) {
      // Nếu có dữ liệu từ người dùng đã có
      setEmail(temp.email || "");
      setFirstName(temp.firstName || "");
      setLastName(temp.lastName || "");
      setcity(temp.city || "");
      setstreet(temp.street || "");
      setSex(String(temp.sex) || "0");
      console.log(temp.sex);
      setPhone(temp.phone || "");
      setAccount(temp.account);
      setId(temp.id);
    }
    console.log(city);
  }, [flag]);
  //   ========
  return (
    <>
      <div className="containerPerson">
        <div className="containerChild ">
          <div className="row">
            <div className="col-12">
              <h3>Hồ Sơ Của Tôi</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="item">
                <label htmlFor="fName" className="lbInput">
                  Họ
                </label>
                <input
                  type="fName"
                  id="fName"
                  name="fName"
                  value={firstName}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-6">
              <div className="item">
                <label htmlFor="lName" className="lbInput">
                  Tên
                </label>
                <input
                  type="lName"
                  id="lName"
                  name="lName"
                  value={lastName}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="item">
                <label htmlFor="street" className="lbInput">
                  Địa chỉ:
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={street}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="item">
                <label htmlFor="email" className="lbInput">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-6">
              <div className="item">
                <label htmlFor="phone" className="lbInput">
                  Số điện thoại:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="item">
                <label htmlFor="city" className="lbInput">
                 Thành phố:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-12 pt-xl-3">
              <div className="item">
                <button
                  className="submitBtn btn btn-primary"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ContainerAvatar">
          <img
            className="imgItem"
            src={
              user && user.avatar
                ? user.avatar.imageLink
                : "https://lagrotteduyeti.com/wp-content/themes/themify-music/themify/img/non-skin.gif"
            }
            alt="Avatar"
          />
          <div className="btnAvatar">
            <button type="button" class="btn btn-secondary">
              Chọn ảnh
            </button>
          </div>
        </div>

        <div className="ContainerOut">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => SignOut()}
          >
            Đăng xuất
          </button>
        </div>
      </div>

      {/* =============== */}

      <div className="containerOrder">
        <ListOrder />
        {/* <OrderDetail /> */}
        {/* <OrderTracking /> */}
      </div>
    </>
  );
};
export default Personal;
