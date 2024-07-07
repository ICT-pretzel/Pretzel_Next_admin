// 관리자 상세 페이지 - 처리한 신고 내역
"use client";

import { ArrowIcon, List_Container, Process_List } from "../../../../styles/adminDetailCSS";

const AdminDetailReport = () => {


    return (
        <List_Container>
            <Process_List>처리한 신고 내역</Process_List>
            <ArrowIcon src="/images/icons/ArrowDown.png" />
        </List_Container>
    )
}

export default AdminDetailReport;