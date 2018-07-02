import React from 'react';

import ArticleText from './ArticleText.js';

const Article = () => {
    return (
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <div className="avatar">
                <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
                <div className="author-info">
                    <p className="author-name">By Domri, son of Flug</p>
                    <p className="date">on 28 April, 3018 of the Third Age</p>
                </div>
            </div>
            <ArticleText />
            <div className="article-links">
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
            </div>
        </div>
    );
};

export default Article;