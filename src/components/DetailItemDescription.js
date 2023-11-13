import { useState } from "react";
import "../styles/DetailItemDescription.scss";
import { useEffect } from "react";
import axios from "axios";
import FormatDate from "../utils/FormatDate";
import gift from "../assets/images/gift-filled.png";

const DetailItemDescription = (props) => {
  const [dataDes, setDataDes] = useState();

  useEffect(async () => {
    if (props.data) {
      let res = await axios.get(
        `http://localhost:8521/api/v1/products/getById/${props.data}`
      );
      setDataDes(res);
      console.log(res);
    }
  }, []);
  return (
    <div className="ContainerDes">
      <div className="title">
        {dataDes && dataDes.data ? dataDes.data.productName : ""}
      </div>

      <div className="ContainerChild">
        <div className="brand">
          {`Thương hiệu: ${
            dataDes && dataDes.data ? dataDes.data.brand.name : ""
          }`}
        </div>

        <div className="cate">
          {`Loại thiết bị: ${
            dataDes && dataDes.data ? dataDes.data.category.categoryName : ""
          }`}
        </div>
      </div>
      {/* =============================== */}
      <div className="ContainerChild">
        <div className="stock">
          {`Số lượng: ${dataDes && dataDes.data ? dataDes.data.quantity : ""}`}
        </div>
        <div className="supplier">
          {`nhà cung cấp: ${
            dataDes && dataDes.data ? dataDes.data.supplier.name : ""
          }`}
        </div>
        <div className="creat">
          {`Ngày mở bán: ${
            dataDes && dataDes.data ? FormatDate(dataDes.data.importDate) : ""
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

      <div className="promotionContainer">
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
      </div>
      <div className="button-container">
        <button className="btnBuy">Mua ngay</button>
        <button className="btnAdd">Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
};
export default DetailItemDescription;
