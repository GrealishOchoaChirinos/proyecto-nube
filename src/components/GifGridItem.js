import React from "react";
import "./GifGridItem.css";

const GifGridItem = ({ url, title }) => {
  return (
    <figure className="imgContainer">
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </figure>
  );
};

export default GifGridItem;
