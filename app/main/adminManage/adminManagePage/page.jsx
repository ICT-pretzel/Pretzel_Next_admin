"use client";

import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { AdminContext, LoginContext } from "../../../../stores/StoreContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoadingSpinner from "../../../loadingSpinner/page";
import { AdminPageTitle } from "../../../../styles/adminCommonCSS";
import { AddAdminBtn, AdminContainer, AdminContainer_inner, AdminInfo, AdminInfo_Title, AdminNum, Admin_ID, Admin_Reg, Admin_Right, Admin_State, ButtonsContainer } from "../../../../styles/adminManageCSS";
import { ColorOrange } from "../../../../styles/commons/commonsCSS";

const AdminManagePage = observer(() => {
    const adminStore = useContext(AdminContext)
    const loginStore = useContext(LoginContext)
    const router = useRouter();

    // 관리자 리스트
    const [adminList, setAdminList] = useState({ count: 0, admin_list: [] });

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        admin_list()
    }, []);

    const API_URL = "/master/"

    // 관리자 리스트 보여주는 function
    async function admin_list() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "admin_list", {
                params: {
                    cPage: 1
                },
                headers: {
                    Authorization: `Bearer ${loginStore.token}`
                }
            });
            if (response.data.admin_list.length > 0) {
                setAdminList(response.data);
            }
        } catch (error) {
            console.error('리스트 가져오기 실패 : ', error)
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }

    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    // 관리자 목록 클릭 시
    const onClickAdminOne = (admin) => {
        adminStore.setAdminInfo("admin_id", admin.admin_id);
        adminStore.setAdminInfo("name", admin.name);
        adminStore.setAdminInfo("role", admin.role);
        adminStore.setAdminInfo("note", admin.note);
        adminStore.setAdminInfo("status", admin.status);

        localStorage.setItem("detail_admin_id", admin.admin_id)
        localStorage.setItem("detail_name", admin.name)
        localStorage.setItem("detail_role", admin.role)
        localStorage.setItem("note", admin.note)
        localStorage.setItem("status", admin.status)

        router.push('/main/adminManage/adminDetailPage')
    }

    // 관리자 추가 버튼 클릭 시
    const onClickAdminAdd = () => {
        router.push('/main/adminManage/adminAddPage')
    }

    return (
        <>
            <AdminPageTitle>관리자 관리</AdminPageTitle>
            <ButtonsContainer>
                <AdminNum>총 관리자 <ColorOrange>{adminList.count}</ColorOrange></AdminNum>
                <AddAdminBtn onClick={onClickAdminAdd}>관리자 추가</AddAdminBtn>
            </ButtonsContainer>
            <AdminContainer>
                <AdminContainer_inner>
                    <AdminInfo_Title>
                        <Admin_ID>관리자 아이디</Admin_ID>
                        <Admin_Right>권한</Admin_Right>
                        <Admin_Reg>등록일</Admin_Reg>
                        <Admin_State>상태</Admin_State>
                    </AdminInfo_Title>
                    {adminList.admin_list.map((k) => (
                        <AdminInfo key={k.admin_idx} onClick={() => onClickAdminOne(k)}>
                            <Admin_ID>{k.admin_id}</Admin_ID>
                            <Admin_Right>{k.role === '0' ? '일반' : <ColorOrange>슈퍼</ColorOrange>}</Admin_Right>
                            <Admin_Reg>{k.regdate.slice(0, 10)}</Admin_Reg>
                            <Admin_State>{k.status === '0' ? '정지' : '활성화'}</Admin_State>
                        </AdminInfo>
                    ))}
                </AdminContainer_inner>
            </AdminContainer>
        </>
    )
})

export default AdminManagePage;