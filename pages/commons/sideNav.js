// 사이드 메뉴바 - 다현

"use client";

import { usePathname, useRouter } from "next/navigation";
import { ColorOrange } from "../../styles/commons/commonsCSS";
import { AdminName, AdminNameContainer, Logo, Menus, SideNavContainer } from "../../styles/sideNavCSS";

const SideNav = () => {
    const router = useRouter();

    const currentPath = usePathname(); // 현재 경로 가져오기

    return (
        <SideNavContainer>
            <AdminNameContainer>
                <AdminName><ColorOrange>전체관리자</ColorOrange>님</AdminName>
            </AdminNameContainer>
            <Menus>대시보드</Menus>
            <Menus onClick={() => router.push('/userManage/userManagePage')} active={currentPath.startsWith('/userManage')}>회원 관리</Menus>
            <Menus onClick={() => router.push('/movieManage/movieManagePage')} active={currentPath.startsWith('/movieManage')}>콘텐츠 관리</Menus>
            <Menus onClick={() => router.push('/QnAManage/QnAManagePage')} active={currentPath.startsWith('/QnAManage')}>1:1 문의</Menus>
            <Menus onClick={() => router.push('/reportManage/reportManagePage')} active={currentPath.startsWith('/reportManage')}>신고 관리</Menus>
            <Menus onClick={() => router.push('/adminManage/adminManagePage')} active={currentPath.startsWith('/adminManage')}>관리자 관리</Menus>
            <Logo>pretzel</Logo>
        </SideNavContainer>
    )
}

export default SideNav;