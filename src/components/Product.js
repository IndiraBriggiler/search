import React, { useEffect, useState } from "react";
import "../styles/customStyles.scss";
import { getProductsById } from "../requestServer";
import { useParams } from "react-router";

export const Product = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await getProductsById(id);
    setProduct(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="productMainContainer">
      <div key={product[0]?._id} className="cardContainer productCardContainer">
        <div className="imgContainer productImgContainer">
          <figure>
            <img src={product[0]?.picture} alt={product[0]?.name} />
          </figure>
        </div>
        <div className="productInfoContainer">
          <div className="cardHeader">
            <div className="uniqueProductName"> {product[0]?.name}</div>
            <div className="productDescription">{product[0]?.about}</div>
          </div>
          <div className="cardFooter productCardFooter">
            <div className="productPrice">${product[0]?.price}</div>
            <div>
              <a className="addToBagBtn" href>
                {product[0]?.isActive ? "ADD TO BAG" : "NOT AVIABLE"}
              </a>
            </div>
            <div className="tagsContainer">
              {product[0].tags.map((tag, key) => {
                return (            
                <span className="tags" key={key}>{tag}</span>
                )
              })}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};
