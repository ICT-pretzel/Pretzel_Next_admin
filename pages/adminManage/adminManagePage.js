"use client";

import { useContext, useEffect, useState } from "react";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { AddAdminBtn, AdminContainer, AdminContainer_inner, AdminInfo, AdminInfo_Title, AdminNum, Admin_ID, Admin_Reg, Admin_Right, Admin_State, ButtonsContainer } from "../../styles/adminManageCSS";
import { ColorOrange } from "../../styles/commons/commonsCSS";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { AdminContext } from "../../stores/StoreContext";

const AdminManagePage = observer(() => {
    const adminStore = useContext(AdminContext)

    // 관리자 리스트
    const [adminList, setAdminList] = useState([]);

    // 리렌더링 될 때마다 실행
    useEffect(() => {
        admin_list()
    }, []);

    const API_URL = "/master/"

    async function admin_list() {
        try {
            const response = await axios.get(API_URL + "admin_list", {
                params: {
                    cPage: 1
                }
            });
            if (response.data.length > 0) {
                setAdminList(response.data);
            }
        } catch (error) {
            console.error('리스트 가져오기 실패: ', error)
        }
    }

    // 관리자 목록 클릭 시
    const onClickAdminOne = (admin) => {
        adminStore.setAdminInfo("admin_id", admin.admin_id);
        adminStore.setAdminInfo("role", admin.role);
        adminStore.setAdminInfo("note", admin.note);
        adminStore.setAdminInfo("status", admin.status);
    }

    return (
        <>
            <AdminPageTitle>관리자 관리</AdminPageTitle>
            <ButtonsContainer>
                <AdminNum>총 관리자 <ColorOrange>5</ColorOrange></AdminNum>
                <AddAdminBtn>관리자 추가</AddAdminBtn>
            </ButtonsContainer>
            <AdminContainer>
                <AdminContainer_inner>
                    <AdminInfo_Title>
                        <Admin_ID>관리자 아이디</Admin_ID>
                        <Admin_Right>권한</Admin_Right>
                        <Admin_Reg>등록일</Admin_Reg>
                        <Admin_State>상태</Admin_State>
                    </AdminInfo_Title>
                    {adminList.map((k) => (
                        <AdminInfo key={k.admin_idx} onClick={() => onClickAdminOne(k)}>
                            <Admin_ID>{k.admin_id}</Admin_ID>
                            <Admin_Right>{k.role === '0' ? '일반' : <ColorOrange>슈퍼</ColorOrange>}</Admin_Right>
                            <Admin_Reg>{k.regdate.slice(0, 10)}</Admin_Reg>
                            <Admin_State>{k.status === '0' ? '활성화' : '정지'}</Admin_State>
                        </AdminInfo>
                    ))}
                </AdminContainer_inner>
            </AdminContainer>
        </>
    )
})

export default AdminManagePage;