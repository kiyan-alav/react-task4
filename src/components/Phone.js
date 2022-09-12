import React from "react";
import SearchPhone from "./SearchPhone";

function Phone(props) {
  return (
    <div>
      <SearchPhone search={props.searchData} />
    </div>
  );
}

export default Phone;
