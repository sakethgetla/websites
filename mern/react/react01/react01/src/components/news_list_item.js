import React from 'react';
// import { css } from 'glamor';

const NewsListItem = ({item}) => {

    // let news_item = css({
    //     padding:'20px',
    //     boxSizing:'border-box',
    //     borderBottom:'1px solid grey',
    //     ':hover':{
    //         color:'red'
    //     },
    //     '@media(max-width:500px)':{
    //         color:'blue'
    //     }
    // });

    // let item_back = css({
    //     background:'grey'
    // })

    return(
        <div className="news_item">
            <h3>{ item.title}</h3>
            <div>
                { item.feed}
            </div>
        </div>
    )
}

export default NewsListItem;