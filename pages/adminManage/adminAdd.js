"use client";

import { AddBtn, AdminInfo_Container, AdminInfo_Input, AdminInfo_Radio, AdminInfo_Title, AdminInput_Container, MemoBox, Radio_Container, Radio_Label } from "../styles/adminAddCSS";
import { AdminPageTitle } from "../styles/adminCommonCSS";

const AdminAdd = () => {
    return (
        <>
            <AdminPageTitle>관리자 추가</AdminPageTitle>
            <AdminInput_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>이름</AdminInfo_Title>
                    <AdminInfo_Input />
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>아이디</AdminInfo_Title>
                    <AdminInfo_Input />
                </AdminInfo_Container>
                <AdminInfo_Container>
                    <AdminInfo_Title>비밀번호</AdminInfo_Title>
                    <AdminInfo_Input type="password" />
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
            </AdminInput_Container>
            <AddBtn>추가하기</AddBtn>
        </>
    )
}

export default AdminAdd;