import { useState } from "react";
import "../styles/Register.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Register = () => {
  const [userName, setUserName] = useState(""); //
  const [password, setPassword] = useState(""); //
  const [rPassword, setRPassword] = useState(""); //
  const [firstName, setFirstName] = useState(""); //
  const [lastName, setLastName] = useState(""); //
  const [city, setCity] = useState(""); //
  const [email, setEmail] = useState(""); //
  const [street, setStreet] = useState(""); //
  const [phone, setPhone] = useState(""); //
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "user":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "rPassword":
        setRPassword(value);
        break;
      case "fName":
        setFirstName(value);
        break;
      case "lName":
        setLastName(value);
        break;
      case "city":
        setCity(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "street":
        setStreet(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== rPassword) {
      toast.error("Mật khẩu không trùng khớp");
    } else {
      const user = {
        userName: phone,
        passWord: password,
        firstName: firstName,
        lastName: lastName,
        city: city,
        email: email,
        street: street,
        phone: phone,
        roleId: 1,
        status: 1,
      };
      axios
        .post("http://localhost:8081/customer/add", user)
        .then((response) => {
          toast.success("Đăng ký thành công");
        })
        .catch((error) => {
          toast.error("Đăng ký thất bại");
        });
    }
  };

  return (
    <div className=" justify-content-center col-8">
      <form className="formReg col-12 mb-3  fs-8s pb-xl-5 ">
        <div className="row">
          <div className="containerLogo">
            <h2 style={{ display: "block", marginTop: "2em" }}>
              ĐĂNG KÝ TÀI KHOẢN
            </h2>
            {/* <img className="logoLogin" src={logo}></img> */}
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="fName" className="lbInput">
                Họ
              </label> */}
              <input
                type="fName"
                placeholder="Nhập họ"
                id="fName"
                name="fName"
                value={firstName}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="lName" className="lbInput">
                Tên
              </label> */}
              <input
                type="lName"
                id="lName"
                name="lName"
                value={lastName}
                className="form-control"
                placeholder="Nhập tên"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="address" className="lbInput">
                Địa chỉ:
              </label> */}
              <input
                type="text"
                id="city"
                placeholder="Nhập thành phô"
                name="city"
                value={city}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="address" className="lbInput">
                Địa chỉ:
              </label> */}
              <input
                type="text"
                id="street"
                placeholder="Nhập tên đường"
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
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="phone" className="lbInput">
                Số điện thoại:
              </label> */}
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Số điện thoại"
                value={phone}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="user" className="lbInput">
                user:
              </label> */}
              <input
                type="text"
                id="user"
                name="user"
                placeholder="Nhập username"
                value={phone}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          {" "}
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="password" className="lbInput">
                Password:
              </label> */}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Nhập nật khẩu"
                value={password}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="rPassword" className="lbInput">
                Re-Password:
              </label> */}
              <input
                type="password"
                id="rPassword"
                className="form-control"
                name="rPassword"
                placeholder="Nhập lại mật khẩu"
                value={rPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div />
        </div>
        <div className="row">
          {" "}
          <div className="col-6 mb-3">
            <div className="item">
              {/* <label htmlFor="password" className="lbInput">
                Password:
              </label> */}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Nhập email"
                value={email}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div />
        </div>

        <button
          className="nav-item btn btn-primary col-12 mb-3"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Đăng ký
        </button>

        <Link class="nav-item btn btn-primary col-12 mb-3" to="/Login">
          {/* <Link class="nav-link mx-2 text-uppercase" to="/Login"> */}
          <i class="fa-solid fa-circle-user me-1"></i> Đi đến trang đăng nhập
          {/* </Link> */}
        </Link>
      </form>
    </div>
  );
};

export default Register;
