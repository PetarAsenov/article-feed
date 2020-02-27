import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header.js'
import ArticleCard from './components/ArticleCard/ArticleCard.js'
import axios from "axios"
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, set_articles] = useState([]);
  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get('http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=ba192a7497304eb795dcfc1aeb2669bc')
      http://newsapi.org/v2/top-headlines?country=us&apiKey=ba192a7497304eb795dcfc1aeb2669bc
      console.log("Got back:", res.data.articles);
      set_articles(res.data.articles)
    }
    doSomeDataFetching()
  }, []);

  const ifLike = (id, status) => {

    const changedLike = articles.map((article, index) => {
      if(id === index) {
        article.status = status
      }
      return article
    })
    set_articles(changedLike)
  }

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
