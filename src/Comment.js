import React from 'react';

const Comment = props => {
    return (
        <li className="comment">
            <span className="comment-username"><i className="fa fa-user"></i>  {props.username}</span>
            <span className="comment-content"><i className="fa fa-commenting"></i>  {props.content}</span>
        </li>
    );
};

export default Comment;