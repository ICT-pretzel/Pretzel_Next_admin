// 관리자 상세 페이지
"use client";

import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../../../stores/StoreContext";
import axios from "axios";
import { AdminPageTitle } from "../../../../styles/adminCommonCSS";
import { AdminDetail_Container, AdminInfo, AdminInfo_Container, AdminInfo_Radio, AdminInfo_Title, EditBtn, MemoBox, Radio_Container, Radio_Label } from "../../../../styles/adminDetailCSS";
import AdminDetailReport from "../adminDetailReport/page";
import AdminDetailQnA from "../adminDetailQnA/page";
import { useRouter } from "next/navigation";

const AdminDetailPage = observer(() => {
    const router = useRouter();
    const adminStore = useContext(AdminContext)

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        adminStore.setAdminInfo("admin_id", localStorage.getItem("detail_admin_id"));
        adminStore.setAdminInfo("name", localStorage.getItem("detail_name"));
        adminStore.setAdminInfo("role", localStorage.getItem("detail_role"));
        adminStore.setAdminInfo("note", localStorage.getItem("note"));
        adminStore.setAdminInfo("status", localStorage.getItem("status"));
    }, []);

    // 관리자 정보
    const onChangeInfo = (e) => {
        adminStore.setAdminInfo(e.target.name, e.target.value);
    }

    const API_URL = "/master/"

    // 관리자 수정 function
    async function admin_update() {
        try {
            const response = await axios.post(API_URL + "admin_update", adminStore.adminInfo);
            console.log(response.data)
            if (response.data == '1') {
                alert("수정이 완료되었습니다.")
                router.push('/main/adminManage/adminManagePage')
            } else {
                alert("수정을 다시 시도해주세요.")
            }
        } catch (error) {
            console.error('관리자 수정 실패 : ', error);
        }
    }

    return (
        <>
            <AdminPageTitle>관리자 상세</AdminPageTitle>
            <AdminDetail_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>이름</AdminInfo_Title>
                    <AdminInfo>{adminStore.adminInfo.name}</AdminInfo>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>아이디</AdminInfo_Title>
                    <AdminInfo>{adminStore.adminInfo.admin_id}</AdminInfo>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>권한</AdminInfo_Title>
                    <Radio_Container>
                        <Radio_Label><AdminInfo_Radio type="radio" name="role" value="0" onChange={onChangeInfo} checked={adminStore.adminInfo.role === "0"} />일반</Radio_Label>
                        <Radio_Label><AdminInfo_Radio type="radio" name="role" value="1" onChange={onChangeInfo} checked={adminStore.adminInfo.role === "1"} />슈퍼</Radio_Label>
                    </Radio_Container>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>메모</AdminInfo_Title>
                    <MemoBox
                        name="note"
                        defaultValue={adminStore.adminInfo.note}
                        onChange={onChangeInfo}
                        placeholder="메모를 입력해 주세요."></MemoBox>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>활성화</AdminInfo_Title>
                    <Radio_Container>
                        <Radio_Label><AdminInfo_Radio type="radio" name="status" value="0" onChange={onChangeInfo} checked={adminStore.adminInfo.status === "0"} />정지</Radio_Label>
                        <Radio_Label><AdminInfo_Radio type="radio" name="status" value="1" onChange={onChangeInfo} checked={adminStore.adminInfo.status === "1"} />활성화</Radio_Label>
                    </Radio_Container>
                </AdminInfo_Container>
            </AdminDetail_Container>

            {/* 처리한 신고 내역 리스트 */}
            <AdminDetailReport />

            {/* 처리한 QnA 리스트 */}
            <AdminDetailQnA />

            <EditBtn onClick={admin_update}>수정</EditBtn>
        </>
    )
})

export default AdminDetailPage;