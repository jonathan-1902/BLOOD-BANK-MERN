import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { userMenu } from './userMenu'
import { adminUserMenu } from './userMenu';
import '../../../styles/Layout.css';
import { userLoginContextObj } from '../../../Context/userLoginContext';
import { organizationUserMenu } from './userMenu';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {

    let { currentUser } = useContext(userLoginContextObj);
    // console.log(currentUser);

    const location = useLocation();
    if (currentUser.role === 'donor') {
        return (
            <>
                <SidebarMenu Key={userMenu} />
            </>
        )
    }
    else if (currentUser.role === 'admin') {
        return (
            <>
                <SidebarMenu Key={adminUserMenu} />
            </>
        )
    }
    else if (currentUser.role === 'organization') {
        return (
            <>
                <SidebarMenu Key={organizationUserMenu} />
            </>
        )
    }
}

export default Sidebar
