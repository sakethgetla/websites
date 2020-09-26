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
    <div key={ i } className='row'>
      {article.title}
    </div>
  ));

  //console.log(articles);
  return(
    <>
      {genArticles}
    </>
  )
}

export default HomeArticles;
