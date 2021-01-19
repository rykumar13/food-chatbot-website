import React from "react";

import "./CategoryTypes.css";

const CategoryTypes = (props) => {
  const CategoryTypes = [
    {
      text: "Delivery",
      handler: props.actionProvider.handleCategoryTypeDelivery,
      id: 1,
    },
    {
      text: "Takeaway",
      handler: props.actionProvider.handleCategoryTypeTakeaway,
      id: 2,
    },
    {
      text: "Dine-out",
      handler: props.actionProvider.handleCategoryTypeDineOut,
      id: 3,
    },
  ];

  const buttonsMarkup = CategoryTypes.map((option) => (
    <button key={option.id} onClick={option.handler} className="categoryType-button">
      {option.text}
    </button>
  ));

  return <div className="categoryTypes-container">{buttonsMarkup}</div>;
};

export default CategoryTypes;