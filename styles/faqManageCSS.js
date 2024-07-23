import styled from "@emotion/styled";

export const FAQNum = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
    box-sizing: border-box;
    padding-top: 19px;
`

export const FAQAddBtn = styled.button`
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

export const ButtonsContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 30px 0 15px 0;
    display: flex;
    justify-content: space-between;
`

export const FAQ_Container = styled.table`
    max-width: 1000px;
    width: 100%;
`

export const FAQ_Container__inner = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const FAQ_Content__Title = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
`

export const FAQ_Content__Content = styled.tr`
    background-color: #1E1E1E;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #343434;
`

export const FAQ_Type = styled.td`
    width: 12.5%;
`

export const FAQ_Title = styled.td`
    width: 20%;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const FAQ_Content = styled.td`
    width: 30%;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const FAQ_Regdate = styled.td`
    width: 12.5%;
`

export const FAQ_Reg_Admin = styled.td`
    width: 15%;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const Delete = styled.td`
    width: 10%;
`

export const Delete_Button = styled.button`
    width: 70%;
    height: 25px;
    border-radius: 50px;
    background-color: #4b4b4b;
    border: none;
    font-family: "Pretendard-Regular";
    color: #ffffff;

    &:hover {
        background-color: #343434;
        color: #868686;
        cursor: pointer;
    }
`