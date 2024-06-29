"use client";

import { Answer_Container, Answer_Content, Answer_Date, CompleteBtn, Info, Info_Container, Info_Title, QuestionInfo_Container, Question_Container, Question_Content, Question_Date, Question_Title } from "../styles/QnADetailCSS";
import { AdminPageTitle } from "../styles/adminCommonCSS";
import { ColorGray } from "../styles/commons/commonsCSS";

const QnADetail = () => {
    return (
        <>
            <AdminPageTitle>1:1 문의 상세</AdminPageTitle>
            <Question_Container>
                <Info_Container>
                    <Info_Title>아이디</Info_Title>
                    <Info>oing_0ing</Info>
                </Info_Container>
                <Info_Container>
                    <Info_Title>이름</Info_Title>
                    <Info>박다현</Info>
                </Info_Container>
                <QuestionInfo_Container>
                    <Question_Title>제목 <ColorGray>&#160;질문있습니다</ColorGray></Question_Title>
                    <Question_Date>2020-10-29</Question_Date>
                </QuestionInfo_Container>
                <Question_Content>이런 저런 내용의 질문이에요. 저런저런</Question_Content>
            </Question_Container>
            <Answer_Container>
                <Info_Container>
                    <Info_Title>관리자</Info_Title>
                    <Info>oing_0ing</Info>
                </Info_Container>
                <Answer_Date>2020-10-29</Answer_Date>
                <Answer_Content>이런 저런 내용의 질문이에요. 저런저런</Answer_Content>
            </Answer_Container>
            {/* <CompleteBtn>완료</CompleteBtn> */}
        </>
    )
}

export default QnADetail;