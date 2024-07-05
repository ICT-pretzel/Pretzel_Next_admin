import styled from "@emotion/styled";

export const UnprocessedReportNum = styled.p`
    max-width: 1000px;
    width: 100%;
    margin: 40px 0 15px 0;
    font-family: "Pretendard-Regular";
    color: #ffffff;
`

export const ReportContainer = styled.table`
    max-width: 1000px;
    width: 100%;
`

export const ReportContainer_inner = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const Report_Title = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
`

export const Report_Content = styled.tr`
    background-color: #1E1E1E;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #343434;
    cursor: pointer;

    &:hover {
        background-color: #141414;
        color: #868686;
    }
`

export const ReportType = styled.td`
    width: 15%;
`

export const ReviewContent = styled.td`
    max-width: 0; /* max-width 추가 */
    width: 40%;
    box-sizing: border-box;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const ReportDate = styled.td`
    width: 20%;
`

export const Processing = styled.td`
    width: 10%;
`

export const AdministratorName = styled.td`
    width: 15%;
`

export const Pagings = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    width: 200px;
    justify-content: space-between;
`

export const PaginationPrev = styled.p`
    font-family: "Pretendard-Regular";
    color: #868686;
`

export const PaginationNum = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
`

export const PaginationNext = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
`