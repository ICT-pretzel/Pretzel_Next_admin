"use client";

import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { LoginContext, QnaContext } from "../../../../stores/StoreContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Answer_Container, Answer_Content, Answer_Date, CompleteBtn, Info, Info2, Info_Container, Info_Title, QuestionInfo_Container, Question_Container, Question_Content, Question_Date, Question_Title, SaveBtn, Subtitle } from "../../../../styles/QnADetailCSS";
import LoadingSpinner from "../../../loadingSpinner/page";
import { AdminPageTitle } from "../../../../styles/adminCommonCSS";
import { ColorGray } from "../../../../styles/commons/commonsCSS";

const QnADetailPage = observer(() => {
    const loginStore = useContext(LoginContext);
    const qnaStore = useContext(QnaContext);
    const router = useRouter();

    // 문의 상세
    const [qnaDetail, setQnaDetail] = useState({ quest_profile: {}, question: {}, admin_name: '' });

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        quest_detail();
    }, []);

    const API_URL = "/question/";

    // 답변 작성
    const onChangeAnswer = (e) => {
        qnaStore.setAnswer(e.target.value)
    }

    // 확인 버튼 클릭 시 리스트로 돌아가기
    const onClickConfirm = () => {
        router.push('/main/QnAManage/QnAManagePage')
    }

    // Q&A 상세 function
    async function quest_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.post(API_URL + "quest_detail",
                {
                    question_idx: qnaStore.question_idx
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                }
            );

            if (response.data.quest_profile && response.data.question) {
                setQnaDetail({
                    quest_profile: response.data.quest_profile,
                    question: response.data.question,
                    admin_name: response.data.admin_name || ''
                });
            }
            console.log(response.data);
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // Q&A 답변이 있는 경우에는 보여주기, 없는 경우에는 작성하기 function
    function qna_answer() {
        if (qnaDetail.question.status == '0') {
            return (
                <>
                    <Subtitle>처리 내역</Subtitle>
                    <Answer_Container>
                        <Info_Container>
                            <Info_Title>관리자 이름</Info_Title>
                            <Info>{qnaDetail.admin_name}</Info>
                        </Info_Container>
                        <Info_Container>
                            <Info_Title>관리자 아이디</Info_Title>
                            <Info>{qnaDetail.question.admin_id}</Info>
                        </Info_Container>
                        <Answer_Date>{qnaDetail.question.ansdate.slice(0, 10)}</Answer_Date>
                        <Answer_Content>{qnaDetail.question.answer}</Answer_Content>
                    </Answer_Container>
                    <CompleteBtn onClick={onClickConfirm}>확인</CompleteBtn>
                </>
            );
        } else if (qnaDetail.question.status == '1') {
            return (
                <>
                    <Subtitle>답변 작성</Subtitle>
                    <Answer_Container>
                        <Info_Container>
                            <Info_Title>관리자 이름</Info_Title>
                            <Info2>{qnaDetail.admin_name}</Info2>
                        </Info_Container>
                        <Info_Container>
                            <Info_Title>관리자 아이디</Info_Title>
                            <Info2>{qnaDetail.question.admin_id}</Info2>
                        </Info_Container>
                        <Answer_Write
                            name="answer"
                            onChange={onChangeAnswer}
                            placeholder="답변을 입력해 주세요." />
                    </Answer_Container>
                    <Buttons>
                        <CompleteBtn onClick={onClickConfirm}>확인</CompleteBtn>
                        <SaveBtn onClick={onClickSave}>저장</SaveBtn>
                    </Buttons>
                </>
            );
        }
    }

    // Q&A 답변 작성 저장 function
    async function onClickSave() {
        // 답변이 비어있는데 저장한 경우 제어
        if (qnaStore.answer.trim() === '') {
            alert("답변을 작성하고 저장해 주세요.")
            return;
        }

        try {
            const response = await axios.post(API_URL + "quest_answer",
                {
                    question_idx: qnaStore.question_idx,
                    answer: qnaStore.answer
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                }
            );

            if (response.data == '1') {
                alert("답변 작성이 완료되었습니다.")
                // Q&A 상세정보 보여주는 function 재실행
                quest_detail();
            } else {
                alert("답변 작성을 실패하였습니다.")
            }
            console.log(response.data);
        } catch (error) {
            console.error('답변 작성 실패 : ', error);
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <AdminPageTitle>1:1 문의 상세</AdminPageTitle>
            <Question_Container>
                <Info_Container>
                    <Info_Title>아이디</Info_Title>
                    <Info>{qnaDetail.quest_profile.user_id}</Info>
                </Info_Container>
                <Info_Container>
                    <Info_Title>프로필 이름</Info_Title>
                    <Info>{qnaDetail.quest_profile.name}</Info>
                </Info_Container>
                <QuestionInfo_Container>
                    <Question_Title>제목 <ColorGray>&#160;{qnaDetail.question.title}</ColorGray></Question_Title>
                    <Question_Date>{qnaDetail.question.regdate.slice(0, 10)}</Question_Date>
                </QuestionInfo_Container>
                <Question_Content>{qnaDetail.question.content}</Question_Content>
            </Question_Container>
            {qna_answer()}
        </>
    );
});

export default QnADetailPage;
