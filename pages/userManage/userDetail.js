// 회원 상세 페이지 (회원 관리 페이지) - 다현

"use client";

import { AdminPageTitle } from "../styles/adminCommonCSS";
import { ColorGray } from "../styles/commons/commonsCSS";
import { AccountSuspension_Btn, ButtonsContainer, HorizontalLine, InitializePwd_Btn, ProfileAllContainer, ProfileContainer, ProfileTitle, Profile_Birth, Profile_Gender, Profile_Img, Profile_Info, Profile_Nickname, SuspensionRecovery_Btn, UserInfo, UserInfoAllContainer, UserInfoContainer, UserInfoTitle } from "../styles/userDetailCSS";

const UserDetail = () => {
    return (
        <>
            <AdminPageTitle>회원 상세</AdminPageTitle>
            <UserInfoAllContainer>
                <UserInfoContainer>
                    <UserInfoTitle>이름</UserInfoTitle>
                    <UserInfo>박다현</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>아이디</UserInfoTitle>
                    <UserInfo>oing_0ing</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>이메일</UserInfoTitle>
                    <UserInfo>oing_0ing@naver.com</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>최근 접속일</UserInfoTitle>
                    <UserInfo>2024-06-24</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>구독 상태</UserInfoTitle>
                    <UserInfo>베이직</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>정지 여부</UserInfoTitle>
                    <UserInfo>O</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>정지 일시</UserInfoTitle>
                    <UserInfo>2024-06-27</UserInfo>
                </UserInfoContainer>
            </UserInfoAllContainer>
            <HorizontalLine />

            <ProfileTitle>프로필</ProfileTitle>
            <ProfileAllContainer>
                <ProfileContainer>
                    <Profile_Img src="/images/samples/oing.png" />
                    <Profile_Info>
                        <Profile_Nickname>프로필명 &#160;<ColorGray>오잉</ColorGray></Profile_Nickname>
                        <Profile_Birth>생년월일 &#160;<ColorGray>2001-11-14</ColorGray></Profile_Birth>
                        <Profile_Gender>성별 &#160;<ColorGray>여성</ColorGray></Profile_Gender>
                    </Profile_Info>
                </ProfileContainer>

                <ProfileContainer>
                    <Profile_Img src="/images/samples/oing.png" />
                    <Profile_Info>
                        <Profile_Nickname>프로필명 &#160;<ColorGray>라면먹는중</ColorGray></Profile_Nickname>
                        <Profile_Birth>생년월일 &#160;<ColorGray>1996-01-20</ColorGray></Profile_Birth>
                        <Profile_Gender>성별 &#160;<ColorGray>남성</ColorGray></Profile_Gender>
                    </Profile_Info>
                </ProfileContainer>

                <ProfileContainer>
                    <Profile_Img src="/images/samples/oing.png" />
                    <Profile_Info>
                        <Profile_Nickname>프로필명 &#160;<ColorGray>라면먹는중</ColorGray></Profile_Nickname>
                        <Profile_Birth>생년월일 &#160;<ColorGray>1996-01-20</ColorGray></Profile_Birth>
                        <Profile_Gender>성별 &#160;<ColorGray>남성</ColorGray></Profile_Gender>
                    </Profile_Info>
                </ProfileContainer>

                <ProfileContainer>
                    <Profile_Img src="/images/samples/oing.png" />
                    <Profile_Info>
                        <Profile_Nickname>프로필명 &#160;<ColorGray>라면먹는중</ColorGray></Profile_Nickname>
                        <Profile_Birth>생년월일 &#160;<ColorGray>1996-01-20</ColorGray></Profile_Birth>
                        <Profile_Gender>성별 &#160;<ColorGray>남성</ColorGray></Profile_Gender>
                    </Profile_Info>
                </ProfileContainer>
            </ProfileAllContainer>

                <ButtonsContainer>
                    <SuspensionRecovery_Btn>정지 복구</SuspensionRecovery_Btn>
                    <AccountSuspension_Btn>계정 정지</AccountSuspension_Btn>
                    <InitializePwd_Btn>비밀번호 초기화</InitializePwd_Btn>
                </ButtonsContainer>
        </>
    )
}

export default UserDetail;