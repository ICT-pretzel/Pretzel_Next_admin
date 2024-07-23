// faq 관리 페이지

"use client";

import LoadingSpinner from "@/app/loadingSpinner/page";
import { LoginContext } from "@/stores/StoreContext";
import { AdminPageTitle } from "@/styles/adminCommonCSS";
import { ColorOrange } from "@/styles/commons/commonsCSS";
import { ButtonsContainer, Delete, Delete_Button, FAQ_Container, FAQ_Container__inner, FAQ_Content, FAQ_Content__Content, FAQ_Content__Title, FAQ_Reg_Admin, FAQ_Regdate, FAQ_Title, FAQ_Type, FAQAddBtn, FAQNum } from "@/styles/faqManageCSS";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Paging from "../../commons/paging/page";

const FAQManagePage = observer(() => {
    const loginStore = useContext(LoginContext)
    const router = useRouter();

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // FAQ 리스트
    const [faqList, setFaqList] = useState({ faq_list: [], count: 0 })

    // 페이징용
    const [pagingInfo, setPagingInfo] = useState({});
    const [pages, setPages] = useState([]);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        faq_list()
    }, []);

    const API_URL = "/clientCenter/"

    // FAQ 리스트 보여주는 function
    async function faq_list(paging_page) {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        let cPage = "1"
        if (paging_page !== null) {
            cPage = paging_page
        }

        try {
            const response = await axios.get(API_URL + "faq_list", {
                params: {
                    cPage: cPage
                }
            });

            if (response.data) {
                setFaqList(response.data);
                setPagingInfo(response.data.paging)
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

    const onClickAddFAQ = () => {
        router.push("/main/faqManage/faqAddPage")
    }

    // FAQ 삭제 function
    async function faq_delete(faq_idx) {
        if (confirm("해당 공지사항을 삭제하시겠습니까?")) {
            setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

            try {
                const response = await axios.get(API_URL + "faq_delete", {
                    params: {
                        faq_idx: faq_idx
                    },
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });

                if (response.data === 1) {
                    alert("해당 FAQ가 삭제되었습니다.")
                    faq_list()
                } else {
                    alert("삭제에 실패했습니다.\n다시 시도해 주세요.")
                }
            } catch (error) {
                console.error('삭제 실패 : ', error);
            } finally {
                setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
            }
        } else {
            alert("삭제가 취소되었습니다.")
        }
    }

    return (
        <>
            <AdminPageTitle>FAQ 관리</AdminPageTitle>
            <ButtonsContainer>
                <FAQNum>FAQ 수 <ColorOrange>{faqList.count}</ColorOrange></FAQNum>
                <FAQAddBtn onClick={onClickAddFAQ}>FAQ 추가</FAQAddBtn>
            </ButtonsContainer>
            <FAQ_Container>
                <FAQ_Container__inner>
                    <FAQ_Content__Title>
                        <FAQ_Type>유형</FAQ_Type>
                        <FAQ_Title>FAQ 제목</FAQ_Title>
                        <FAQ_Content>FAQ 내용</FAQ_Content>
                        <FAQ_Regdate>등록 날짜</FAQ_Regdate>
                        <FAQ_Reg_Admin>등록한 관리자</FAQ_Reg_Admin>
                        <Delete>삭제</Delete>
                    </FAQ_Content__Title>
                    {faqList.faq_list.map((k) => (
                        <FAQ_Content__Content key={k.faq_idx}>
                            <FAQ_Type>{k.type}</FAQ_Type>
                            <FAQ_Title>{k.title}</FAQ_Title>
                            <FAQ_Content>{k.content}</FAQ_Content>
                            <FAQ_Regdate>{k.regdate.slice(0, 10)}</FAQ_Regdate>
                            <FAQ_Reg_Admin>{k.insert_admin_id}</FAQ_Reg_Admin>
                            <Delete><Delete_Button onClick={() => faq_delete(k.faq_idx)}>삭제</Delete_Button></Delete>
                        </FAQ_Content__Content>
                    ))}
                </ FAQ_Container__inner>
            </ FAQ_Container>
            <Paging pages={pages} paging={pagingInfo} faqList={faqList} />
        </>
    )
})

export default FAQManagePage;