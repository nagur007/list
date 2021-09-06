import React from 'react';
import Item from './item';
import ArticleData from '../utils/data';

export default function List(props) {
    return (
        <>
            {ArticleData()?.result?.articles?.map((article) => (
                <Item thumbnail_url={ArticleData()?.result?.thumbnail_url} article={article} />
            ))}
        </>
    );
};