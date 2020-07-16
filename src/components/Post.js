import React from 'react';

import PostInfo from '../components/PostInfo';
import PostContent from '../components/PostContent';
import CommentButton from '../components/CommentButton';

import '../css/scss/components/_post.scss';


const Post = () => {
    return (
        <div className="past-wrapper">
            <PostInfo />
            <PostContent />
            <CommentButton />
        </div>
    )
}

export default Post;