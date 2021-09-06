import React from 'react'

const Item = (props) => {
    const article = props.article;
    const thumbnail_url = props.thumbnail_url;
        return(
        <>
            <h2>{article.title}</h2>
            <h3>by {article.author}</h3>
            <span>Publised on: {article.created_at}</span>
            <div>
                <img src={thumbnail_url + article.image_url} />
            </div>
        </>
    )
};

export default Item;