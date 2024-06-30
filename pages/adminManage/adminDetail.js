"use client";

import { AdminPageTitle } from "../styles/adminCommonCSS";
import { AdminDetail_Container, AdminInfo, AdminInfo_Container, AdminInfo_Radio, AdminInfo_Title, EditBtn, List_Container, MemoBox, Process_List, Radio_Container, Radio_Label } from "../styles/adminDetailCSS";
import { Icon24px } from "../styles/commons/commonsCSS";

const AdminDetail = () => {
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
                        <Radio_Label><AdminInfo_Radio type="radio" name="dd" value="0" />일반</Radio_Label>
                        <Radio_Label><AdminInfo_Radio type="radio" name="dd" value="1" />슈퍼</Radio_Label>
                    </Radio_Container>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>메모</AdminInfo_Title>
                    <MemoBox placeholder="메모를 입력해 주세요."></MemoBox>
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>활성화</AdminInfo_Title>
                    <Radio_Container>
                        <Radio_Label><AdminInfo_Radio type="radio" name="ff" value="0" />정지</Radio_Label>
                        <Radio_Label><AdminInfo_Radio type="radio" name="ff" value="1" />활성화</Radio_Label>
                    </Radio_Container>
                </AdminInfo_Container>
            </AdminDetail_Container>

            <List_Container>
                <Process_List>처리한 신고 내역</Process_List>
                <Icon24px src="/images/icons/ArrowDown.png" />
            </List_Container>
            <List_Container>
                <Process_List>처리한 1:1 내역</Process_List>
                <Icon24px src="/images/icons/ArrowDown.png" />
            </List_Container>

            <EditBtn>수정</EditBtn>
        </>
    )
}

export default AdminDetail;