import React, {useState, useEffect} from 'react'
// import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.js'
import ArticleCard from './components/ArticleCard/ArticleCard.js'
import axios from "axios"
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, set_articles] = useState([]);
  const [state, set_state] = useState('Top stories for today')
  const [likeArray] = useState ([])

  // Initial fetch Data from API with key & set state with response.data
  useEffect(() => {
    async function doSomeDataFetching() {
      const res = await axios.get('http://newsapi.org//v2/top-headlines?'+
      'country=us&' +
      'apiKey=ba192a7497304eb795dcfc1aeb2669bc')
      const new_arr =  res.data.articles.map( article => {
        const articleWithComments = article
        articleWithComments.comment = []
        return articleWithComments
      })
      set_articles(new_arr)
    }
    doSomeDataFetching()
  }, []);

  // Initialise a function that is triggered on click in the Article Card that
  // overwites the status to == "Like" or "Unlike"

  const ifLike = (id, status) => {

    const changedLike = articles.map((article, index) => {
      if(id === index) {
        article.status = status
        if(status === 'Unlike') {
          likeArray.push(article)
        }
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
          const new_arr =  res.data.articles.map( article => {
          const articleWithComments = article
          articleWithComments.comment = []
          return articleWithComments
        })
        set_articles(new_arr)
    } 
    // Render based on keyword search
    else {
      const res = await axios.get(
        `http://newsapi.org//v2/everything?`+
        `q=${searchword}&` +
        `apiKey=ba192a7497304eb795dcfc1aeb2669bc`)
        const new_arr =  res.data.articles.map( article => {
          const articleWithComments = article
          articleWithComments.comment = []
          return articleWithComments
        })
      new_arr.length === 0 ? 
                    set_state(`No stories based on search... '${searchword}'`)
                    :set_state(`${new_arr.length} stories based on search... '${searchword}'`)

      set_articles(new_arr)
    }
  }


//Filter function to show only users liked stories

//Remove duplicate stories from Liked Array incase liked & unliked & liked again etc....

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}
// Filter only the likes (as Array.push doesn't remove when unliked)

  const filterLikes = () => {
    set_state('Finding your liked articles') 
    let filterArr = likeArray.filter(article => article.status === 'Unlike')
    filterArr = removeDuplicates(filterArr, 'description')
    set_state(`You have liked ${filterArr.length} articles`)
    set_articles(filterArr)
  }

  const addComment = (comment, id) => {
    const newComment = articles.map((article, index) => {
      if(index === id) {
        article.comment = [...article.comment , comment]
      } return article
    })
      set_articles(newComment)
  } 

  //Return Mapped articles 1 by 1 into Article Card with placeholder status of
  // "Like" until triggered to change 
  //Cannot use props.key in article card so ID added
  
  return (
    <div>
      <Header ifLike={ifLike}
              search={search}
              filterLikes={filterLikes} />
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
            comment={article.comment}
            addcomment={addComment}
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
