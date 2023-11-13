import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Item from "../components/Item";
import "../styles/Shopping.scss";
import Nav from "./Nav";
import Filter from "../components/Filter";
import { useLocation } from "react-router-dom";

const Shopping = () => {
  // state cua search

  const location = useLocation();
  const { searchValue } = location.state || { searchValue: "" };

  // ===
  const [dataPhone, setDataPhone] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  // ==============xử lý filter
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  var filteredProducts;

  //  xử lý lazy load

  const productsPerLoad = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const endOfListRef = useRef(null);

  // =======

  const style = [
    { top: "-6em" },
    {
      bottom: "270px",
    },
  ];

  useEffect(() => {
    if (searchValue === "") {
      // Fetch data when searchValue is empty
      async function fetchData() {
        try {
          let res = await axios.get(
            "http://localhost:8521/api/v1/products/getAll"
          );
          let data = res && res.data ? res.data : [];
          setDataPhone(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    } else {
      // Fetch data based on searchValue
      async function fetchData() {
        try {
          let res = await axios.get(
            `http://localhost:8521/api/v1/products/getByName/${searchValue}`
          );

          let data = res && res.data ? res.data : [];
          setDataPhone(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setDataPhone([]);
        }
      }

      fetchData();
    }
  }, [searchValue]);

  useEffect(() => {
    async function fetchCategoryAndBrand() {
      try {
        const resCate = await axios.get(
          "http://localhost:8521/api/v1/category/getAll"
        );
        const dataCate = resCate.data || [];
        setCategory(dataCate);

        const resBrand = await axios.get(
          "http://localhost:8521/api/v1/brands/getAllBrand"
        );
        const dataBrand = resBrand.data || [];
        setBrand(dataBrand);
      } catch (error) {
        console.error("Error fetching category and brand data:", error);
      }
    }

    fetchCategoryAndBrand(); // Fetch category and brand data
  }, []);

  if (selectedCategory.length === 0 && selectedBrand.length === 0) {
    //nếu filter rỗng thì LẤY dataPhone
    filteredProducts = dataPhone;
  } else {
    // không rỗng thì lọc
    filteredProducts = dataPhone.filter((item) => {
      return (
        selectedCategory.includes(String(item.category.id)) ||
        selectedBrand.includes(String(item.brand.id))
      );
    });
  }
  useEffect(() => {}, [filteredProducts, selectedBrand, selectedCategory]);
  // =====

  return (
    <div className="shopping">
      <div className="container-fluid shadow-sm p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-md-3">
            {/* Phần Filter */}
            <Filter
              category={category} // Truyền danh sách danh mục từ API vào Filter
              brand={brand} // Truyền danh sách thương hiệu từ API vào Filter
              setSelectedCategory={setSelectedCategory}
              setSelectedBrand={setSelectedBrand}
            />
          </div>
          <div className="col-md-9">
            {/* Danh sách sản phẩm */}
            <div className="row">
              {filteredProducts.map((item, index) => (
                <div className="col-md-4 mb-5" key={index}>
                  <Item children={item} style={style} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
