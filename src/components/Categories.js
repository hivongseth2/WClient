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
      <div className="row mt-2 g-4">
        {categories.map((category) => (
          <div className="col-md-3" key={category.categoryId}>
            <div className="cardcate p-1">
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="flex-column lh-1 imagename">
                  <span>{category.name}</span>
                </div>
                <div>
                  <img
                    src={category.image}
                    height="200"
                    width="200"
                    alt={category.name}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
