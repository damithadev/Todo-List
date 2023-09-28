import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Body = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one half pound bag of cocoa",
    },
    {
      id: 2,
      checked: false,
      item: "bread",
    },
    {
      id: 3,
      checked: false,
      item: "pizza",
    },
  ]);

  return (
    <div className="Body">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
