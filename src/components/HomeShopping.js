import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

const HomeShopping = () => {
  const [dataPhone, setDataPhone] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page
  const style = [
    { top: "-6em" },
    {
      bottom: "270px",
    },
  ];
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (currentIndex < dataPhone.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("http://localhost:8081/product");
        let data = res && res.data ? res.data : [];
        setDataPhone(data);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const displayedItems = dataPhone.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section>
      <div className="container-xl py-5 ">
        <div className="row">
          {displayedItems.map((item, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <Item children={item} style={style} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-6 text-end">
            <button
              className="btn btn-secondary"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-secondary"
              onClick={handleNext}
              disabled={currentIndex >= dataPhone.length - itemsPerPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShopping;
