// 문의 관리 페이지

"use client";

import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { QnaContext } from "../../../../stores/StoreContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoadingSpinner from "../../../loadingSpinner/page";
import { AdminPageTitle } from "../../../../styles/adminCommonCSS";
import { AnswerState, Profile_name, QnAContainer, QnAContainer_inner, QnANum, QnATable, QnATable_Title, QnATitle, Questioner, ResolvedAdmin, WriteDate } from "../../../../styles/QnAManageCSS";
import { ColorOrange } from "../../../../styles/commons/commonsCSS";
import Paging from "../../commons/paging/page";

const QnAManagePage = observer(() => {
    const qnaStore = useContext(QnaContext)
    const router = useRouter();

    // 문의 리스트
    const [qnaList, setQnaList] = useState({ count: 0, quest_list: [] });

    // 페이징용
    const [pagingInfo, setPagingInfo] = useState({});
    const [pages, setPages] = useState([]);

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        quest_list()
    }, []);

    const API_URL = "/question/"

    // Q&A 리스트 보여주는 function
    async function quest_list(paging_page) {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정
        let cPage = "1"
        if (paging_page !== null) {
            cPage = paging_page
        }

        try {
            const response = await axios.get(API_URL + "quest_list", {
                params: {
                    cPage: cPage
                }
            });

            if (response.data.quest_list.length > 0) {
                setQnaList(response.data);
                setPagingInfo(response.data.paging);
            }

            let ex_page = []
            for (let k = response.data.paging.beginBlock; k <= response.data.paging.endBlock; k++) {
                ex_page.push(k);
            }
            setPages(ex_page)
        } catch (error) {
            console.error('리스트 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    // Q&A 상세 들어가기
    const onClickQna = (question_idx) => {
        qnaStore.setQusetionIdx(question_idx)
        localStorage.setItem("question_idx", question_idx)
        router.push('/main/QnAManage/QnADetailPage')
    }

    return (
        <>
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
                        <WriteDate>처리 날짜</WriteDate>
                    </QnATable_Title>
                    {qnaList.quest_list.map((k) => (
                        <QnATable key={k.question_idx} onClick={() => onClickQna(k.question_idx)}>
                            <Questioner>{k.user_id}</Questioner>
                            <Profile_name>{k.name}</Profile_name>
                            <QnATitle>{k.title}</QnATitle>
                            <WriteDate>{k.regdate.slice(0, 10)}</WriteDate>
                            <AnswerState>{k.status === '0' ? '처리완료' : <ColorOrange>미답변</ColorOrange>}</AnswerState>
                            <ResolvedAdmin>{k.admin_id}</ResolvedAdmin>
                            <WriteDate>{k.ansdate ? k.ansdate.slice(0, 10) : ""}</WriteDate>
                        </QnATable>
                    ))}
                </QnAContainer_inner>
            </QnAContainer>
            <Paging pages={pages} paging={pagingInfo} qnaList={qnaList} />
        </>
    )
})

export default QnAManagePage;