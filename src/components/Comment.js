import React from 'react';
import { TextArea, Button } from '@blueprintjs/core'
import '../css/scss/components/_comment.scss'

/*

    ako vec koristsis UI bilbioteku, onda koristi njene komponente

    jeste vrlo "Bootstrap-stil" da se redjaju imena klasa, ali onda gubis bukvalno sve ostalo od fukncionalnosti koja stize za komponentama iz blibloteke (iz BlueprintJS-a)

    ovo je vise kao predlog, nego sto je "must do"

*/

const Comment = () => {
    return (
        <div className="comment">
            <div className="comment-field_box">
                <TextArea
                    fill
                    className="comment-field"
                    style={{
                        resize: "none" // mada ovo onda ide u .comment-field
                    }}
                    value={"todo"}
                    onChange={(e) => {
                        // onChange(e.target.value)
                    }}
                />

                {/* <textarea className="bp3-input bp3-fill .modifier comment-field" dir="auto" resize="none"></textarea> */}
            </div>
            <div className="comment-button_box">
                <Button className="comment-button" text="Send" />
                {/* <button type="submit" className="bp3-button comment-button .modifier">Send</button> */}
            </div>
        </div>
    )
}

export default Comment;