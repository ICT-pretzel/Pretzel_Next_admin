// 사이드 메뉴바 - 다현

"use client";

import { ColorOrange, Icon24px } from "../styles/commons/commonsCSS";
import { AdminName, AdminNameContainer, Logo, Menus, SideNavContainer } from "../styles/sideNavCSS";

const SideNav = () => {
    return (
        <SideNavContainer>
            <AdminNameContainer>
                <AdminName><ColorOrange>전체관리자</ColorOrange>님</AdminName>
                <Icon24px src='/images/icons/doubleArrowLeft.png' />
            </AdminNameContainer>
            <Menus>대시보드</Menus>
            <Menus>회원 관리</Menus>
            <Menus>콘텐츠 관리</Menus>
            <Menus>1:1 문의</Menus>
            <Menus>신고 관리</Menus>
            <Menus>관리자 생성</Menus>
            <Logo>pretzel</Logo>
        </SideNavContainer>
    )
}

export default SideNav;