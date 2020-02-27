import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header.js'
import ArticleCard from './components/ArticleCard/ArticleCard.js'
import axios from "axios"
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, set_articles] = useState([]);

  // Fetch Data from API with key & set state with response.data
  useEffect(() => {
    async function doSomeDataFetching() {
      const res = await axios.get('http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=ba192a7497304eb795dcfc1aeb2669bc')
      set_articles(res.data.articles)
    }
    doSomeDataFetching()
  }, []);

  const ifLike = (id, status) => {

  // Initialise a function that is triggered on click in the Article Card that
  // overwites the status to == "Like" or "Unlike"
    const changedLike = articles.map((article, index) => {
      if(id === index) {
        article.status = status
      }
      return article
    })
    set_articles(changedLike)
  }

  //Return Mapped articles 1 by 1 into Article Card with placeholder status of
  // "Like" until triggered to change 
  //Cannot use props.key in article card so ID added
  
  return (
    <div className="App">
      <Header ifLike={ifLike} />
      <div className="mb-4 ml-3 mr-3 row">
      
      {articles.map((article, index) => {
        const dateFormat = moment(article.publishedAt).format("MMM Do YY")
        return(
          <div className="col-lg-4 d-flex align-items-stretch mb-4">
            <ArticleCard
            key={index}
            id={index}
            title={article.title} 
            content={article.content} 
            link={article.url} 
            pic={article.urlToImage} 
            date={dateFormat}
            status={article.status || 'Like'}
            ifLike={ifLike} 
            />
          </div> 
        )
      }
      )}
      
    </div>
    </div>
  );
}

export default App;
