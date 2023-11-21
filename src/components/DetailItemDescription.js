import { useState } from "react";
import "../styles/DetailItemDescription.scss";
import { useEffect } from "react";
import axios from "axios";
import FormatDate from "../utils/FormatDate";
import gift from "../assets/images/gift-filled.png";

const DetailItemDescription = (props) => {
  const [dataDes, setDataDes] = useState();
  console.log(dataDes);

  useEffect(async () => {
    if (props.data) {
      let res = await axios.get(
        // `http://localhost:8521/api/v1/products/getById/${props.data}`
        `http://localhost:8081/product/get?productId=${props.data}`
      );
      setDataDes(res);
      console.log(res);
    }
  }, []);
  return (
    <div className="ContainerDes">
      <div className="title">
        {dataDes && dataDes.data ? dataDes.data.name : ""}
      </div>

      <div className="ContainerChild">
        <div className="brand">
          <span className="color">Thương hiệu:</span>

          <div>
            {` ${dataDes && dataDes.data ? dataDes.data.brandName : ""}`}
          </div>
        </div>

        <div className="cate">
          <span className="color">Loại thiết bị:</span>

          <div>
            {` ${dataDes && dataDes.data ? dataDes.data.categoryName : ""}`}
          </div>
        </div>
      </div>
      {/* =============================== */}
      <div className="ContainerChild">
        <div className="stock">
          <span className="color">Số lượng:</span>
          {` ${dataDes && dataDes.data ? dataDes.data.quantity : ""}`}
        </div>
        <div className="supplier">
          <span className="color">Nhãn hàng:</span>
          {` ${dataDes && dataDes.data ? dataDes.data.brandName : ""}`}
        </div>
        <div className="creat">
          <span className="color">Nhãn hàng:</span>

          {`${
            dataDes && dataDes.data ? FormatDate(dataDes.data.modelYear) : ""
          }`}
        </div>
      </div>

      <div className="des">
        {/* <div>
          {dataDes && dataDes.data ? dataDes.data.description : ""}
        </div> */}
      </div>
      <div className="price">
        <span
          style={{
            color: "black",
            marginRight: "5em",
            letterSpacing: "0px",
          }}
        >
          Giá chỉ:
        </span>
        {dataDes && dataDes.data ? dataDes.data.price + "\tVND" : ""}
      </div>

      <div></div>

      <div className="bonus">
        <div>
          <img
            src="https://htauto.com.vn/wp-content/uploads/2020/11/img_507427-376x400.png"
            width={30}
            height={30}
            style={{ marginRight: 20 }}
          ></img>
          <span>
            Để được tư vấn sản phẩm vui lòng liên hệ Hotline: 18001503 hoặc Chat
          </span>
          <hr></hr>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png"
            width={30}
            height={30}
            style={{ marginRight: 20 }}
          ></img>
          <span>Giao hàng miễn phí trong vòng 3-7 ngày</span>
          <hr></hr>
        </div>

        <div>
          <img
            src="https://static.thenounproject.com/png/1703016-200.png"
            width={30}
            height={30}
            style={{ marginRight: 20 }}
          ></img>
          <span>Đổi trả miễn phí trong vòng 15 ngày</span>
        </div>
        <hr></hr>
      </div>
      <div className="button-container">
        <button className="btnAdd">Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
};
export default DetailItemDescription;
