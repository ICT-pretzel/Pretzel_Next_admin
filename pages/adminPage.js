// 사이드 메뉴바가 존재하는 상태의 component들 - 다현

"use client";

import { AdminContentContainer, AllAdminContainer, Whitespace } from "../styles/adminCommonCSS";
import UserManage from "./userManage";
import UserDetail from "./userDetail";
import ReportManage from "./reportManage";
import ReportDetail from "./reportDetail";
import MovieManage from "./movieManage";
import MovieAdd from "./movieAdd";

const AdminPage = () => {
    return (
        <AllAdminContainer>
            <Whitespace />
            <AdminContentContainer>
                <MovieAdd />
            </AdminContentContainer>
        </AllAdminContainer >
    )
}

export default AdminPage;