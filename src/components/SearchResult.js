import React, { useEffect, useState } from "react";
import { getAllProducts } from "../requestServer";
import "../styles/customStyles.scss";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

export const SearchResult = () => {
  const prodctPage = "/product/";
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hasResult, setHasResult] = useState(true);
  const history = useHistory();
  let { query } = useParams();

  const getInitialData =  async () => {
      const response = await getAllProducts();
      setAllData(response);
      setFilteredData(response);
      filterProducts(query);
      // setHasResult();
      console.log(hasResult, "HR", filteredData, "FD", query, "QUERy")
  }

  useEffect(() => {
    getInitialData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getInitialData();
    console.log(query, "QUERY")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ query]);

  const handleSearch = (query) => {
    let result = [];
    result = allData.filter((product) => product.name.toLowerCase().includes(query?.toLowerCase()));
    return result;
  };

  const filterProducts = (query) => {
    let result = handleSearch(query);
    console.log(result, "RESULT")
    if (result.length === 0) {
      setHasResult(false);
    } else {
      setFilteredData(result);
      setHasResult(true);
    }
    return hasResult;
  };
 
  const goToProduct = (id) => {
    history.push(prodctPage + id, {
      id: id,
    });
  };

  return (
    <div>
      <header className="searchResultHeader">
        <div className="searchResult">{query}</div>
      </header>
      <div className="mainContainer">  {/* {hasResult ? ( */}
        {(filteredData.length > 0) ? (
      
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
            )
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
