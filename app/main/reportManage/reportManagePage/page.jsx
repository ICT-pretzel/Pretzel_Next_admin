// 신고 관리 페이지 - 다현

"use client";

import axios from "axios";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../../loadingSpinner/page";
import { AdminPageTitle } from "../../../../styles/adminCommonCSS";
import { AdministratorName, Processing, ReportContainer, ReportContainer_inner, ReportDate, ReportType, Report_Content, Report_Title, ReviewContent, UnprocessedReportNum } from "../../../../styles/reportManageCSS";
import { ColorOrange } from "../../../../styles/commons/commonsCSS";
import { ReportContext } from "../../../../stores/StoreContext";

const ReportManagePage = observer(() => {
    const reportStore = useContext(ReportContext)
    const router = useRouter();

    // 신고 리스트
    const [reportList, serReportList] = useState({ report_list: [], count: 0 });

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        report_list()
    }, []);

    const API_URL = "/report/"

    // 신고 리스트 보여주는 function
    async function report_list() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "report_list", {
                params: {
                    cPage: 1
                }
            });

            if (response.data.report_list.length > 0) {
                serReportList(response.data);
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

    // 신고 상세 들어가기
    const onClickReport = (report_idx) => {
        reportStore.setReportIdx(report_idx)
        localStorage.setItem("report_idx", report_idx)
        router.push('/main/reportManage/reportDetailPage')
    }

    return (
        <>
            <AdminPageTitle>신고 관리</AdminPageTitle>
            <UnprocessedReportNum>미처리 상태의 신고 수 <ColorOrange>{reportList.count}</ColorOrange></UnprocessedReportNum>
            <ReportContainer>
                <ReportContainer_inner>
                    <Report_Title>
                        <ReportType>신고 유형</ReportType>
                        <ReviewContent>리뷰 내용</ReviewContent>
                        <Processing>처리 상태</Processing>
                        <AdministratorName>처리한 관리자</AdministratorName>
                        <ReportDate>신고 날짜</ReportDate>
                        <ReportDate>처리 날짜</ReportDate>
                    </Report_Title>
                    {reportList.report_list.map((k) => (
                        <Report_Content key={k.report_idx} onClick={() => onClickReport(k.report_idx)}>
                            <ReportType>{k.type}</ReportType>
                            <ReviewContent>{k.content}</ReviewContent>
                            <Processing>{k.status === '2' ? <ColorOrange>처리 전</ColorOrange> : '처리 완료'}</Processing>
                            <AdministratorName>{k.admin_name}</AdministratorName>
                            <ReportDate>{k.regdate.slice(0, 10)}</ReportDate>
                            <ReportDate>{k.ansdate ? k.ansdate.slice(0, 10) : ""}</ReportDate>
                        </Report_Content>
                    ))}
                </ ReportContainer_inner>
            </ ReportContainer>
        </>
    )
})

export default ReportManagePage;