import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


export default function ArticleCard(props) {
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
    </Card.Footer>
  </Card>
  );
}





