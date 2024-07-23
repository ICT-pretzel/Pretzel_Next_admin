import styled from "@emotion/styled";

export const NoticeNum = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
    box-sizing: border-box;
    padding-top: 19px;
`

export const NoticeAddBtn = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #232323;
    font: 15px "Pretendard-Regular";
    color: #ffffff;
    height: 35px;
    width: 100px;
    margin-right: 10px;

    &:hover {
        color: #868686;
        cursor: pointer;
    }
`

export const Notice_Container = styled.table`
    max-width: 1000px;
    width: 100%;
`

export const Notice_Container__inner = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const Notice_Content__Title = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
`

export const Notice_Content__Content = styled.tr`
    background-color: #1E1E1E;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #343434;
`

export const Notice_Title = styled.td`
    width: 25%;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const Notice_Content = styled.td`
    width: 35%;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const Notice_Regdate = styled.td`
    width: 10%;
`

export const Notice_Reg_Admin = styled.td`
    width: 20%;
`