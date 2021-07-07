import React, { useEffect, useState } from "react";
import "../styles/customStyles.scss";
import { useHistory, useLocation } from "react-router-dom";

export const Header = ({ filterProducts }) => {
  let location = useLocation();

  const resultPage = "/search/";
  const isResultPageUrl = (path) => {
    return path?.includes(resultPage);
  };
  const isResultPage = isResultPageUrl();
  const [searchQuery, setSearchQuery] = useState(location.state?.query ?? "");

  const history = useHistory();
  const [searchOpen, setSearchOpen] = useState(isResultPage ? true : false);

  //   useEffect(async () => {
  //     const response = await getAllProducts();
  //     setAllData(response);
  //     // setFilteredData(response);
  //     // filterProducts(value);
  //   }, [searchQuery]);

  const goToSearch = (e) => {
    history.push(resultPage + searchQuery, {
      query: searchQuery,
    });
    setSearchOpen(true);

    console.log("ESTA EN FGO TO");
  };

  const search = (e) => {
    setSearchOpen(true);

    let targetValue = e.target.value;
    setSearchQuery(targetValue);
    history.push(resultPage + searchQuery, {
      query: searchQuery,
    });
    console.log(
      "TARGET VALUE",
      e.target.value,
      "SEARCH QUERY",
      searchQuery,
      "TARGET VAÑUE",
      targetValue
    );
  };

  const goToHome = () => {
    history.push("/home");
    setSearchOpen(false);
  };

  console.log(searchOpen, "SEARCH OPEN");

  return (
    <div className="header">
      <figure onClick={goToHome} className="macLogo">
        <img src alt="Logo mac" />
      </figure>

      {searchOpen ? (
        <div className="searchInputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="search"
            onChange={search}
            onKeyDown={search}
          />
          <span className="material-icons searchIcon" onClick={search}>
            search
          </span>
        </div>
      ) : (
        <div className="searchInputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) goToSearch();
            }}
          />
          <span className="material-icons searchIcon" onClick={goToSearch}>
            search
          </span>
        </div>
      )}
    </div>
  );
};
