import "../styles/Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.png";

import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../stores/AuthContext";

import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setIsLoggedIn } = useAuth();
  const history = useHistory();

  const handleOnChangeInput = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    const formData = {
      userName: userName,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/auth/login",
        formData
      );

      const data = response.data;
      console.log(data);

      if (data) {
        localStorage.setItem("data", JSON.stringify(data));
        toast.success(
          `Chào mừng ${data.firstName} ${data.lastName} đã quay trở lại!`
        );
        setIsLoggedIn(true);
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      toast.error(`Sai tài khoản hoặc mật khẩu!`);
    }
  };

  return (
    <form className="col-8 offset-2  containerLogin justify-content-center bgLogin">
      <div className="col-12">
        <div className="containerLogo">
          <h2 style={{ display: "block" }}>Đăng nhập</h2>
          <img className="logoLogin" src={logo} alt="Logo"></img>
        </div>

        <div className="mb-3 p">
          <input
            type="text"
            className="form-control inputUserName"
            placeholder="Nhập tên đăng nhập"
            name="userName"
            value={userName}
            onChange={(e) => handleOnChangeInput(e)}
          />
        </div>
        <div className="mb-3 ">
          <input
            type="password"
            className="form-control inputPassword"
            name="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => handleOnChangeInput(e)}
          />
        </div>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheck1"
            />
            <label
              className="form-check-label text-left"
              htmlFor="customCheck1"
            >
              Lưu tài khoản
            </label>
          </div>
        </div>
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-primary col-12 mx-auto"
            onClick={(e) => handleSignIn(e)}
          >
            Đăng nhập
          </button>
        </div>
        <Link className="nav-item btn btn-primary col-12" to="/Register">
          Đăng kí
        </Link>
      </div>
    </form>
  );
};

export default Login;
