// 관리자 상세 페이지 - 처리한 신고 내역
"use client";

import { useContext, useState } from "react";
import { All_Container, AnsDate, ArrowIcon, Content, ContentTitle, Content_Container, List_Container, NoneContent, Process_List, RegDate, ReportIdx, ReviewIdx, Status } from "../../../../styles/adminDetailCSS";
import axios from "axios";
import { AdminContext } from "../../../../stores/StoreContext";
import { useRouter } from "next/navigation";

const AdminDetailReport = () => {
    const adminStore = useContext(AdminContext)
    const router = useRouter();

    // 처리한 신고 리스트
    const [adminReportList, setAdminReportList] = useState([]);

    // 토글 여부
    const [isContentVisible, setIsContentVisible] = useState([]);

    const API_URL = "/master/"

    // 신고
    async function admin_report() {
        try {
            const response = await axios.post(API_URL + "admin_report", {
                "admin_id": adminStore.adminInfo.admin_id
            });
            console.log(response.data)
            if (response.data) {
                setAdminReportList(response.data)
            }
        } catch (error) {
            console.error('목록 가져오기 실패 : ', error);
        }
    }

    // 처리 리스트에 따라서 보여주는 내용 다르게
    function list_content() {
        if (adminReportList.length === 0) {
            return (
                <>
                    <NoneContent>처리한 내역이 없습니다.</NoneContent>
                </>
            )
        } else {
            return (
                <>
                    <ContentTitle>
                        <ReportIdx>신고 idx</ReportIdx>
                        <ReviewIdx>리뷰 idx</ReviewIdx>
                        <RegDate>신고 날짜</RegDate>
                        <AnsDate>처리 날짜</AnsDate>
                        <Status>처리 방식</Status>
                    </ContentTitle>
                </>
            )
        }
    }

    // 신고 목록 클릭시
    const onClickReport = (report_idx) => {
        localStorage.setItem("report_idx", report_idx)
        router.push('/main/reportManage/reportDetailPage')
    }

    // content container display 상태를 토글
    const onClick_report_list = () => {
        admin_report()
        setIsContentVisible(!isContentVisible);
    }

    return (
        <>
            <All_Container>
                <List_Container>
                    <Process_List>처리한 신고 내역</Process_List>
                    <ArrowIcon
                        onClick={onClick_report_list}
                        src={isContentVisible ? "/images/icons/ArrowDown.png" : "/images/icons/ArrowUp.png"} />
                </List_Container>
                <Content_Container isContentVisible={!isContentVisible}>
                    {list_content()}
                    {adminReportList.map((k) => (
                        <Content key={k.report_idx} onClick={() => onClickReport(k.report_idx)}>
                            <ReportIdx>{k.report_idx}</ReportIdx>
                            <ReviewIdx>{k.review_idx}</ReviewIdx>
                            <RegDate>{k.regdate}</RegDate>
                            <AnsDate>{k.ansdate}</AnsDate>
                            <Status>{k.status === '0' ? '해당 리뷰 삭제' : '신고 보류'}</Status>
                        </Content>
                    ))}
                </Content_Container>
            </All_Container>
        </>
    )
}

export default AdminDetailReport;