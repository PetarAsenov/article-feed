import React, {useState} from "react";
import Card from 'react-bootstrap/Card'


export default function ArticleCard(props) {

  //Trigger function calling back to App.js to reset state with new status
  const changeLike = () => {
    props.status === 'Like' ? props.ifLike(props.id, 'Unlike')
                            : props.ifLike(props.id, "Like")                  
  }

  // Function to add comment

  const [comment, set_comment] = useState([]);

  const addNewComment = () => {
    props.addcomment(comment, props.id)
    set_comment("")
  }

  return (
  <Card className='Card'>
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
      <p>{props.comment}</p>
      <small className="text-muted">{props.date}</small>
      <div>
      <p>
       <button onClick={changeLike}>{props.status}</button>
      </p>
      <p className='commentbox'>
        Add a comment:{" "}
        <input value={comment} onChange={e => set_comment(e.target.value)} type="text" placeholder="Your Comment" />{" "}
        <button onClick={addNewComment}>Add</button>
      </p>
    </div>
    </Card.Footer>
  </Card>
  );
}





