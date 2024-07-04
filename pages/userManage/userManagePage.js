// 회원 관리 페이지

"use client";

import { DetailBtn, PaginationNext, PaginationNum, PaginationPrev, Pagings, SearchField, SuspensionDate, SuspensionStatus, UserBirth, UserContainer, UserContainerContent, UserDetail, UserEmail, UserID, UserInfo, UserInfoTitle, UserNum } from "../../styles/userManageCSS";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { ColorOrange } from "../../styles/commons/commonsCSS";

const UserManagePage = () => {
    return (
        <>
            <AdminPageTitle>회원 관리</AdminPageTitle>
            <SearchField type="text" placeholder="이름 또는 아이디, 이메일을 입력해 주세요." />
            <UserNum>회원 <ColorOrange>437</ColorOrange>명</UserNum>
            <UserContainer>
                <UserContainerContent>
                    <UserInfoTitle>
                        <UserID>아이디</UserID>
                        <UserEmail>이메일</UserEmail>
                        <UserBirth>생년월일</UserBirth>
                        <SuspensionStatus>정지 여부</SuspensionStatus>
                        <SuspensionDate>정지 일시</SuspensionDate>
                        <UserDetail>상세 정보</UserDetail>
                    </UserInfoTitle>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                    <UserInfo>
                        <UserID>oing_0ing</UserID>
                        <UserEmail>oing_0ing@naver.com</UserEmail>
                        <UserBirth>2001-11-14</UserBirth>
                        <SuspensionStatus>X</SuspensionStatus>
                        <SuspensionDate></SuspensionDate>
                        <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                    </UserInfo>
                </UserContainerContent>
            </UserContainer>
            <Pagings>
                <PaginationPrev>이전</PaginationPrev>
                <PaginationNum>1 &#160;&#160;2 &#160;&#160;3 &#160;&#160;4 &#160;&#160;5</PaginationNum>
                <PaginationNext>다음</PaginationNext>
            </Pagings>
        </>
    )
}

export default UserManagePage;