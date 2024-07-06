// 신고 상세 페이지 (신고 관리 페이지) - 다현

"use client";

import { useContext, useEffect, useState } from "react";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { ColorGray, ColorOrange } from "../../styles/commons/commonsCSS";
import { Administrator_Container, Buttons, ConfirmBtn, Content, PendingBtn, ReportDetail_Container, ReportedPerson_Container, Reporter_Container, ReviewBox, ReviewDeleteBtn, SubTitle } from "../../styles/reportDetailCSS";
import Layout from "../commonLayout";
import { ReportContext } from "../../stores/StoreContext";
import { useRouter } from "next/router";
import LoadingSpinner from "../commons/loadingSpinner";
import axios from "axios";

const ReportDetailPage = () => {
    const reportStore = useContext(ReportContext);
    const router = useRouter();

    // 신고 상세
    const [reportDetail, setReportDetail] = useState({ profile_name: '', user_id: '', report: {}, content: '' });

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        report_detail();
    }, []);

    const API_URL = "/report/";

    // 신고 상세 function
    async function report_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.post(API_URL + "report_detail",
                {
                    report_idx: reportStore.report_idx
                },
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzIwMTcwNzk2LCJleHAiOjE3MjAxNzQzOTZ9.93BrxP3fp4YTrUJZ_uFrHCG7naIoxSWJwNlkBGXRui0'
                    }
                }
            );

            if (response.data.report && response.data.user_id) {
                setReportDetail({
                    profile_name: response.data.profile_name,
                    user_id: response.data.user_id,
                    report: response.data.report,
                    content: response.data.content
                });
            }
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 신고 처리 여부에 따라서 관리자 부분 보여주기
    function report_answer() {
        if (reportDetail.report.status == '2') {
            return (
                <Buttons>
                    <PendingBtn onClick={report_pending}>신고 보류</PendingBtn>
                    <ReviewDeleteBtn onClick={review_delete}>해당 리뷰 삭제</ReviewDeleteBtn>
                </Buttons>
            )
        } else {
            return (
                <>
                    <Administrator_Container>
                        <SubTitle>관리자</SubTitle>
                        <Content>관리자 아이디 &#160;<ColorGray>{reportDetail.report.admin_id}</ColorGray></Content>
                        <Content>처리 방식 &#160;<ColorGray>{reportDetail.report.status === '1' ? '신고 보류' : '해당 리뷰 삭제'}</ColorGray></Content>
                    </Administrator_Container>
                    <ConfirmBtn onClick={onClickConfirm}>확인</ConfirmBtn>
                </>
            )
        }
    }

    // 신고 보류 버튼 클릭 시 신고의 상태 변경
    async function report_pending() {
        if (confirm("이 신고를 보류 상태로 처리하시겠습니까?")) {
            setReportDetail.report.status = '1';

            // controller 수정되면 report_ok axios로 가기
            if (reportDetail.report.status = '1') {
                alert("신고 보류 처리가 완료되었습니다.")
                // 신고 상세정보 보여주는 function 재실행
                report_detail();
            } else {
                alert("신고의 보류 처리가 완료되지 않았습니다. 다시 한 번 시도해 주세요.")
            }
        } else {
            alert("보류 처리가 취소되었습니다.")
        }
    }

    // 리뷰 삭제 버튼 클릭 시 신고의 상태 변경
    async function review_delete() {
        if (confirm("신고당한 리뷰를 삭제하시겠습니까?")) {
            setReportDetail.report.status = '0';
            
            // controller 수정되면 report_ok axios로 가기
            if (reportDetail.report.status = '0') {
                alert("신고당한 리뷰의 삭제 처리가 완료되었습니다.")
                // 신고 상세정보 보여주는 function 재실행
                report_detail();
            } else {
                alert("삭제 처리가 완료되지 않았습니다. 다시 한 번 시도해 주세요.")
            }
        } else {
            alert("리뷰 삭제가 취소되었습니다.")
        }
    }

    // 확인 버튼 클릭 시 리스트로 돌아가기
    const onClickConfirm = () => {
        router.push('/reportManage/reportManagePage')
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <Layout>
                <AdminPageTitle>신고 상세</AdminPageTitle>

                <ReportDetail_Container>
                    <ReportedPerson_Container>
                        <SubTitle>피신고자</SubTitle>
                        <Content>아이디 &#160;<ColorGray>{reportDetail.user_id}</ColorGray></Content>
                        <Content>리뷰내용</Content>
                        <ReviewBox>{reportDetail.content}</ReviewBox>
                    </ReportedPerson_Container>

                    <Reporter_Container>
                        <SubTitle>신고자</SubTitle>
                        <Content>닉네임 &#160;<ColorGray>{reportDetail.profile_name}</ColorGray></Content>
                        <Content>신고유형 &#160;<ColorOrange>{reportDetail.report.type}</ColorOrange></Content>
                    </Reporter_Container>

                    {report_answer()}
                </ReportDetail_Container>
            </Layout>
        </>
    )
}

export default ReportDetailPage;