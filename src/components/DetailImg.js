import { useState, useRef } from "react";
import "../styles/DetailImg.scss";
import { useEffect } from "react";
import axios from "axios";
const DetailImg = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [listImg, setListImg] = useState([]);
  console.log(listImg);
  const [activeImg, setActiveImg] = useState(
    "https://concrete.store/Content/images/not-available.jpg"
  );

  const imageListRef = useRef(null);

  useEffect(async () => {
    if (props.data) {
      let res = await axios.get(
        // `http://localhost:8521/api/v1/products/getById/${props.data}`
        `http://localhost:8081/product/get?productId=${props.data}`
      );
      setListImg(res.data.images);
      setActiveImg(res.data.images[0].id);
      //useEffect có ảnh hưởng tới active => bỏ tham số đi
    }
    // }, [activeImg]);
  }, []);
  const handleActive = (index, event) => {
    setActiveIndex(index);
    setActiveImg(event.target.src);
    imageListRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const nextBtn = () => {
    const numberOfLi = imageListRef.current.children.length;

    if (activeIndex < numberOfLi - 1) {
      setActiveIndex(activeIndex + 1);
      setActiveImg(
        imageListRef.current.children[activeIndex + 1].children[0].src
      );
      imageListRef.current.children[activeIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  const preBtn = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setActiveImg(
        imageListRef.current.children[activeIndex - 1].children[0].src
      );
      imageListRef.current.children[activeIndex - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  return (
    <div className="detailItemContainer">
      <div className="detailImg">
        <div class="cards">
          <figure class="card" style={{ boxShadow: "none" }}>
            <img src={activeImg} alt="item" class="card_title" />
          </figure>
        </div>
        <div className="divChild">
          <button className="btnNext" onClick={() => nextBtn()}>
            &#10095;
          </button>

          <button
            className="btnPre"
            onClick={() => {
              preBtn();
            }}
          >
            &#10094;
          </button>

          <ul className="itemChild" ref={imageListRef}>
            {listImg.length > 0 &&
              listImg.map((item, index) => {
                return (
                  <li
                    className={`img ${
                      activeIndex === index ? "activeImg" : ""
                    }`}
                    onClick={(event) => handleActive(index, event)}
                  >
                    <img src={item.id} alt="item" />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DetailImg;
