// const axios = require("axios").default;

import axios from "axios";

export const getAllProducts = async () => {
  const response = axios.get("http://localhost:3001/data");
  return (await response).data;
};

export const getProductsById = async (id) => {
  const response = axios.get(`http://localhost:3001/data?_id=${id}`);
  return (await response).data;
};
