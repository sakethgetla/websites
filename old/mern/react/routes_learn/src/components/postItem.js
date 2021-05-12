import React from 'react';


function PostItem(props) {
    console.log(props)
    console.log(props.match.params.id)
  return (
    < >
        PostItem : {props.match.params.id}
    </>
  );
}

export default PostItem;

