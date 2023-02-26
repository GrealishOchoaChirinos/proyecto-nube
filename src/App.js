import logo from "./logo.svg";
import "./App.css";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="App">
      <AddCategory setImages={setImages} />
      {images.map((image, index) => (
        <GifGrid key={index} imgs={image.imgs} title={image.title} />
      ))}
    </div>
  );
}

export default App;
