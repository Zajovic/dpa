import React from 'react';
import '../css/scss/components/_comment.scss'


const Comment = () => {
    return (
        <div className="comment">
            <div className="comment-field_box">
                <textarea className="bp3-input bp3-fill .modifier comment-field" dir="auto" resize="none"></textarea>
            </div>
            <div className="comment-button_box">
                <button type="submit" className="bp3-button comment-button .modifier">Send</button>
            </div>
        </div>
    )
}

export default Comment;