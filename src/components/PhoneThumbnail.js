import React, { useEffect, useState } from "react";
import classes from "./PhoneThumbnail.module.css";
import axios from "axios";

function PhoneThumbnail(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${props.index}`)
      .then((response) => {
        setImages(response.data.images);
      });
  }, [props.index]);

  return (
    <section className={classes.phoneThumbnail}>
      {images.map((image, idx) => {
        return (
          <article key={idx}>
            <img src={image} alt="" />
          </article>
        );
      })}
    </section>
  );
}

export default PhoneThumbnail;
