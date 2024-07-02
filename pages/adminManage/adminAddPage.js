"use client";

import { useContext } from "react";
import { AdminContext } from "../../stores/StoreContext";
import { AddBtn, AdminAdd_Container, AdminInfo_Container, AdminInfo_Input, AdminInfo_Radio, AdminInfo_Title, AdminInput_Container, MemoBox, Radio_Container, Radio_Label } from "../../styles/adminAddCSS";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { observer } from "mobx-react-lite";

const AdminAddPage = observer(() => {

    const adminStore = useContext(AdminContext)

    const onChangeInfo = (e) => {
        adminStore.setAdminInfo({
            ...adminStore.adminInfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <AdminAdd_Container>
                <AdminPageTitle>관리자 추가</AdminPageTitle>
                <AdminInput_Container>
                    <AdminInfo_Container>
                        <AdminInfo_Title>이름</AdminInfo_Title>
                        <AdminInfo_Input name="name" onChange={onChangeInfo} placeholder="이름을 입력해 주세요." required />
                    </AdminInfo_Container>
                    <AdminInfo_Container>
                        <AdminInfo_Title>아이디</AdminInfo_Title>
                        <AdminInfo_Input name="admin_id" onChange={onChangeInfo} placeholder="아이디를 입력해 주세요." required />
                    </AdminInfo_Container>
                    <AdminInfo_Container>
                        <AdminInfo_Title>비밀번호</AdminInfo_Title>
                        <AdminInfo_Input type="password" name="pwd" onChange={onChangeInfo} placeholder="비밀번호를 입력해 주세요." required />
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
                        <MemoBox name="note" onChange={onChangeInfo} placeholder="메모를 입력해 주세요."></MemoBox>
                    </AdminInfo_Container>
                </AdminInput_Container>
                <AddBtn>추가하기</AddBtn>
            </AdminAdd_Container>
        </>
    )
})

export default AdminAddPage;