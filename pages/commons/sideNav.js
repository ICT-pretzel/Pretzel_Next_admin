// 사이드 메뉴바 - 다현

"use client";

import { usePathname, useRouter } from "next/navigation";
import { ColorOrange } from "../../styles/commons/commonsCSS";
import { AdminName, AdminNameContainer, Logo, Menus, SideNavContainer } from "../../styles/sideNavCSS";
import { AdminContext } from "../../stores/StoreContext";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const SideNav = observer(() => {
    const adminStore = useContext(AdminContext)
    const router = useRouter();

    // 현재 경로 가져오기
    const currentPath = usePathname();

    return (
        <SideNavContainer>
            <AdminNameContainer>
                <AdminName><ColorOrange>{adminStore.name}</ColorOrange>님</AdminName>
            </AdminNameContainer>
            <Menus onClick={() => router.push('/dashboard/dashboardPage')} active={currentPath.startsWith('/dashboard')}>대시보드</Menus>
            <Menus onClick={() => router.push('/userManage/userManagePage')} active={currentPath.startsWith('/userManage')}>회원 관리</Menus>
            <Menus onClick={() => router.push('/movieManage/movieManagePage')} active={currentPath.startsWith('/movieManage')}>콘텐츠 관리</Menus>
            <Menus onClick={() => router.push('/QnAManage/QnAManagePage')} active={currentPath.startsWith('/QnAManage')}>1:1 문의</Menus>
            <Menus onClick={() => router.push('/reportManage/reportManagePage')} active={currentPath.startsWith('/reportManage')}>신고 관리</Menus>
            <Menus onClick={() => router.push('/adminManage/adminManagePage')} active={currentPath.startsWith('/adminManage')}>관리자 관리</Menus>
            <Logo>pretzel</Logo>
        </SideNavContainer>
    )
})

export default SideNav;