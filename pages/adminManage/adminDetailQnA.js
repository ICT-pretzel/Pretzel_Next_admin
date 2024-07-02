// 관리자 상세 페이지 - 처리한 1:1 내역
"use client";

import { List_Container, Process_List } from "../../styles/adminDetailCSS";
import { Icon24px } from "../../styles/commons/commonsCSS";

const AdminDetailQnA = () => {


    return (
        <List_Container>
            <Process_List>처리한 1:1 내역</Process_List>
            <Icon24px src="/images/icons/ArrowDown.png" />
        </List_Container>
    )
}

export default AdminDetailQnA;