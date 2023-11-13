const Footer = () => {
  return (
    /* Footer */
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#146C94" }}
    >
      <div className="container-fluid">
        {/* Section: Links */}
        <section className="mt-5">
          <div className="row text-center d-flex justify-content-center pt-5">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/" className="text-white">
                  Home
                </a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/Shopping" className="text-white">
                  Sản Phẩm
                </a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/Cart" className="text-white">
                  Giỏ Hàng
                </a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/Home" className="text-white">
                  Cá Nhân
                </a>
              </h6>
            </div>
            {/* <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">
                  Contact
                </a>
              </h6>
            </div> */}
          </div>
        </section>
        <hr className="my-5" />

        {/* Section: Text */}
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Mivin - Thương hiệu đẳng cấp trong lĩnh vực công nghệ, chuyên
                cung cấp và phân phối những sản phẩm và giải pháp đột phá, mang
                đến cho bạn không chỉ sự tiện nghi mà còn là trải nghiệm hoàn
                hảo trong cuộc sống sống động và hiện đại. Chúng tôi tự hào đồng
                hành cùng bạn trên con đường sáng tạo và khám phá những tiềm
                năng vô tận của công nghệ
              </p>
            </div>
          </div>
        </section>

        {/* Section: Social */}
        <section className="text-center mb-5">
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="/">
          MIVIN
        </a>
      </div>
    </footer>
    /* Footer */
  );
};

export default Footer;
