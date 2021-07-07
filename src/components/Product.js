import React, { useEffect, useState } from "react";
import "../styles/customStyles.scss";
import { getProductsById } from "../requestServer";
import { useParams } from "react-router";

export const Product = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  console.log(id);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await getProductsById(id);
    setProduct(response);
    console.log(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="productMainContainer">

      <div key={product[0]?._id} className="cardContainer">
        <div className="imgContainer">
          <figure>
            <img src={product[0]?.picture} alt={product[0]?.name} />
          </figure>
        </div>
      <div>
        <div className="cardHeader">
          <div className="productName"> {product[0]?.name}</div>
          <div className="productDescription">{product[0]?.about}</div>
        </div>
      
        <div className="cardFooter">
          <div className="productPrice">${product[0]?.price}</div>
          <div>
            <a className="addToBagBtn" href>
              {product[0]?.isActive ? "ADD TO BAG" : "NOT AVIABLE"}
            </a>
          </div>
        </div>
      </div>
      
    </div>
    </div>

  );
};
