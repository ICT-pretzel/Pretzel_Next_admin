// 사이드 메뉴바 - 다현

"use client";

import { useRouter } from "next/navigation";
import { ColorOrange } from "../../styles/commons/commonsCSS";
import { AdminName, AdminNameContainer, Icon, Logo, Menus, SideNavContainer } from "../../styles/sideNavCSS";

const SideNav = () => {
    const router = useRouter();

    return (
        <SideNavContainer>
            <AdminNameContainer>
                <AdminName><ColorOrange>전체관리자</ColorOrange>님</AdminName>
            </AdminNameContainer>
            <Menus>대시보드</Menus>
            <Menus onClick={() => router.push('/userManage/userManagePage')}>회원 관리</Menus>
            <Menus onClick={() => router.push('/movieManage/movieManagePage')}>콘텐츠 관리</Menus>
            <Menus onClick={() => router.push('/QnAManage/QnAManagePage')}>1:1 문의</Menus>
            <Menus onClick={() => router.push('/reportManage/reportManagePage')}>신고 관리</Menus>
            <Menus onClick={() => router.push('/adminManage/adminManagePage')}>관리자 관리</Menus>
            <Logo>pretzel</Logo>
        </SideNavContainer>
    )
}

export default SideNav;