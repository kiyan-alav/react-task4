import React, { useEffect, useState } from "react";
import classes from "./SearchPhone.module.css";
import axios from "axios";
import PhoneThumbnail from "./PhoneThumbnail";

function SearchPhone(props) {
  const [productSearch, setProductSearch] = useState([]);
  const [images, setImages] = useState(0);
  const [isImagesShow, setIsImagesShow] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${props.search}`)
      .then((response) => {
        setProductSearch(response.data.products);
      });
  }, [props.search]);

  return (
    <React.Fragment>
      <section className={classes.sectionCenter}>
        {productSearch.map((product, idx) => {
          return (
            <article className={classes.card} key={idx}>
              <div
                style={{
                  backgroundImage: `url(${product.thumbnail})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  width: "200px",
                  height: "200px",
                }}
              ></div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <button
                style={{
                  backgroundColor: "rgb(17, 0, 95)",
                  color: "#fff",
                  padding: "0.75rem",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setImages(product.id);
                  setIsImagesShow(true);
                }}
              >
                More Information
              </button>
            </article>
          );
        })}
      </section>
      {isImagesShow && <PhoneThumbnail index={images} />}
    </React.Fragment>
  );
}

export default SearchPhone;
