import React from 'react';

const Comment = props => {
    return (
        <li className="comment">
            <span className="comment-username">
                <i className="fa fa-user"></i>  {props.username}
                <span className="vote upvote"><i className="fa fa-arrow-up"></i></span>
            </span>
            <span className="comment-content">
                <i className="fa fa-commenting"></i>  {props.content}
                <span className="vote downvote"><i className="fa fa-arrow-down"></i></span>
            </span>
        </li>
    );
};

export default Comment;