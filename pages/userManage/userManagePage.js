// 회원 관리 페이지

"use client";

import { Last_Login, PaginationNext, PaginationNum, PaginationPrev, Pagings, SearchField, SuspensionStatus, UserContainer, UserContainerContent, UserEmail, UserID, UserInfo, UserInfoTitle, UserName, UserNum } from "../../styles/userManageCSS";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { ColorOrange } from "../../styles/commons/commonsCSS";
import Layout from "../commonLayout";
import { observer } from "mobx-react-lite";
import { UserContext } from "../../stores/StoreContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const UserManagePage = observer(() => {
    const userStore = useContext(UserContext)
    const router = useRouter();

    // 회원 리스트
    const [userList, setUserList] = useState({ count: 0, user_list: [] });

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 회원 검색 - 검색어
    const onChangeKeyword = (e) => {
        userStore.setKeyword(e.target.value)
    }

    // 검색창에서 엔터키 감지
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            user_list();
        }
    }

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        user_list()
    }, []);

    const API_URL = "/user/"

    // 회원 리스트 보여주는 function
    async function user_list() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "user_list", {
                params: {
                    cPage: 1,
                    keyword: userStore.keyword
                },
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzIwMDc3NjA4LCJleHAiOjE3MjAwODEyMDh9.DtItypQaMMzLYiK86ME0MXL562uc8zzrdM-mMi-hNEA'
                }
            });
            console.log(response.data)
            if (response.data.user_list.length > 0) {
                setUserList(response.data);
            }
        } catch (error) {
            console.error('리스트 가져오기 실패: ', error)
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 유저 상세 들어가기
    const onClickUser = (user_id) => {
        userStore.setUserId(user_id)
        router.push('/userManage/userDetailPage')
    }

    return (
        <>
            <Layout>
                <AdminPageTitle>회원 관리</AdminPageTitle>
                <SearchField
                    type="text"
                    name="keyword"
                    placeholder="이름 또는 아이디, 이메일을 입력해 주세요."
                    onChange={onChangeKeyword}
                    onKeyDown={handleKeyDown} />
                <UserNum>회원 <ColorOrange>{userList.count}</ColorOrange>명</UserNum>
                <UserContainer>
                    <UserContainerContent>
                        <UserInfoTitle>
                            <UserID>아이디</UserID>
                            <UserName>이름</UserName>
                            <UserEmail>이메일</UserEmail>
                            <SuspensionStatus>정지 여부</SuspensionStatus>
                            <Last_Login>최근 로그인</Last_Login>
                        </UserInfoTitle>
                        {userList.user_list.map((k) => (
                            <UserInfo key={k.user_idx} onClick={() => onClickUser(k.user_id)}>
                                <UserID>{k.user_id}</UserID>
                                <UserName>{k.name}</UserName>
                                <UserEmail>{k.email}</UserEmail>
                                <SuspensionStatus>{k.status === '1' ? 'X' : <ColorOrange>O</ColorOrange>}</SuspensionStatus>
                                <Last_Login>{k.last_login}</Last_Login>
                            </UserInfo>
                        ))}
                    </UserContainerContent>
                </UserContainer>
                <Pagings>
                    <PaginationPrev>이전</PaginationPrev>
                    <PaginationNum>1 &#160;&#160;2 &#160;&#160;3 &#160;&#160;4 &#160;&#160;5</PaginationNum>
                    <PaginationNext>다음</PaginationNext>
                </Pagings>
            </Layout>
        </>
    )
})

export default UserManagePage;