import React, { useEffect, useState } from "react";
import { getAllProducts, getProductsById } from "../requestServer";
import "../styles/customStyles.scss";
import axios from "axios";

export const Main = () => {
  useEffect(() => {
    getAllProducts().then((result) => {
      console.log(result);
    });

    console.log("LLEGA EFF?");
  }, []);

  console.log("LLEGA?");
  //  const data = getAllProducts();
  //  setAllData(data);
  //        setFilteredData(data);

  // const data = getAllProducts();
  // console.log(data);

  // useEffect(() => {
  //   // console.log("USE EFFECT", data);
  //   setAllData(data);
  //   setFilteredData(data);
  // }, []);

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    console.log("HANDLE SEARCH", value);

    result = allData.filter((product) => {
      return product.name.search(value) !== -1;
    });

    setFilteredData(result);
  };

  return (
    <div>
      <header className="header">
        <figure>
          <img src alt="Logo mac" />
        </figure>
        <div>
          <span className="material-icons">&#xE87C;</span>
          <input type="text" onChange={handleSearch} />
        </div>
      </header>

      <div className="mainContainer">
        {filteredData.map((value, index) => {
          return (
            <div key={value._id} className="cardContainer">
              <div className="cardHeader">
                <div className="productName"> {value.name}</div>
                <div className="productDescription">{value.about}</div>
              </div>
              <div className="imgContainer">
                <figure>
                  {/* <img src={value.picture} alt={value.name} /> */}
                  <img
                    src="https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S75W09_280x320_0.jpg"
                    alt={value.name}
                  />
                </figure>
              </div>
              <div className="cardFooter">
                <div className="productPrice">${value.price}</div>
                <div>
                  <a className="addToBagBtn" href>
                    {value.isActive ? "ADD TO BAG" : "NOT AVIABLE"}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
