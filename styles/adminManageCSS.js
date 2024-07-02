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
`

export const Admin_ID = styled.td`
    width: 50%;
`

export const Admin_Right = styled.td`
    width: 25%;
`

export const Admin_State = styled.td`
    width: 25%;
`

export const StateBtn = styled.button`
    width: 30%;
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