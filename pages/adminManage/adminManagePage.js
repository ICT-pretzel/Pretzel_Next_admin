"use client";

import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { AddAdminBtn, AdminContainer, AdminContainer_inner, AdminInfo, AdminInfo_Title, AdminNum, Admin_ID, Admin_Right, Admin_State, ButtonsContainer, StateBtn } from "../../styles/adminManageCSS";
import { ColorOrange } from "../../styles/commons/commonsCSS";

const AdminManagePage = () => {
    return (
        <>
            <AdminPageTitle>관리자 관리</AdminPageTitle>
            <ButtonsContainer>
                {/* mobx 사용? */}
                <AdminNum>총 관리자 <ColorOrange>5</ColorOrange></AdminNum>
                <AddAdminBtn>관리자 추가</AddAdminBtn>
            </ButtonsContainer>
            <AdminContainer>
                <AdminContainer_inner>
                    <AdminInfo_Title>
                        <Admin_ID>관리자 아이디</Admin_ID>
                        <Admin_Right>권한</Admin_Right>
                        <Admin_State>상태</Admin_State>
                    </AdminInfo_Title>
                    <AdminInfo>
                        <Admin_ID>관리자 아이디</Admin_ID>
                        <Admin_Right>권한</Admin_Right>
                        <Admin_State><StateBtn>활성화</StateBtn></Admin_State>
                    </AdminInfo>
                </AdminContainer_inner>
            </AdminContainer>
        </>
    )
}

export default AdminManagePage;