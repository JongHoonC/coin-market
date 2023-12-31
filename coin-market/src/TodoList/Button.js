import React from "react";
import "../App.css";
const Button = ({ onRemove, item, onReplace, replaceData, onConfirm }) => {
  const btnStyle = {
    width: "20px",
    height: "20px",
  };
  return (
    <div className="buttonStyle">
      {replaceData === item.id ? (
        <button
          onClick={() => onConfirm(item.id, "confirm")}
          style={btnStyle}
        ></button>
      ) : (
        <div>
          <button
            onClick={() => onReplace(item.id, "replace")}
            style={btnStyle}
          ></button>
          <button onClick={() => onRemove(item.id)} style={btnStyle}></button>
        </div>
      )}
    </div>
  );
};

export default Button;
