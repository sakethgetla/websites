
import React from 'react';

const NewsListItem = (props) => {
    console.log('props')
    console.log(props)

    return (
        <>
            <h3> 
                {props.item.id}. {props.item.title}
            </h3>
            <div> 
                {props.item.feed}
            </div>
            <br/> 
        </>
    )
        //<div> this is the news, 5 + 5 = {5+5} </div>
}

export default NewsListItem;
