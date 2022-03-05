import React, { useState } from 'react';
import styled from 'styled-components';
// components
import UserPopup from './popups/UserPopup';

import userIcon from '../assets/icons/user.svg'

const User = () => {

    const [ userPop, setUserPop ] = useState(false);

    return (
        <>
            <Div onClick={() => setUserPop(!userPop)}>
                <img src={userIcon} alt="" />
            </Div>
            {userPop && <UserPopup />}
        </>
    );
};

const Div = styled.div`
    width: 30px;
    height: 30px;
    font-weight: bold;
    cursor: pointer;
    img {
        width: 25px;
    }
`;

export default User;