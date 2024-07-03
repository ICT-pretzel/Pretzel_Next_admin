import styled from "@emotion/styled";

export const AdminDetail_Container = styled.div`
    margin-top: 30px;
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

export const AdminInfo = styled.p`
    background-color: #252525;
    color: #868686;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
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

export const EditBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #f29a2e;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 80px;
    margin: 30px 0 100px 0;

    &:hover {
        color: #868686;
        background-color: #ad6e21;
        cursor: pointer;
    }
`

export const Process_List = styled.div`
    font: 16px "Pretendard-Regular";
    color: #ffffff;
`

export const List_Container = styled.div`
    background-color: #252525;
    border-radius: 5px;
    max-width: 1000px;
    width: 100%;
    height: 60px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
`

export const ArrowIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`