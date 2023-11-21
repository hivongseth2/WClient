import { useEffect, useState } from "react";
import axios from "axios";

const Filter = ({ category, brand, setSelectedCategory, setSelectedBrand }) => {
  // const [category, setCategory] = useState();
  // const [brand, setBrand] = useState();
  // ===========================Xử Lý filter ============
  const handleCategoryChange = (event) => {
    const categoryId = event.target.id.split("-")[1];
    setSelectedCategory((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      }
      return [...prevSelected, categoryId];
    });
  };

  const handleBrandChange = (event) => {
    const brandId = event.target.id.split("-")[1];
    setSelectedBrand((prevSelected) => {
      if (prevSelected.includes(brandId)) {
        return prevSelected.filter((id) => id !== brandId);
      }
      return [...prevSelected, brandId];
    });
  };

  return (
    <div
      className="container-xs  p-3 mb-5  FilterGroup"
      style={{ color: "#333" }}
    >
      <div className="d-flex flex-column  mb-3 ">
        <div className="p-2 p-3 mb-2   ">
          <span className="hightlight">Thương hiệu</span>
          {brand &&
            brand.length > 0 &&
            brand.map((item) => (
              <div className="form-check" key={item.brandId}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleBrandChange}
                  value=""
                  id={`categoryCheckbox-${item.brandId}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`categoryCheckbox-${item.brandId}`}
                >
                  {item.name}
                </label>
              </div>
            ))}
        </div>
        {/* ============ */}
        <div className="containerFilter"></div>

        <div className="rangePrice p-2  p-3 mb-2   ">
          <label htmlFor="customRange3" className="form-label">
            <span className="hightlight">Loại sản phẩm</span>
          </label>

          {category &&
            category.length > 0 &&
            category.map((item) => (
              <div className="form-check" key={item.categoryId}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleCategoryChange}
                  value=""
                  id={`categoryCheckbox-${item.categoryId}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`categoryCheckbox-${item.categoryId}`}
                >
                  {item.name}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Filter;
