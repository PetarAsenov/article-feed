import React, {useState, useEffect} from 'react'
import ArticleCard from '../ArticleCard/ArticleCard.js'
import axios from "axios"
import moment from 'moment'
// import CardDeck from 'react-bootstrap/CardDeck'

// array.sort(function(a,b){
//   // Turn your strings into dates, and then subtract them
//   // to get a value that is either negative, positive, or zero.
//   return new Date(b.date) - new Date(a.date);
// });


export default function ArticleList() {
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

  return (
    <div className="mb-4 ml-3 mr-3 row">
      
      {articles.map((article, index) => {
        const dateFormat = moment(article.publishedAt).format("MMM Do YY")
        return(
          <div className="col-lg-4 d-flex align-items-stretch mb-4">
            <ArticleCard
            key={index}
            title={article.title} 
            content={article.content} 
            link={article.url} 
            pic={article.urlToImage} 
            date={dateFormat} />
          </div> 
        )
      }
      )}
      
    </div>
  );
}