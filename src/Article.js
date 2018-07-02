import React from 'react';

import ArticleText from './ArticleText';
import ArticleLinks from './ArticleLinks';
import ArticleAuthor from './ArticleAuthor';

const Article = () => {
    return (
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <ArticleAuthor />
            <ArticleText />
            <ArticleLinks />
        </div>
    );
};

export default Article;