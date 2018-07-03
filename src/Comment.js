import React from 'react';

const Comment = props => {
    const comment = props.commentInfo;
    return (
        <li className="comment">
            <span className="comment-username">
                <i className="fa fa-user"></i> {comment.username}
                <span className="vote upvote" onClick={(e) => props.handleVote(e)}><i className="fa fa-arrow-up" data-modify={comment.content}></i></span>
                <span className="score"> {comment.score}</span>
            </span>
            <span className="comment-content">
                <i className="fa fa-commenting"></i>  {comment.content}
                <span className="vote downvote" onClick={(e) => props.handleVote(e)}><i className="fa fa-arrow-down" data-modify={comment.content}></i></span>
            </span>
        </li>
    );
};

export default Comment;