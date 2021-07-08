import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/customStyles.scss";

export const Home = () => {
  const prodctsPage = "/products/";
  const history = useHistory();

  const goToProducts = () => {
    history.push(prodctsPage);
  };


  return (
    <div className="homeContainer"> 
      <div className="homeText">
        <span>WELCOME</span>
      <span className="productsText" onClick={goToProducts}>See our products</span>
        
      </div>

      </div>
  );
};
