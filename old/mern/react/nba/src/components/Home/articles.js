import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { URL_POSTS } from '../utils/paths';

const HomeArticles = () => {
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async ()=>{
      const response = await axios.get(`${URL_POSTS}?_limit=6&_sort=id&_order=desc`)
      console.log(response.data);
      setArticles(response.data)
    }
    fetchArticles();
    //console.log('articles')
  }, [])

  const genArticles = articles.map((article, i) => (
    <div
      key={i}
      className='block_item'
    >
      <div
        style={{
          background: `url(/images/blocks/${article.image}) no-repeat`
        }}
        className='block_image'
      />
      {article.title}
    </div>
  ))

      //<div
      //  key = {i}
      //  className='block_image'
      //  style={{
      //    background: `url(/images/blocks/${article.image}) no-repeat`
      //  }}
      //>
      //</div>
    //<div key={ i } className='row'>
    //  <div className="top">
    //    <div className="veil"></div>
    //    <div 
    //      className='block_image'
    //      style={{
    //        background: `url(/images/blocks/${article.image}) no-repeat`
    //      }}
    //    >
    //    </div>
    //  </div>
    //</div>

  console.log(articles);
  return(
    <>
      {genArticles}
    </>
  )
}

export default HomeArticles;
