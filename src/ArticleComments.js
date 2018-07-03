import React from 'react';

import CommentInput from './CommentInput';
import Comment from './Comment';

const ArticleComments = props => {
    return (
        <div className="article-comments">
            <CommentInput onSubmit={(e) => props.onSubmit(e)}/>
            <ul className="comments">
                {props.commentList.map(comment => <Comment username={comment.username} content={comment.content} key={comment.username}/>)}
            </ul>
        </div>
    );
};

export default ArticleComments;