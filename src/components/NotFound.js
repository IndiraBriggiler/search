import React, { useEffect, useState } from "react";
import "../styles/customStyles.scss";
import { useHistory } from "react-router-dom";

export const NotFound = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <div>Sorry. The page you are trying to access don't exist.</div>
      <button onClick={goToHome}>Go to home</button>
    </div>
  );
};
