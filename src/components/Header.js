import React, { useEffect, useState } from "react";
import "../styles/customStyles.scss";
import { useHistory, useLocation } from "react-router-dom";

export const Header = () => {

  let location = useLocation();

  const resultPage = "/search/";

  const isResultPageUrl = (path) => {
    return path?.includes(resultPage);
  };

  const isResultPage = isResultPageUrl(location.pathname);

  const [searchQuery, setSearchQuery] = useState(location.state?.query ?? "");

  const history = useHistory();
  const [searchOpen, setSearchOpen] = useState(isResultPage ? true : false);

  const goToSearch = (e) => {
    history.push(resultPage + searchQuery, {
      query: searchQuery,
    });
    setSearchOpen(true);
  };

  const search = (e) => {
    setSearchOpen(true);
    let targetValue = e.target.value;
    setSearchQuery(targetValue);
    // history.push(resultPage + searchQuery, {
    history.push(resultPage + targetValue, {

      query: searchQuery,
    });
  };

  const goToHome = () => {
    history.push("/home");
    setSearchOpen(false);
  };

  const handleOnBlur = (e) => {
    e.target.value = "";
  }
  
  const handleChange = (e) => {
    let value = e.target.value;
    setSearchQuery(value);

  }
  
  
  return (
    <div className="header">
      <figure onClick={goToHome} className="macLogo">
        <img src="../img/macLogo.png" alt="MAC Logo" className="logoImgMac" />
      </figure>
      {searchOpen ? (
        <div className="searchInputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="search"
            onChange={search}
            onKeyDown={search}
            // onBlur={handleOnBlur}
          />
          <span className="material-icons searchIcon" onClick={search}>
            search
          </span>
        </div>
      ) : (
        <div className="searchInputContainer">
          <input
          id="inputOutsideResult"
            className="searchInput"
            type="text"
            placeholder="search"
            // onBlur={handleOnBlur}
            onChange={(e) => setSearchQuery(e.target.value)}
            // onChange={(e)=> handleChange(e)}

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
