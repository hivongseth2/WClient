import thum1 from "../assets/images/thumbai_1.png";
import thum2 from "../assets/images/thumbai_2.png";
import thum3 from "../assets/images/thumbai_3.png";
const Slider = () => {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          data-bs-interval="10000"
          style={{ height: "520px" }}
        >
          <img
            src={thum1}
            class="d-block w-100 object-fit-cover border rounded"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Thu cũ đổi mới</h5>
            <p>Trợ giá đến 5 triệu.</p>
          </div>
        </div>
        <div
          class="carousel-item"
          data-bs-interval="2000"
          style={{ height: "520px" }}
        >
          <img
            src={thum2}
            class="d-block w-100 object-fit-cover border rounded"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Máy tính chơi game</h5>
            <p>
              Máy tính chơi game thế hệ hệ mới, trang bị vi xử lý thế hệ 12.
            </p>
          </div>
        </div>
        <div class="carousel-item" style={{ height: "520px" }}>
          <img src={thum3} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block object-fit-fill border rounded">
            <h5>Đổi điểm lấy quà</h5>
            <p>Thi bao nhiêu điểm giảm liền bấy nhiêu.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Slider;
