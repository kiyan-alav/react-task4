import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import ShowData from "./ShowData";

let initial = false;

const initialState = {
  title: "",
  body: "",
  userId: 0,
};

const reducer = function (curState, action) {
  return {
    title: action.title,
    body: action.body,
    userId: action.userId,
  };
};

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    if (initial) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: data.title,
          body: data.body,
          userId: data.userId,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    initial = true;
  }, [data]);

  const titleHandler = function (e) {
    dispatch({ ...state, title: e.target.value });
  };

  const bodyHandler = function (e) {
    dispatch({ ...state, body: e.target.value });
  };

  const idHandler = function (e) {
    dispatch({ ...state, userId: e.target.value });
  };

  const submitHandler = function (e) {
    e.preventDefault();
    setData(state);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={titleHandler}
            value={state.title}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            onChange={bodyHandler}
            value={state.body}
          />
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            onChange={idHandler}
            value={state.userId}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
      <ShowData formData={data} />
    </div>
  );
}

export default Form;
