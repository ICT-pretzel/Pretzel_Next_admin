"use client";

import { AnswerState, QnAContainer, QnAContainer_inner, QnAContent, QnANum, QnATable, QnATable_Title, QnATitle, Questioner, ResolvedAdmin, WriteDate } from "../styles/QnAManageCSS";
import { AdminPageTitle } from "../styles/adminCommonCSS";
import { ColorOrange } from "../styles/commons/commonsCSS";

const QnAManage = () => {
    return (
        <>
            <AdminPageTitle>1:1 문의</AdminPageTitle>
            <QnANum>미답변 문의 <ColorOrange>18</ColorOrange></QnANum>
            <QnAContainer>
                <QnAContainer_inner>
                    <QnATable_Title>
                        <Questioner>문의자</Questioner>
                        <QnATitle>제목</QnATitle>
                        <QnAContent>문의 내용</QnAContent>
                        <WriteDate>작성 날짜</WriteDate>
                        <AnswerState>답변 여부</AnswerState>
                        <ResolvedAdmin>처리한 관리자</ResolvedAdmin>
                    </QnATable_Title>
                    <QnATable>
                        <Questioner>oing_0ing</Questioner>
                        <QnATitle>2020</QnATitle>
                        <QnAContent>15</QnAContent>
                        <WriteDate></WriteDate>
                        <AnswerState></AnswerState>
                        <ResolvedAdmin></ResolvedAdmin>
                    </QnATable>
                </QnAContainer_inner>
            </QnAContainer>
        </>
    )
}

export default QnAManage;