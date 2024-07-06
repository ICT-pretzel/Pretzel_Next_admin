// 회원 상세 페이지 (회원 관리 페이지) - 다현

"use client";

import { observer } from "mobx-react-lite";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { ColorGray, ColorOrange } from "../../styles/commons/commonsCSS";
import { AccountSuspension_Btn, ButtonsContainer, HorizontalLine, InitializePwd_Btn, ProfileAllContainer, ProfileContainer, ProfileTitle, Profile_Birth, Profile_Gender, Profile_Img, Profile_Info, Profile_Nickname, SuspensionRecovery_Btn, UserInfo, UserInfoAllContainer, UserInfoContainer, UserInfoTitle } from "../../styles/userDetailCSS";
import Layout from "../commonLayout";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../stores/StoreContext";
import axios from "axios";
import LoadingSpinner from "../commons/loadingSpinner";

const UserDetailPage = observer(() => {
    const userStore = useContext(UserContext)
    const router = useRouter();

    // 회원 상세
    const [userDetail, setUserDetail] = useState({});

    // 회원의 프로필들
    const [userProfile, setUserProfile] = useState({});

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        user_detail()
    }, []);

    const API_URL = "/user/"

    // 회원 리스트 보여주는 function
    async function user_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.post(API_URL + "user_detail",
                {
                    user_id: userStore.user_id
                },
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzIwMDc3NjA4LCJleHAiOjE3MjAwODEyMDh9.DtItypQaMMzLYiK86ME0MXL562uc8zzrdM-mMi-hNEA'
                    }
                });
            const response2 = await axios.post(API_URL + "profile_list",
                {
                    user_id: userStore.user_id
                },
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzIwMDc3NjA4LCJleHAiOjE3MjAwODEyMDh9.DtItypQaMMzLYiK86ME0MXL562uc8zzrdM-mMi-hNEA'
                    }
                });
            if (response.data && response2.data) {
                setUserDetail(response.data);
                setUserProfile(response2.data);
            }
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error)
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 계정 정지 여부에 따라서 버튼 부분 보여주기
    function buttons() {
        if (userDetail.status == '1') {
            return (
                <ButtonsContainer>
                    <AccountSuspension_Btn onClick={account_suspension}>계정 정지</AccountSuspension_Btn>
                    <InitializePwd_Btn onClick={initialize_pwd}>비밀번호 초기화</InitializePwd_Btn>
                </ButtonsContainer>
            )
        } else {
            return (
                <>
                    <ButtonsContainer>
                        <SuspensionRecovery_Btn onClick={suspension_recovery}>정지 복구</SuspensionRecovery_Btn>
                        <InitializePwd_Btn onClick={initialize_pwd}>비밀번호 초기화</InitializePwd_Btn>
                    </ButtonsContainer>
                </>
            )
        }
    }

    // 계정 정지 버튼
    async function account_suspension() {
        if (confirm("해당 계정을 정지시키겠습니까?")) {
            try {
                const response = await axios.post(API_URL + "user_stop",
                    {
                        user_id: userStore.user_id
                    },
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzIwMTcwNzk2LCJleHAiOjE3MjAxNzQzOTZ9.93BrxP3fp4YTrUJZ_uFrHCG7naIoxSWJwNlkBGXRui0'
                        }
                    }
                );

                if (response.data == '1') {
                    alert("계정 정지가 완료되었습니다.")
                    user_detail()
                } else if (response.data == '0') {
                    alert("계정 정지가 완료되지 않았습니다. 다시 한 번 시도해 주세요.")
                }
            } catch (error) {
                console.error('계정 정지 실패 : ', error);
            }
        } else {
            alert("계정 정지가 취소되었습니다.")
        }
    }

    // 정지 복구 버튼
    async function suspension_recovery() {
        if (confirm("해당 계정을 복구시키겠습니까?")) {
            try {
                const response = await axios.post(API_URL + "user_recover",
                    {
                        user_id: userStore.user_id
                    },
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzIwMTcwNzk2LCJleHAiOjE3MjAxNzQzOTZ9.93BrxP3fp4YTrUJZ_uFrHCG7naIoxSWJwNlkBGXRui0'
                        }
                    }
                );

                if (response.data == '1') {
                    alert("계정 복구가 완료되었습니다.")
                    user_detail()
                } else if (response.data == '0') {
                    alert("계정 복구가 완료되지 않았습니다. 다시 한 번 시도해 주세요.")
                }
            } catch (error) {
                console.error('정지 복구 실패 : ', error);
            }
        } else {
            alert("계정 복구가 취소되었습니다.")
        }
    }

    // 비밀번호 초기화
    async function initialize_pwd() {
        if (confirm("해당 계정의 비밀번호를 초기화 하겠습니까?")) {
            try {
                const response = await axios.post(API_URL + "pwd_reset",
                    {
                        user_id: userStore.user_id
                    },
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzIwMTcwNzk2LCJleHAiOjE3MjAxNzQzOTZ9.93BrxP3fp4YTrUJZ_uFrHCG7naIoxSWJwNlkBGXRui0'
                        }
                    }
                );

                if (response.data == '1') {
                    alert("비밀번호 초기화가 완료되었습니다.")
                    user_detail()
                } else if (response.data == '0') {
                    alert("비밀번호 초기화가 완료되지 않았습니다. 다시 한 번 시도해 주세요.")
                }
            } catch (error) {
                console.error('비밀번호 초기화 실패 : ', error);
            }
        } else {
            alert("비밀번호 초기화가 취소되었습니다.")
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <Layout>
                <AdminPageTitle>회원 상세</AdminPageTitle>
                <UserInfoAllContainer>
                    <UserInfoContainer>
                        <UserInfoTitle>이름</UserInfoTitle>
                        <UserInfo>{userDetail.name}</UserInfo>
                    </UserInfoContainer>
                    <UserInfoContainer>
                        <UserInfoTitle>아이디</UserInfoTitle>
                        <UserInfo>{userDetail.user_id}</UserInfo>
                    </UserInfoContainer>
                    <UserInfoContainer>
                        <UserInfoTitle>이메일</UserInfoTitle>
                        <UserInfo>{userDetail.email}</UserInfo>
                    </UserInfoContainer>
                    <UserInfoContainer>
                        <UserInfoTitle>최근 접속</UserInfoTitle>
                        <UserInfo>{userDetail.last_login}</UserInfo>
                    </UserInfoContainer>
                    <UserInfoContainer>
                        <UserInfoTitle>구독 상태</UserInfoTitle>
                        <UserInfo>{userDetail.subs === null ? 'X' : userDetail.subs}</UserInfo>
                    </UserInfoContainer>
                    <UserInfoContainer>
                        <UserInfoTitle>정지 여부</UserInfoTitle>
                        <UserInfo>{userDetail.status === '1' ? 'X' : <ColorOrange>O</ColorOrange>}</UserInfo>
                    </UserInfoContainer>
                </UserInfoAllContainer>
                <HorizontalLine />

                <ProfileTitle>프로필</ProfileTitle>
                <ProfileAllContainer>
                    {userProfile.map((k) => (
                        <ProfileContainer key={k.profile_idx}>
                            {/* 프로필 이미지 경로 넣어주기 */}
                            <Profile_Img src="" />
                            <Profile_Info>
                                <Profile_Nickname>프로필명 &#160;<ColorGray>{k.name}</ColorGray></Profile_Nickname>
                                <Profile_Birth>생년월일 &#160;<ColorGray>{k.birth}</ColorGray></Profile_Birth>
                                <Profile_Gender>성별 &#160;<ColorGray>{k.gender === '1' ? '남성' : '여성'}</ColorGray></Profile_Gender>
                            </Profile_Info>
                        </ProfileContainer>
                    ))}

                </ProfileAllContainer>

                {buttons()}
            </Layout>
        </>
    )
})

export default UserDetailPage;