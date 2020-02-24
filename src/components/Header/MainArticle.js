import React from 'react'

const articleList =[
  {
    id: 1,
    title: "What is React all about?",
    body:
      "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    author: "Bryan",
    date: "24/02/2020"
  },
  {
    id: 2,
    title: "A lovely kid",
    body: "In fact, a kid is also the name of a baby goat!",
    author: "Bryan",
    date: "24/02/2020"
  },
  {
    id: 3,
    title: "On placeholder image URLs",
    body:
      "So yeah, you won't be able to look these images up. They're placeholders",
      author: "Bryan",
    date: "24/02/2020"
  },
  {
    id: 4,
    title: "On placeholder image URLs",
    body:
      "So yeah, you won't be able to look these images up. They're placeholders",
      author: "Bryan",
    date: "24/02/2020"
  }

]

export default function MainArticle() {
  return (
    articleList.map(article => {
      return(
        <div>
          <h1>{article.title}</h1>
          <h1>Author: {article.author}</h1>
          <h2>date: {article.date}</h2>
          <p>{article.body}</p>
        </div>         
        )
      }
    ) 
  )
}