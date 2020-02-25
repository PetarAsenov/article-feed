import React from "react";

export default function ArticleCard(props) {
  return (
    <div className="Article">
      <h2>{props.title}</h2>
      <h4>{props.link}</h4>
      <p>{props.content}</p>
      <img 
      
      src={props.pic}
      alt="new pic" height="200px" width="400px"
      />
      <p>{props.date}</p>
    </div>
  );
}