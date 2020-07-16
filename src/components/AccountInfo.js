import React from 'react';

const AccountInfo = (props) => {
    return (
        <div className="account-info">
            <div>
                <img src={props.img} style={{ height: "150px", width: "auto", borderRadius: "50%" }} alt="prof-photo" />
            </div>
            <div className="account-info_generals">
                <p>{props.name}</p>
                <p>{props.bday}</p>
                <p>{props.gender}</p>
            </div>
        </div>
    )
}

export default AccountInfo;