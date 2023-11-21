import thum1 from "../assets/images/thumbai_4.png";
import thum2 from "../assets/images/thumbai_5.png";
import thum3 from "../assets/images/thumbai_6.png";
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
        </div>
        <div class="carousel-item" style={{ height: "520px" }}>
          <img src={thum3} class="d-block w-100" alt="..." />
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
