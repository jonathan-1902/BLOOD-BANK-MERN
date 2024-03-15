import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SidebarMenu = (props) => {



    const location = useLocation();

    return (
        <>
            <div>
                <div className='sidebar'>
                    <div className='menu'>
                        {

                            props.Key.map((menu) => {
                                const isActive = location.pathname === menu.path
                                return (
                                    <div
                                        className={`menu-item ${isActive && 'active'}`}
                                        // className={'menu-item'}

                                        key={menu.name}
                                    >

                                        <i className={menu.icon}></i>
                                        <Link to={menu.path}>{menu.name}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarMenu
