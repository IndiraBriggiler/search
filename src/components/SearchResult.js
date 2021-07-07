import React, { useEffect, useState } from "react";
import { getAllProducts, getProductsById } from "../requestServer";
import "../styles/customStyles.scss";
import { useHistory, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export const SearchResult = () => {
  const prodctPage = "/product/";
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [hasResult, setHasResult] = useState(true);
  const history = useHistory();
  let location = useLocation();
  const { value } = useParams();
  const [inptValue, setInptValue] = useState(value);

  console.log(inptValue, "paramValue");

  //   const [searchQuery, setSearchQuery] = useState(location.state?.query ?? "");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      const response = await getAllProducts();
      setAllData(response);
      setFilteredData(response);
      // filterProducts(inptValue);
    },
    [
      //   inptValue
    ]
  );

  console.log(filteredData, "FILTERES DATA");

  //   const handleSearch = (event) => {
  //     console.log(event, "EVENT");
  //     let value = event?.target.value;
  //     let result = [];
  //     console.log("HANDLE SEARCH", value);
  //     result = allData.filter((product) => {
  //       return product.name.toLowerCase().includes(value?.toLowerCase());
  //     });
  //     return result;
  //   };

  const handleSearch = (inptValue) => {
    let result = [];
    console.log("HANDLE SEARCH", inptValue);
    result = allData.filter((product) => {
      console.log("ADENTRO DEL YHANDLE");
      //   return product.name.toLowerCase().includes(inptValue?.toLowerCase());
    });

    return result;
  };

  const filterProducts = (inptValue) => {
    console.log("ADENTRO DEL FITLER");

    let result = handleSearch(inptValue);
    if (result.length === 0) {
      setHasResult(false);
    } else {
      setFilteredData(result);
      setHasResult(true);
    }
    return hasResult;
  };

  const goToProduct = (id) => {
    // history.push(`/product/${id}`);
    history.push(prodctPage + id, {
      query: id,
    });
  };

  return (
    <div>
      <header>
        <div>HOLA {inptValue}</div>
      </header>
      <div className="mainContainer">
        {hasResult ? (
          filteredData.map((product) => {
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
                  <figure>
                    <img src={product.picture} alt={product.name} />
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
            );
          })
        ) : (
          <div className="cardHeader">
            <div className="productName">
              Sorry. We did not find any results from your search. Please try
              again.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
