// 사이드 메뉴바가 존재하는 상태의 component들

"use client";

import { AdminContentContainer, AllAdminContainer, Whitespace } from "../styles/adminCommonCSS";
import AdminAddPage from "./adminManage/adminAddPage";
import AdminDetailPage from "./adminManage/adminDetailPage";
import AdminManagePage from "./adminManage/adminManagePage";
import MovieAddPage from "./movieManage/movieAddPage";

const SynthesisPage = () => {
    return (
        <AllAdminContainer>
            <Whitespace />
            <AdminContentContainer>
                <MovieAddPage />
            </AdminContentContainer>
        </AllAdminContainer >
    )
}

export default SynthesisPage;