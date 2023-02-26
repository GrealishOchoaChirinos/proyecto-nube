import React from "react";
import GifGridItem from "./GifGridItem";
import "./GifGrid.css";

const GifGrid = ({ imgs, title }) => {
  console.log(imgs);
  return (
    <div className="gifsContainer">
      <h2>{title}</h2>
      <div className="containerImgs">
        {imgs.map((img) => (
          <GifGridItem
            url={img.images.original.url}
            title={img.title}
            key={img.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
