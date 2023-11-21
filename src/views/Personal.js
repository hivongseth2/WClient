import "bootstrap/dist/css/bootstrap.min.css";
import { CustomFetch } from "../utils/CustomFetch";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles/Personal.scss";
import { Link, NavLink, useHistory } from "react-router-dom";


import FormatDate2Input from "../utils/FormatDate2Input";
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
  const [pass, setPass] = useState("");

  const [isSetPassword, setIsSetPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //   ================================

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
      setId(temp.personId);
      setPass(temp.passWord);
    }
    console.log(id);
  }, [flag]);

  const handleUpdatePassword = async (passwordParam, id) => {
    if (passwordParam !== password) {
      setErrorMessage("Mật khẩu cũ không đúng");
      return;
    }

    if (newPassword !== reNewPassword) {
      setErrorMessage("Mật khẩu nhập lại không khớp");
      return;
    }

    // Gọi API để cập nhật mật khẩu
    try {
      const response = await fetch(`http://localhost:8081/account/update-password/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      });

      if (response.ok) {
        console.log("Mật khẩu đã được cập nhật thành công");
        setErrorMessage("");
        history.push('/Login');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Có lỗi xảy ra khi cập nhật mật khẩu");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API cập nhật mật khẩu", error);
      setErrorMessage("Có lỗi xảy ra khi cập nhật mật khẩu");
    }
  };


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

  const handleSubmit = async (event) => {
    console.log("id dòng 139 nè: ", id);
    event.preventDefault();
    const customerData = {
      status: 1,
      firstName,
      lastName,
      email,
      city,
      phone,
      street,
    };
    console.log("đây là data dòng 150", JSON.stringify(customerData));
    try {
      const response = await fetch(`http://localhost:8081/customer/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Khách hàng đã được cập nhật:", responseData);
        localStorage.setItem("data", JSON.stringify(responseData));
        toast.success(`Cập nhật thành công`);
      } else {
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
        console.log(response.statusText);
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
      console.log(error);
    }
  };

  //   ===========================


  //   ========
  return (
    <>
      <div className="containerPerson">
        <div className="containerChild ">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="My Image" style={{ width: '260px', height: '200px' }} />
              </div>
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
                  readOnly
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
            <div className="col-6">

            </div>

          </div>

          <div className="row">
            <div className="col-6 pt-xl-3">
              <div className="col">
                <div className="item">
                  <button
                    className="button-30-blue"
                    type="submit"
                    onClick={() => setIsSetPassword(!isSetPassword)}
                  >
                    Đổi mật khẩu
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 pt-xl-3">
              <div className="row">
                <div className="col">
                  <div className="item">
                    <button
                      className="button-30-pr"
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div className="ContainerOut">
                    <button
                      type="button"
                      className="button-30-red"
                      onClick={() => SignOut()}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isSetPassword && (
            <form className="mt-3">
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">Mật khẩu cũ:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">Mật khẩu mới:</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="reNewPassword" className="form-label">Nhập lại mật khẩu mới:</label>
                <input
                  type="password"
                  className="form-control"
                  id="reNewPassword"
                  value={reNewPassword}
                  onChange={(e) => setReNewPassword(e.target.value)}
                />
              </div>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <button
                type="button"
                className="button-30-pr"
                onClick={() => handleUpdatePassword(pass, id)} >Xác nhận</button>
            </form>
          )}
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
