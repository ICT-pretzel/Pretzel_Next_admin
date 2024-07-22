// 공지사항 관리 페이지

"use client";

import LoadingSpinner from "@/app/loadingSpinner/page";
import { LoginContext } from "@/stores/StoreContext";
import { AdminPageTitle } from "@/styles/adminCommonCSS";
import { ColorOrange } from "@/styles/commons/commonsCSS";
import { Delete, Delete_Button } from "@/styles/faqManageCSS";
import { ButtonsContainer } from "@/styles/movieManageCSS";
import { Notice_Container, Notice_Container__inner, Notice_Content, Notice_Content__Content, Notice_Content__Title, Notice_Reg_Admin, Notice_Regdate, Notice_Title, NoticeAddBtn, NoticeNum } from "@/styles/noticeManageCSS";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const NoticeManagePage = observer(() => {
    const loginStore = useContext(LoginContext)
    const router = useRouter();

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 공지사항 리스트
    const [noticeList, setNoticeList] = useState({ notice_list: [], count: 0 })

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        notice_list()
    }, []);

    const API_URL = "/clientCenter/"

    // 공지사항 리스트 보여주는 function
    async function notice_list() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "notice_list", {
                params: {
                    cPage: 1
                }
            });

            if (response.data) {
                setNoticeList(response.data);
            }
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

    const onClickAddNotice = () => {
        router.push("/main/noticeManage/noticeAddPage")
    }

    // 공지사항 삭제 function
    async function delete_notice(notice_idx) {
        if (confirm("해당 공지사항을 삭제하시겠습니까?")) {
            setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

            try {
                const response = await axios.get(API_URL + "notice_delete", {
                    params: {
                        notice_idx: notice_idx
                    },
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });

                if (response.data === 1) {
                    alert("해당 공지사항이 삭제되었습니다.")
                    notice_list()
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
            <AdminPageTitle>공지사항 관리</AdminPageTitle>
            <ButtonsContainer>
                <NoticeNum>공지사항 수 <ColorOrange>{noticeList.count}</ColorOrange></NoticeNum>
                <NoticeAddBtn onClick={onClickAddNotice}>공지 추가</NoticeAddBtn>
            </ButtonsContainer>
            <Notice_Container>
                <Notice_Container__inner>
                    <Notice_Content__Title>
                        <Notice_Title>공지 제목</Notice_Title>
                        <Notice_Content>공지 내용</Notice_Content>
                        <Notice_Regdate>등록 날짜</Notice_Regdate>
                        <Notice_Reg_Admin>등록한 관리자</Notice_Reg_Admin>
                        <Delete>삭제</Delete>
                    </Notice_Content__Title>
                    {noticeList.notice_list.map((k) => (
                        <Notice_Content__Content key={k.notice_idx}>
                            <Notice_Title>{k.title}</Notice_Title>
                            <Notice_Content>{k.content}</Notice_Content>
                            <Notice_Regdate>{k.regdate.slice(0, 10)}</Notice_Regdate>
                            <Notice_Reg_Admin>{k.insert_admin_id}</Notice_Reg_Admin>
                            <Delete><Delete_Button onClick={() => delete_notice(k.notice_idx)}>삭제</Delete_Button></Delete>
                        </Notice_Content__Content>
                    ))}
                </ Notice_Container__inner>
            </ Notice_Container>
        </>
    )
})

export default NoticeManagePage;