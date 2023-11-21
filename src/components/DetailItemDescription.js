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

          {` ${dataDes && dataDes.data ? dataDes.data.brandName : ""}`}
        </div>

        <div className="cate">
          <span className="color">Loại thiết bị:</span>

          {` ${dataDes && dataDes.data ? dataDes.data.categoryName : ""}`}
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

      {/* <div className="promotionContainer">
        <div className="promotionTitle">KHUYẾN MÃI KHI MUA NGAY:</div>
        <div className="promoChild">
          <img className="giftImg" src={gift}></img>
          <div className="giftContent">
            1x Giảm thêm 150.000 cho một số chuột Logitech, MSI, Newmen, tai
            nghe Zidli, Lg
          </div>
        </div>
        <div className="promoChild">
          <img className="giftImg" src={gift}></img>
          <div className="giftContent">
            1x Giảm thêm 5% tối đa 300.000đ cho toàn bộ sản phẩm Điện Máy - Điện
            Gia Dụng
          </div>
        </div>
        <div className="promoChild">
          <img className="giftImg" src={gift}></img>
          <div className="giftContent">
            1x Balo laptop Targus 15.6 TSB883 Black (Safire) (Quà tặng )
          </div>
        </div>
        <div className="promoChild">
          <img className="giftImg" src={gift}></img>
          <div className="giftContent">
            1x Sim Viettel 365 ngày không giới hạn dữ liệu di động (Quà tặng )
          </div>
        </div>
      </div> */}
      <div className="button-container">
        <button className="btnAdd">Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
};
export default DetailItemDescription;
