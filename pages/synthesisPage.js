// 사이드 메뉴바가 존재하는 상태의 component들 - 다현

"use client";

import { AdminContentContainer, AllAdminContainer, Whitespace } from "../styles/adminCommonCSS";
import UserManage from "./userManage";
import UserDetail from "./userDetail";
import ReportManage from "./reportManage";
import ReportDetail from "./reportDetail";
import MovieManage from "./movieManage";
import MovieAdd from "./movieAdd";
import QnAManage from "./QnAManage";
import QnADetail from "./QnADetail";
import AdminManage from "./adminManage";
import AdminAdd from "./adminAdd";
import AdminDetail from "./adminDetail";

const SynthesisPage = () => {
    return (
        <AllAdminContainer>
            <Whitespace />
            <AdminContentContainer>
                <AdminDetail />
            </AdminContentContainer>
        </AllAdminContainer >
    )
}

export default SynthesisPage;