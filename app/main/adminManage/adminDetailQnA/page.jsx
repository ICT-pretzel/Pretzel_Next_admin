// 관리자 상세 페이지 - 처리한 1:1 내역
"use client";

import { All_Container, ArrowIcon, Content, ContentTitle, Content_Container, List_Container, NoneContent, Process_List, Q_AnsDate, Q_Content, Q_RegDate, QuestionIdx } from "../../../../styles/adminDetailCSS";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../../stores/StoreContext";
import { useRouter } from "next/navigation";
import axios from "axios";

const AdminDetailQnA = () => {
    const adminStore = useContext(AdminContext)
    const router = useRouter();

    // 처리한 신고 리스트
    const [adminQaList, setAdminQaList] = useState([]);

    // 토글 여부
    const [isContentVisible, setIsContentVisible] = useState([]);

    const API_URL = "/master/"

    // 문의
    async function admin_quest() {
        console.log(adminStore.adminInfo.admin_id)
        try {
            const response = await axios.post(API_URL + "admin_quest", {
                "admin_id": adminStore.adminInfo.admin_id
            });
            console.log(response.data)
            if (response.data) {
                setAdminQaList(response.data)
            }
        } catch (error) {
            console.error('목록 가져오기 실패 : ', error);
        }
    }

    // 처리 리스트에 따라서 보여주는 내용 다르게
    function list_content() {
        if (adminQaList.length === 0) {
            return (
                <>
                    <NoneContent>처리한 내역이 없습니다.</NoneContent>
                </>
            )
        } else {
            return (
                <>
                    <ContentTitle>
                        <QuestionIdx>문의 idx</QuestionIdx>
                        <Q_RegDate>문의 날짜</Q_RegDate>
                        <Q_AnsDate>처리 날짜</Q_AnsDate>
                        <Q_Content>문의 내용</Q_Content>
                    </ContentTitle>
                </>
            )
        }
    }

    // 문의 목록 클릭시
    const onClickQna = (question_idx) => {
        localStorage.setItem("question_idx", question_idx)
        router.push('/main/QnAManage/QnADetailPage')
    }

    // content container display 상태를 토글
    const onClick_Qna_list = () => {
        admin_quest()
        setIsContentVisible(!isContentVisible);
    }

    return (
        <All_Container>
            <List_Container>
                <Process_List>처리한 1:1 내역</Process_List>
                <ArrowIcon
                onClick={onClick_Qna_list}
                src={isContentVisible ? "/images/icons/ArrowDown.png" : "/images/icons/ArrowUp.png"} />
            </List_Container>
            <Content_Container isContentVisible={!isContentVisible}>
                {list_content()}
                {adminQaList.map((k) => (
                    <Content key={k.question_idx} onClick={() => onClickQna(k.question_idx)}>
                        <QuestionIdx>{k.question_idx}</QuestionIdx>
                        <Q_RegDate>{k.regdate}</Q_RegDate>
                        <Q_AnsDate>{k.ansdate}</Q_AnsDate>
                        <Q_Content>{k.content}</Q_Content>
                    </Content>
                ))}
            </Content_Container>
        </All_Container>
    )
}

export default AdminDetailQnA;