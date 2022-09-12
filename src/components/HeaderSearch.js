import React, { useState } from "react";
import classes from "./HeaderSearch.module.css";

function HeaderSearch(props) {
  const [search, setSearch] = useState("");

  const searchHandler = function (e) {
    setSearch(e.target.value);
    props.onGetSearch(search);
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <input
          type="text"
          placeholder="Enter A Phone Name"
          onChange={searchHandler}
          value={search}
        />
      </div>
    </header>
  );
}

export default HeaderSearch;
