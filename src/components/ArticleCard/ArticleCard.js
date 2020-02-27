import React, {useState} from "react";
import Card from 'react-bootstrap/Card'


export default function ArticleCard(props) {

  const changeLike = () => {

      if(props.status === 'Like') {
        props.ifLike(props.id, "Unlike")
    } else if (props.status === 'Unlike') {
        props.ifLike(props.id, "Like")
    }

  }

  return (
  <Card>
    <Card.Img variant="top" src={props.pic} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.content}
      </Card.Text>
      <Card.Text>
      <a href={props.link}>Click for full article</a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.date}</small>
      <div>
      <p>
       <button onClick={changeLike}>{props.status}</button>
      </p>
    </div>
    </Card.Footer>
  </Card>
  );
}





