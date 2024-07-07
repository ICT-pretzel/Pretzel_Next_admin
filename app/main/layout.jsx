"use client"
import '../../styles/commons/reset.css'
import '../../styles/commons/font.css'
import '../../styles/commons/commons.css'
import { AdminContentContainer, AllAdminContainer, Whitespace } from '../../styles/adminCommonCSS'
import SideNav from './commons/sideNav/page'
import TopBtn from './commons/topBtn/page'
import LogoutBtn from './commons/logoutBtn/page'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { LoginContext } from '../../stores/StoreContext'
import { useRouter } from 'next/navigation'

const Layout = observer((props) => {
    const loginStore = useContext(LoginContext)
    const router = useRouter()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        console.log("????",token)
        if (token) {
            console.log("뭐지")
            loginStore.setToken(localStorage.getItem('token'), localStorage.getItem('admin_id'), localStorage.getItem('name'), localStorage.getItem('role'))
        }else{
            router.push("../adminLoginPage")
        }
    },[])
    return (
        <div>
            <SideNav />
            <AllAdminContainer>
                <Whitespace />
                <AdminContentContainer>
                    {props.children}
                </AdminContentContainer>
            </AllAdminContainer>
            <TopBtn />
            <LogoutBtn />
        </div>
    );
});

export default Layout;