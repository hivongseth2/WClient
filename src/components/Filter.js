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
      className="container-xs shadow-none p-3 mb-5 bg-body-tertiary rounded"
      style={{ color: "#333" }}
    >
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
          Thương hiệu
          {brand &&
            brand.length > 0 &&
            brand.map((item) => (
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleBrandChange}
                  value=""
                  id={`categoryCheckbox-${item.id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`categoryCheckbox-${item.id}`}
                >
                  {item.name}
                </label>
              </div>
            ))}
        </div>
        {/* ============ */}

        <div className="rangePrice p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
          <label htmlFor="customRange3" className="form-label">
            Loại sản phẩm
          </label>

          {category &&
            category.length > 0 &&
            category.map((item) => (
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleCategoryChange}
                  value=""
                  id={`categoryCheckbox-${item.id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`categoryCheckbox-${item.id}`}
                >
                  {item.categoryName}
                </label>
              </div>
            ))}
        </div>
      </div>

      <div className="rangePrice p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
        <label htmlFor="customRange3" className="form-label">
          Khoảng giá
        </label>
        <div className="d-flex flex-row">
          {/* ============= */}
          <div className="input-group mb-3 mx-3 ">
            <span className="input-group-text">Từ</span>

            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">VND</span>
          </div>
          {/* ============ */}

          <div className="input-group mb-3 mx-1">
            <span className="input-group-text">Đến</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />

            <span className="input-group-text">VND</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
