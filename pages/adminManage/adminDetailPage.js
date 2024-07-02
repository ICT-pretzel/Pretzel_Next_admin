// 관리자 상세 페이지
"use client";

import { useContext } from "react";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { AdminDetail_Container, AdminInfo, AdminInfo_Container, AdminInfo_Radio, AdminInfo_Title, EditBtn, List_Container, MemoBox, Process_List, Radio_Container, Radio_Label } from "../../styles/adminDetailCSS";
import { Icon24px } from "../../styles/commons/commonsCSS";

import AdminDetailQnA from "./adminDetailQnA";
import AdminDetailReport from "./adminDetailReport";
import { AdminContext } from "../../stores/StoreContext";

const AdminDetailPage = () => {

    const adminStore = useContext(AdminContext)

    const onChangeInfo = (e) => {
        adminStore.setAdminInfo({
            ...adminStore.adminInfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <AdminPageTitle>관리자 상세</AdminPageTitle>
            <AdminDetail_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>이름</AdminInfo_Title>
                    <AdminInfo>박다현</AdminInfo>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>아이디</AdminInfo_Title>
                    <AdminInfo>oing_0ing</AdminInfo>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>권한</AdminInfo_Title>
                    <Radio_Container>
                        {/* checked는 axios 데이터 받아오는 걸로 값 바꾸기 */}
                        <Radio_Label><AdminInfo_Radio type="radio" name="role" value="0" onChange={onChangeInfo} checked={adminStore.adminInfo.role === "0"} />일반</Radio_Label>
                        <Radio_Label><AdminInfo_Radio type="radio" name="role" value="1" onChange={onChangeInfo} checked={adminStore.adminInfo.role === "1"} />슈퍼</Radio_Label>
                    </Radio_Container>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>메모</AdminInfo_Title>
                    <MemoBox name="note" onChange={onChangeInfo} placeholder="메모를 입력해 주세요."></MemoBox>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>활성화</AdminInfo_Title>
                    <Radio_Container>
                        {/* checked는 axios 데이터 받아오는 걸로 값 바꾸기 */}
                        <Radio_Label><AdminInfo_Radio type="radio" name="status" value="0" onChange={onChangeInfo} checked={adminStore.adminInfo.role === "0"}  />정지</Radio_Label>
                        <Radio_Label><AdminInfo_Radio type="radio" name="status" value="1" onChange={onChangeInfo} checked={adminStore.adminInfo.role === "1"}  />활성화</Radio_Label>
                    </Radio_Container>
                </AdminInfo_Container>
            </AdminDetail_Container>

            {/* 처리한 신고 내역 리스트 */}
            <AdminDetailReport />

            {/* 처리한 QnA 리스트 */}
            <AdminDetailQnA />

            <EditBtn>수정</EditBtn>
        </>
    )
}

export default AdminDetailPage;