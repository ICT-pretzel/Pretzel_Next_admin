// faq 추가 페이지

"use client"

import LoadingSpinner from "@/app/loadingSpinner/page";
import { LoginContext } from "@/stores/StoreContext";
import { AdminPageTitle } from "@/styles/adminCommonCSS";
import { Add_Button, Add_Container, AddContent_Container, AddContent_Content, AddContent_Title, AddInfo_All_Container, AddInfo_Container, AddInfo_Content, AddInfo_Title, FAQ_Type, SelectType } from "@/styles/faqAndNoticeAddCSS";
import axios from "axios";
import { useContext, useState } from "react";

const FAQAddPage = () => {
    const loginStore = useContext(LoginContext)

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(false);

    // FAQ 유형
    const [type, setType] = useState("결제/환불");

    // FAQ 질문
    const [title, setTitle] = useState("");

    // FAQ 답변
    const [content, setContent] = useState("");

    const API_URL = "/clientCenter/"

    // FAQ 추가하는 function
    async function faq_insert() {

        console.log("토큰" + loginStore.token)
        console.log("토큰없음")
        console.log(title, content, type)

        if (title === "") {
            alert("질문을 입력해 주세요.")
        } else if (content === "") {
            alert("답변을 입력해 주세요.")
        } else if (confirm("FAQ를 추가하시겠습니까?")) {
            setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

            try {
                const response = await axios.post(API_URL + "faq_insert",
                    {
                        headers: {
                            Authorization: `Bearer ${loginStore.token}`
                        }
                    },
                    {
                        "title": title,
                        "type": type,
                        "content": content
                    }
                );

                console.log(response.data)

                if (response.data === 1) {
                    alert("FAQ가 성공적으로 추가되었습니다.")
                } else {
                    alert("추가에 실패했습니다.\n다시 시도해 주세요.")
                }
            } catch (error) {
                console.error('추가 실패 : ', error);
            } finally {
                setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
            }
        } else {
            alert("추가가 취소되었습니다.")
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    const onChangeType = (e) => {
        setType(e.target.value);
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    return (
        <>
            <Add_Container>
                <AdminPageTitle>FAQ 추가</AdminPageTitle>

                <AddInfo_All_Container>
                    <AddInfo_Container>
                        <AddInfo_Title>유형</AddInfo_Title>
                        <SelectType name="type" onChange={onChangeType} defaultValue={"결제/환불"} required>
                            <FAQ_Type>결제/환불</FAQ_Type>
                            <FAQ_Type>계정 문의</FAQ_Type>
                            <FAQ_Type>구독권</FAQ_Type>
                        </SelectType>
                    </AddInfo_Container>

                    <AddContent_Container>
                        <AddContent_Title>자주 묻는 질문</AddContent_Title>
                        <AddContent_Content name="title" onChange={onChangeTitle} placeholder="질문을 입력해 주세요." required />
                    </AddContent_Container>

                    <AddContent_Container>
                        <AddContent_Title>답변</AddContent_Title>
                        <AddContent_Content name="content" onChange={onChangeContent} placeholder="답변을 입력해 주세요." required />
                    </AddContent_Container>

                    <Add_Button onClick={faq_insert}>추가하기</Add_Button>
                </AddInfo_All_Container>

            </Add_Container>

        </>
    )
}

export default FAQAddPage;