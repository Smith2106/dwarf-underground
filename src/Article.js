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
            score: 0,
        });

        localStorage.setItem('commentList', JSON.stringify(newComments));

        this.setState({
            commentList: newComments,
        });

        e.target.reset();
        e.target.username.focus();
    }

    handleVote(e) {
        e.preventDefault();
        const classes = e.target.classList.value;
        const newList = [...this.state.commentList];
        const comment = newList.find(comment => comment.content === e.target.dataset.modify);
        classes.includes('up') ? comment.score++: comment.score--;
        console.log(comment.score);
    
        this.setState({
            commentList: newList,
        });

        localStorage.setItem('commentList', JSON.stringify(this.state.commentList));
    }

    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <ArticleAuthor />
                <ArticleText />
                <ArticleLinks onClick={() => this.onClick()}/>
                <br/>
                {this.state.displayComments ? <ArticleComments onSubmit={(e) => this.onSubmit(e)} commentList={this.state.commentList} handleVote={(e) => this.handleVote(e)} /> : ''}
            </div>
        );
    }
};

export default Article;