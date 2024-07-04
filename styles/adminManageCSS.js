import styled from "@emotion/styled";

export const ButtonsContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const AdminNum = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
    box-sizing: border-box;
    padding-top: 19px;
`

export const AddAdminBtn = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #232323;
    font: 15px "Pretendard-Regular";
    color: #ffffff;
    height: 35px;
    width: 100px;

    &:hover {
        color: #868686;
        cursor: pointer;
    }
`

export const AdminContainer = styled.table`
    max-width: 1000px;
    width: 100%;
`

export const AdminContainer_inner = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const AdminInfo_Title = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
    `

export const AdminInfo = styled.tr`
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

export const Admin_ID = styled.td`
    width: 39%;
`

export const Admin_Right = styled.td`
    width: 20%;
`

export const Admin_Reg = styled.td`
    width: 27%;
`

export const Admin_State = styled.td`
    width: 14%;
`