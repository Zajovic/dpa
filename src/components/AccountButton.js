import React from 'react';
import { Button } from '@blueprintjs/core';

const AccountButton = () => {
    return (
        <div className="account-button_box">
            <Button className="account-button" icon="user" rightIcon="caret-down" text="Profile settings" />
        </div>
    )
}

export default AccountButton;