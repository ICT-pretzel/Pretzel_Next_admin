"use client"

// 공통 css 적용
import '../styles/commons/reset.css'
import '../styles/commons/font.css'
import '../styles/commons/commons.css'

import SideNav from './commons/sideNav';
import { AdminContentContainer, AllAdminContainer, Whitespace } from '../styles/adminCommonCSS';
import TopBtn from './commons/topBtn';
import LogoutBtn from './commons/logoutBtn';
import { observer } from 'mobx-react-lite';

const Common = observer(({ children }) => {

    return (
        <>
            <SideNav />
            <AllAdminContainer>
                <Whitespace />
                <AdminContentContainer>
                    {children}
                </AdminContentContainer>
            </AllAdminContainer >
            <TopBtn />
            <LogoutBtn />
        </>
    );
})

export default Common;