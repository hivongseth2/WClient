import React, { useState, useEffect } from "react";
import "../styles/Categories.scss";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="container-fluid shadow-sm p-3 mb-5 rounded"
      style={{ backgroundColor: "white" }}
    >
      <div class="row mt-2 g-4">
        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://giangduydat.vn/images/cat/logo-canon.jpg"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://giangduydat.vn/images/cat/logo-nikon.jpg"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://giangduydat.vn/images/cat/logo-sony.jpg"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://giangduydat.vn/images/cat/logo-lumix.jpg"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://giangduydat.vn/images/cat/logo-pentax.jpg"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://logos-world.net/wp-content/uploads/2023/03/Olympus-Logo.png"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/05/ricoh-eps-vector-logo.png"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardcate p-1 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="https://logowik.com/content/uploads/images/pentax2262.jpg"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
