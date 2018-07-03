import React from 'react';

import CommentInput from './CommentInput';

const ArticleComments = () => {
    return (
        <div class="article-comments">
            <CommentInput />
            <ul class="comments">
                
            </ul>
        </div>
    );
};

export default ArticleComments;