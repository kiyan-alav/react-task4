import React from "react";

function ShowData(props) {
  return (
    <div>
      <h2>{props.formData.title}</h2>
      <h3>{props.formData.body}</h3>
      <h3>{props.formData.userId}</h3>
    </div>
  );
}

export default ShowData;
