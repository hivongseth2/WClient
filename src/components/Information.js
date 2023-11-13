import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Information = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isoDate, setIsoDate] = useState("");
  const location = useLocation();
  //   const user = location.state?.user;
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Lấy thông tin khách hàng từ props
    console.log(user);
    if (user != undefined) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.numberPhone || "");

      const dateString = user.birthday;
      const date = new Date(dateString);

      const year = date.getFullYear();
      const month = date.getMonth() + 1; // tháng trong JavaScript tính từ 0
      const day = date.getDate();
      setIsoDate(
        `${year}-${month.toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`
      );
      setBirthday(user.birthday || "");
    }
  }, [props]);

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Code xử lý submit thông tin khách hàng tại đây
  };

  return (
    <div className="container my-5 fs-5">
      <h1>Thông tin cá nhân</h1>
      <form onSubmit={handleSubmit}>
        <div className="row my-3">
          <div className="col-md-2">
            <label htmlFor="name">Họ tên:</label>
          </div>
          <div className="col-md-10">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleOnChangeInput}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-2">
            <label htmlFor="phone">Số điện thoại:</label>
          </div>
          <div className="col-md-10">
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleOnChangeInput}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-2">
            <label htmlFor="email">Email:</label>
          </div>
          <div className="col-md-10">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleOnChangeInput}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-2">
            <label htmlFor="birthday">Ngày sinh:</label>
          </div>
          <div className="col-md-10">
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={isoDate}
              onChange={handleOnChangeInput}
            />
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary mt-3">
            Cập nhật thông tin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Information;
