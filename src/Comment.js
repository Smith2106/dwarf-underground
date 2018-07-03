import React from 'react';

const Comment = props => {
    return (
        <li className="comment">
            <span className="comment-username">{props.username}</span>
            <span className="comment-content">{props.content}</span>
        </li>
    );
};

export default Comment;