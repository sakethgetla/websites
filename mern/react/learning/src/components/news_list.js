
import React from 'react';

import NewsListItem from './news_list_item';

//const NewsList = ({news}) => {
const NewsList = (props) => {
    //console.log(news)
    console.log(props)
    
    const news = props.news.map((nn)=>(
        <NewsListItem item={ nn } key={nn.id}/>
    ))

    return (
        <div>
            { news }
        </div>
    )
}

export default NewsList;
