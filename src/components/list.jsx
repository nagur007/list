import React from 'react';
import ArticleData from '../utils/data';
import './mystyle.css'

const List = (props) => {
    const article = props.article;
    const thumbnail_url = props.thumbnail_url;
    
    return (
        <>
            <div className="container maintag">
                <div className="row gx-5 gy-4">
                    {ArticleData()?.result?.articles?.map((article) => {
                        return(
                        <div className="col-12 col-xs-12 col-sm-6 col-md-6 container-hover" key={article.id}>
                            <div className="row row_style image-container container_height">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-2">
                                    <img src={ArticleData()?.result?.thumbnail_url + article.image_url} alt="image" className="img-fluid img_rounded" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
                                    <h4 className="pb-5 imgtitle">{article.title}</h4>
                                    <h6 className="lh-1 fw-bold"><span className="publish"> by </span> <b className="author">{article.author}</b></h6>
                                    <p className="publish">Publised on: <span className="datetime">{article.created_at}</span> </p>
                                </div>
                            </div>
                        </div>
                        )})}
                </div>
            </div>
        </>
    )
};

export default List;