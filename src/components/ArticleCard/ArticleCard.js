import React, {useState} from "react";
import Card from 'react-bootstrap/Card'


export default function ArticleCard(props) {
  const initLike = false;
  const [like, set_like] = useState(initLike); // <- using state!
  
  const ifLike = () => {
    set_like(!like);
  };

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
        <button onClick={ifLike}>{like ? "Like" : "Unlike"}</button>
      </p>
      
    </div>
    </Card.Footer>
  </Card>
  );
}





