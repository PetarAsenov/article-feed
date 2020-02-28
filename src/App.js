import React, {useState, useEffect} from 'react'
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.js'
import ArticleCard from './components/ArticleCard/ArticleCard.js'
import axios from "axios"
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, set_articles] = useState([]);
  const [state, set_state] = useState('Top stories for today')

  // Initial fetch Data from API with key & set state with response.data
  useEffect(() => {
    async function doSomeDataFetching() {
      const res = await axios.get('http://newsapi.org//v2/top-headlines?'+
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

  // Article Search function

  const search = async (searchword) => {
    set_state('searching...')

    // If searchword is blank, render top stories page - can probably use history or use Params here!
    if(!searchword) {
      set_state('Top stories for today')
        const res = await axios.get('http://newsapi.org//v2/top-headlines?'+
        'country=us&' +
        'apiKey=ba192a7497304eb795dcfc1aeb2669bc')
        set_articles(res.data.articles)
    } 
    // Render based on keyword search
    else {
      const res = await axios.get(
        `http://newsapi.org//v2/everything?`+
        `q=${searchword}&` +
        `apiKey=ba192a7497304eb795dcfc1aeb2669bc`)

      const results = res.data.articles
      results.length === 0 ? 
                    set_state(`No stories based on search... '${searchword}'`)
                    :set_state(`${results.length} stories based on search... '${searchword}'`)

      set_articles(res.data.articles)
    }
  }

  //Return Mapped articles 1 by 1 into Article Card with placeholder status of
  // "Like" until triggered to change 
  //Cannot use props.key in article card so ID added
  
  return (
    <div>
      <Header ifLike={ifLike}
              search={search} />
      <h1 className='headline'>{state}</h1>
      <div className="mb-4 ml-3 mr-3 row articles">
{/* 
      <Switch>
        <Route path="/likedarticles" component={LikedStories} />
        <Route path="/" component={App} />
      </Switch>
       */}
      {articles.map((article, index) => {
        const dateFormat = moment(article.publishedAt).format("MMM Do YYYY")
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
