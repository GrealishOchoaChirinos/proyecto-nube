import React from "react";
import "./AddCategory.css";
import logoLoader from "../img/loading.gif";

const AddCategory = ({ setImages }) => {
  const search = async (e) => {
    if (e.key !== "Enter") return;
    document.getElementById("imgLoading").style.display = "block";
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=hmCyrsWQMuuyXa3gHv7PipCsIoHuxIO0&limit=6&q=" +
        e.target.value
    )
      .then((data) => data.json())
      .then(({ data }) => {
        if (data.length > 0) {
          setImages((oldArray) => [
            {
              title: e.target.value,
              imgs: data,
            },
            ...oldArray,
          ]);
          e.target.value = "";
        } else alert("No Se encontro la categoria.");

        document.getElementById("imgLoading").style.display = "none";
      });
  };

  return (
    <div className="header">
      <input type="text" onKeyPress={search} />
      <img src={logoLoader} alt="Loading..." id="imgLoading" />
    </div>
  );
};

export default AddCategory;
