import React from 'react';

const CommentInput = () => {
    return (
        <form>
            <input type="text" name="username" placeholder="Enter a username." />
            <textarea id="advanced" name="advanced"
                rows="3" cols="33" maxlength="200"
                wrap="hard"
                placeholder="Leave a comment."
                name="Comment">
            </textarea>
            <button type="submit" className="article-link">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comment</span>
            </button>
        </form>
    );
};

export default CommentInput;