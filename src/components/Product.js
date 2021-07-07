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
    <div>
      <div>{product[0]?._id}</div>
      <div>{product[0]?.name}</div>
    </div>
  );
};
