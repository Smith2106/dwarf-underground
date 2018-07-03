import React, { Component } from 'react';

import ArticleText from './ArticleText';
import ArticleLinks from './ArticleLinks';
import ArticleAuthor from './ArticleAuthor';
import ArticleComments from './ArticleComments';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { displayComments: false };
    }

    onClick() {
        this.setState({ displayComments: !this.state.displayComments });
    }

    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <ArticleAuthor />
                <ArticleText />
                <ArticleLinks onClick={() => this.onClick()}/>
                <br/>
                {this.state.displayComments ? <ArticleComments /> : ''}
            </div>
        );
    }
};

export default Article;