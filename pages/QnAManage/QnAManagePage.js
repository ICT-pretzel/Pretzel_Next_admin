"use client";

import { useContext, useEffect, useState } from "react";
import { AnswerState, Profile_name, QnAContainer, QnAContainer_inner, QnAContent, QnANum, QnATable, QnATable_Title, QnATitle, Questioner, ResolvedAdmin, WriteDate } from "../../styles/QnAManageCSS";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { ColorOrange } from "../../styles/commons/commonsCSS";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { QnaContext } from "../../stores/StoreContext";
import Layout from "../commonLayout";
import { useRouter } from "next/router";

const QnAManagePage = observer(() => {
    const qnaStore = useContext(QnaContext)
    const router = useRouter();

    // 관리자 리스트
    const [qnaList, setQnaList] = useState({ count: 0, quest_list: [] });

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        quest_list()
    }, []);

    const API_URL = "/question/"

    // Q&A 리스트 보여주는 function
    async function quest_list() {
        try {
            const response = await axios.get(API_URL + "quest_list", {
                params: {
                    cPage: 1
                }
            });

            if (response.data.quest_list.length > 0) {
                setQnaList(response.data);
            }
        } catch (error) {
            console.error('리스트 가져오기 실패 : ', error);
        }
    }

    // Q&A 상세 들어가기
    const onClickQna = (question_idx) => {
        qnaStore.setQusetionIdx(question_idx)
        router.push('/QnAManage/QnADetailPage')
    }

    return (
        <>
            <Layout>
                <AdminPageTitle>1:1 문의</AdminPageTitle>
                <QnANum>미답변 문의 <ColorOrange>{qnaList.count}</ColorOrange></QnANum>
                <QnAContainer>
                    <QnAContainer_inner>
                        <QnATable_Title>
                            <Questioner>문의자</Questioner>
                            <Profile_name>프로필 이름</Profile_name>
                            <QnATitle>제목</QnATitle>
                            <WriteDate>작성 날짜</WriteDate>
                            <AnswerState>답변 여부</AnswerState>
                            <ResolvedAdmin>처리한 관리자</ResolvedAdmin>
                        </QnATable_Title>
                        {qnaList.quest_list.map((k) => (
                            <QnATable key={k.question_idx} onClick={() => onClickQna(k.question_idx)}>
                                <Questioner>{k.user_id}</Questioner>
                                <Profile_name>{k.name}</Profile_name>
                                <QnATitle>{k.title}</QnATitle>
                                <WriteDate>{k.regdate.slice(0, 10)}</WriteDate>
                                <AnswerState>{k.status === '0' ? '처리완료' : <ColorOrange>미답변</ColorOrange>}</AnswerState>
                                <ResolvedAdmin>{k.admin_id}</ResolvedAdmin>
                            </QnATable>
                        ))}
                    </QnAContainer_inner>
                </QnAContainer>
            </Layout>
        </>
    )
})

export default QnAManagePage;