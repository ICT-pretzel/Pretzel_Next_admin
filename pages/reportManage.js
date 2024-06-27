// 신고 관리 페이지 - 다현

"use client";

import { AdminPageTitle } from "../styles/adminCommonCSS";
import { ColorGray, ColorOrange } from "../styles/commons/commonsCSS";
import { AdministratorName, Detail, DetailBtn, PaginationNext, PaginationNum, PaginationPrev, Pagings, Processing, ReportContainer, ReportContainer_inner, ReportType, Report_Content, Report_Title, ReviewContent, UnprocessedReportNum } from "../styles/reportManageCSS";

const ReportManage = () => {
    return (
        <>
            <AdminPageTitle>신고 관리</AdminPageTitle>
            <UnprocessedReportNum>미처리 상태의 신고 수 <ColorOrange>437</ColorOrange></UnprocessedReportNum>
            <ReportContainer>
                <ReportContainer_inner>
                    <Report_Title>
                        <ReportType>신고 유형</ReportType>
                        <ReviewContent>리뷰 내용</ReviewContent>
                        <Detail>상세</Detail>
                        <Processing>처리 상태</Processing>
                        <AdministratorName>처리한 관리자</AdministratorName>
                    </Report_Title>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>신과함께 - 동그라미땡</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing><ColorGray>처리 완료</ColorGray></Processing>
                        <AdministratorName>진돗개</AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>인사이드 아웃2 - 뿌슝빠슝삐슝뿌슝빠슝삐슝뿌슝빠슝삐슝...</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing>처리 중</Processing>
                        <AdministratorName></AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>인사이드 아웃2 - 뿌슝빠슝삐슝뿌슝빠슝삐슝뿌슝빠슝삐슝...</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing>처리 중</Processing>
                        <AdministratorName></AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>NANA - 어쩔티비 어쩔냉장고 어쩔에어컨</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing>처리 중</Processing>
                        <AdministratorName></AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>불량공주 모모코 - 메롱</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing>처리 중</Processing>
                        <AdministratorName></AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>인사이드 아웃2 - 뿌슝빠슝삐슝뿌슝빠슝삐슝</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing>처리 중</Processing>
                        <AdministratorName></AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>인사이드 아웃2 - 뿌슝빠슝삐슝뿌슝빠슝삐슝뿌슝빠슝삐슝...</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing>처리 중</Processing>
                        <AdministratorName></AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>신과함께 - 동그라미땡</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing><ColorGray>처리 완료</ColorGray></Processing>
                        <AdministratorName>진돗개</AdministratorName>
                    </Report_Content>
                    <Report_Content>
                        <ReportType>욕설</ReportType>
                        <ReviewContent>신과함께 - 동그라미땡</ReviewContent>
                        <Detail><DetailBtn>상세</DetailBtn></Detail>
                        <Processing><ColorGray>처리 완료</ColorGray></Processing>
                        <AdministratorName>진돗개</AdministratorName>
                    </Report_Content>
                </ ReportContainer_inner>
            </ ReportContainer>
            <Pagings>
                <PaginationPrev>이전</PaginationPrev>
                <PaginationNum>1 &#160;&#160;2 &#160;&#160;3 &#160;&#160;4 &#160;&#160;5</PaginationNum>
                <PaginationNext>다음</PaginationNext>
            </Pagings>
        </>
    )
}

export default ReportManage;