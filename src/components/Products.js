import React, { useEffect, useState } from "react";
import { getAllProducts } from "../requestServer";
import "../styles/customStyles.scss";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

export const Products = () => {
    const prodctPage = "/product/";
    const history = useHistory();
  const [allData, setAllData] = useState([]);
  const getInitialDAta =  async () => {
    const response = await getAllProducts();
    setAllData(response);
}

useEffect(() => {
  getInitialDAta();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const goToProduct = (id) => {
    history.push(prodctPage + id, {
      id: id,
    });
  };

    return (
        
<div className="mainContainer">
{allData.map((product) => {
    return (
      <div
        key={product._id}
        className="cardContainer"
        onClick={() => goToProduct(product._id)}
      >
        <div className="cardHeader">
          <div className="productName"> {product.name}</div>
          <div className="productDescription">{product.about}</div>
        </div>
        <div className="imgContainer">
          <figure className="figuraContainer">
            <img className="imgSearch" src={product.picture} alt={product.name} />
          </figure>
        </div>
        <div className="cardFooter">
          <div className="productPrice">${product.price}</div>
          <div>
            <a className="addToBagBtn" href>
              {product.isActive ? "ADD TO BAG" : "NOT AVIABLE"}
            </a>
          </div>
        </div>
      </div>
    );}
)};
  </div>

    );
}