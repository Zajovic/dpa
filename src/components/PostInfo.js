import React from 'react';
import '../css/scss/components/_post-info.scss';


const InfoPost = () => {
    return (
        <div className="post-info">
            <div className="post-img">
                <img src={require("../images/ProfilePhoto.jpg")} style={{ height: "60px", width: "auto", borderRadius: "50%" }} alt="prof-photo" />
            </div>
            <div>
                <div className="post-author">Milos Zajovic</div>
                <div className="post-time">12.06.20011</div>
            </div>
        </div>
    )
}

export default InfoPost;