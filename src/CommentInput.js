import React from 'react';

const CommentInput = props => {
    return (
        <form onSubmit={(e) => props.onSubmit(e)}>
            <input type="text" name="username" placeholder="Enter a username." autoFocus />
            <textarea id="advanced" name="advanced"
                rows="3" cols="33" maxLength="200"
                wrap="hard"
                placeholder="Leave a comment."
                name="content">
            </textarea>
            <div className="comment-btn">
                <button type="submit" className="article-link">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comment</span>
                </button>
            </div>
        </form>
    );
};

export default CommentInput;