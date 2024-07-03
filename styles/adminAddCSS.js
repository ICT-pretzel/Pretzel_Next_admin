import styled from "@emotion/styled";

export const AdminAdd_Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const AdminInput_Container = styled.div`
    margin-top: 80px;
`

export const AdminInfo_Container = styled.div`
    display: flex;
    flex-direction: row;
    font: 16px/50px "Pretendard-Regular";
    margin-bottom: 10px;
`

export const AdminInfo_Title = styled.div`
    color: #ffffff;
    width: 100px;
    height: 50px;
`

export const AdminInfo_Input = styled.input`
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
    border: none;
`

export const AdminInfo_Radio = styled.input`
`

export const Radio_Label = styled.label`
    color: #ffffff;
`

export const Radio_Container = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-evenly;
`

export const MemoBox = styled.textarea`
    width: 280px;
    height: 100px;
    background-color: white;
    font: 14px "Pretendard-Regular";
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
`

export const AddBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #f29a2e;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 110px;
    margin: 30px 0 100px 0;

    &:hover {
        color: #868686;
        background-color: #ad6e21;
        cursor: pointer;
    }
`