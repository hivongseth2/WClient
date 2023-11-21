import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";
import "../styles/ListItem.scss"; // Import CSS
import arrowLeft from "../assets/images/left-arrow.svg";
import arrowRight from "../assets/images/right-arrow.svg";

const ListItem = () => {
  const [dataPhone, setDataPhone] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to display per page

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < dataPhone.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("http://localhost:8081/product");
        let data = res && res.data ? res.data : [];
        setDataPhone(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section>
      <div className="container-fluid py-5 list-container">
        {" "}
        {/* Thêm class list-container */}
        <div className="btn-left">

          <div
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <img src={arrowLeft} alt="Your SVG" width="50" />
          </div>
        </div>
        <div className="btn-right">
          <div
            onClick={handleNext}
            disabled={currentIndex >= dataPhone.length - itemsPerPage}
          >
            <img src={arrowRight} alt="Your SVG" width="50" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row align-items-center">
              {dataPhone
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((item, index) => (
                  <div className="col-3 mb-5" key={index}>
                    <Item children={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListItem;
