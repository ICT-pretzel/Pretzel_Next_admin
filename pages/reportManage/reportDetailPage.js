// 신고 상세 페이지 (신고 관리 페이지) - 다현

"use client";

import { ColorGray, ColorOrange } from "../../styles/commons/commonsCSS";
import { Administrator_Container, Buttons, Content, PendingBtn, ReportDetail_Container, ReportedPerson_Container, Reporter_Container, ReviewBox, ReviewDeleteBtn, SubTitle } from "../../styles/reportDetailCSS";

const { AdminPageTitle } = require("../styles/adminCommonCSS");

const ReportDetailPage = () => {
    return (
        <>
            <AdminPageTitle>신고 상세</AdminPageTitle>

            <ReportDetail_Container>
                <ReportedPerson_Container>
                    <SubTitle>피신고자</SubTitle>
                    <Content>아이디 &#160;<ColorGray>oing_0ing</ColorGray></Content>
                    <Content>리뷰내용</Content>
                    <ReviewBox>블라 블라 안녕하세요</ReviewBox>
                </ReportedPerson_Container>

                <Reporter_Container>
                    <SubTitle>신고자</SubTitle>
                    <Content>닉네임 &#160;<ColorGray>안녕</ColorGray></Content>
                    <Content>신고유형 &#160;<ColorOrange>욕설</ColorOrange></Content>
                </Reporter_Container>

                <Administrator_Container>
                    <SubTitle>관리자</SubTitle>
                    <Content>관리자 아이디 &#160;<ColorGray>siddy0406</ColorGray></Content>
                    <Content>처리 방식 &#160;<ColorGray>삭제</ColorGray></Content>
                </Administrator_Container>

                <Buttons>
                    <PendingBtn>처리 보류</PendingBtn>
                    <ReviewDeleteBtn>해당 리뷰 삭제</ReviewDeleteBtn>
                </Buttons>
            </ReportDetail_Container>
        </>
    )
}

export default ReportDetailPage;