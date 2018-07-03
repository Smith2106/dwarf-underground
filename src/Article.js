import React, { Component } from 'react';

import ArticleText from './ArticleText';
import ArticleLinks from './ArticleLinks';
import ArticleAuthor from './ArticleAuthor';
import ArticleComments from './ArticleComments';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayComments: false,
            commentList: JSON.parse(localStorage.getItem('commentList')) || [],
        };
    }

    onClick() {
        this.setState({ displayComments: !this.state.displayComments });
    }

    onSubmit(e) {
        e.preventDefault();
        const newComments = [...this.state.commentList]
        newComments.push({
            username: e.target.username.value,
            content: e.target.content.value,
        });

        localStorage.setItem('commentList', JSON.stringify(newComments));

        this.setState({
            commentList: newComments,
        });

        e.target.reset();
        e.target.username.focus();
    }

    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <ArticleAuthor />
                <ArticleText />
                <ArticleLinks onClick={() => this.onClick()}/>
                <br/>
                {this.state.displayComments ? <ArticleComments onSubmit={(e) => this.onSubmit(e)} commentList={this.state.commentList} /> : ''}
            </div>
        );
    }
};

export default Article;