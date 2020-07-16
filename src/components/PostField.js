import React from 'react';

import '../css/scss/components/_post-field.scss';


const PostField = () => {
    return (
        <div className="post-box">
            <textarea class="bp3-input .modifier post-field" placeholder="Write a post and hit the enter" dir="auto"></textarea>
        </div>
    )
}

export default PostField;