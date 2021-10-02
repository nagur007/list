import React from 'react'
import './mystyle.css'
import ArticleData from '../utils/data';

const Item = (props) => {
    const article = props.article;
    const thumbnail_url = props.thumbnail_url;
    
    return (
        <>
            <div className="container maintag">
                <div className="row gx-5 gy-4">
                    {ArticleData()?.result?.articles?.map((article) => {
                        return(
                        <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-4 container-hover" key={article.id}>
                                    <img src={ArticleData()?.result?.thumbnail_url + article.image_url} alt="image" className="img-fluid img_rounded" />
                                    <h4 className="pb-5">{article.title}</h4>
                                    <h6 className="lh-1 fw-bold">by <b>{article.author}</b></h6>
                                    <p className="lh-1">Publised on: <b>{article.created_at}</b></p>
                        </div>
                        )})}
                </div>
            </div>
        </>
    )
};

export default Item;