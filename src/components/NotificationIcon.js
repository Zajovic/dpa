import React from 'react';

import { Icon } from "@blueprintjs/core";

import '../css/scss/components/_notification-icon.scss';


const NotificationIcon = (props) => {

    return (
        <div className="notification-icon">
            <div>
                <Icon className="notification-bell" icon="notifications" iconSize={20} />
            </div>
            <div className="notification-number">
                {props.notificationNumber}
            </div>
        </div>

    )

}

export default NotificationIcon;