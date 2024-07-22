// 공지 추가 페이지

"use client"

import LoadingSpinner from "@/app/loadingSpinner/page";
import { LoginContext } from "@/stores/StoreContext";
import { AdminPageTitle } from "@/styles/adminCommonCSS";
import { Add_Button, Add_Container, Add_Container_2, AddContent_Container, AddContent_Content, AddContent_Title, AddContent_Title_2, AddInfo_All_Container, AddInfo_All_Container_2 } from "@/styles/faqAndNoticeAddCSS";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const NoticeAddPage = () => {
    const loginStore = useContext(LoginContext)
    const router = useRouter();

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(false);

    // 공지 제목
    const [title, setTitle] = useState("");

    // 공지 내용
    const [content, setContent] = useState("");

    const API_URL = "/clientCenter/"

    // 공지 추가하는 function
    async function notice_insert() {
        if (title === "" || content === "") {
            alert("제목과 내용을 입력해 주세요.")
        } else if (title === "") {
            alert("제목을 입력해 주세요.")
        } else if (content === "") {
            alert("내용을 입력해 주세요.")
        } else if (confirm("공지를 추가하시겠습니까?")) {
            setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

            try {
                const response = await axios.post(API_URL + "notice_insert",
                    {
                        "title": title,
                        "content": content
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${loginStore.token}`
                        }
                    }
                );

                if (response.data === 1) {
                    alert("공지가 성공적으로 추가되었습니다.")
                    router.push("/main/noticeManage/noticeManagePage")
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

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    return (
        <>
            <Add_Container_2>
                <AdminPageTitle>공지 추가</AdminPageTitle>

                <AddInfo_All_Container_2>
                    <AddContent_Container>
                        <AddContent_Title_2>제목</AddContent_Title_2>
                        <AddContent_Content name="title" onChange={onChangeTitle} placeholder="제목을 입력해 주세요." required />
                    </AddContent_Container>

                    <AddContent_Container>
                        <AddContent_Title>내용</AddContent_Title>
                        <AddContent_Content name="content" onChange={onChangeContent} placeholder="내용을 입력해 주세요." required />
                    </AddContent_Container>

                    <Add_Button onClick={notice_insert}>추가하기</Add_Button>
                </AddInfo_All_Container_2>

            </Add_Container_2>

        </>
    )
}

export default NoticeAddPage;