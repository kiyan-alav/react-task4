import React, { useState } from "react";
import HeaderSearch from "./components/HeaderSearch";
import Phone from "./components/Phone";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const getSearchData = function (searchData) {
    setSearch(searchData);
  };

  return (
    <div>
      <HeaderSearch onGetSearch={getSearchData} />
      <Phone searchData={search} />
    </div>
  );
}

export default App;
