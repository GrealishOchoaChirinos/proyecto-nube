import React, { useEffect, useState } from "react";

const Tarea = () => {
  const [inputValue, setInputValue] = useState([
    "One Piece",
    "Naruto",
    "Dragon Ball",
  ]);

  const query = (e) => {
    console.log(inputValue.includes(e.target.value) ? "Encontrado" : null);
  };

  const [images, setImages] = useState([]);

  const getQuery = async (e) => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=hmCyrsWQMuuyXa3gHv7PipCsIoHuxIO0&limit=5&q=" +
        e.target.text
    )
      .then((data) => data.json())
      .then(({ data }) => setImages(data));
  };

  return (
    <>
      <input onChange={query} />
      <ol>
        {inputValue.map((item, index) => (
          <li key={index}>
            <a href="#" onClick={getQuery}>
              {item}
            </a>
          </li>
        ))}
      </ol>
      {images.map((image, index) => (
        <img key={index} src={image.images.original.url} />
      ))}
    </>
  );
};

export default Tarea;
