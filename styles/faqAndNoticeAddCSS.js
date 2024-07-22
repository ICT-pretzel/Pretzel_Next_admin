import styled from "@emotion/styled";

export const Add_Container = styled.div`
    top: calc(50vh - 398.5px);
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Add_Container_2 = styled.div`
    top: calc(50vh - 333.5px);
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AddInfo_All_Container = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AddInfo_All_Container_2 = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AddInfo_Container = styled.div`
    display: flex;
    flex-direction: row;
    font: 16px/50px "Pretendard-Regular";
`

export const AddInfo_Title = styled.div`
    color: #ffffff;
    width: 50px;
    height: 50px;
`

export const SelectType = styled.select`
    background-color: #252525;
    color: #ffffff;
    width: 350px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 10px;
    border: none;
    font: 16px/50px "Pretendard-Regular";
    cursor: pointer;
`

export const FAQ_Type = styled.option`
`

export const AddContent_Container = styled.div`
`

export const AddContent_Title = styled.div`
    font: 16px "Pretendard-Regular";
    color: #ffffff;
    margin: 50px 0 10px 0;
`

export const AddContent_Title_2 = styled.div`
    font: 16px "Pretendard-Regular";
    color: #ffffff;
    margin-bottom: 10px;
`

export const AddContent_Content = styled.textarea`
    width: 400px;
    height: 150px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    font: 16px "Pretendard-Regular";
`

export const Add_Button = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #f29a2e;
    font: 600 17px "Pretendard-Regular";
    color: #ffffff;
    width: 110px;
    height: 50px;
    margin-top: 30px;

    &:hover {
        color: #868686;
        background-color: #ad6e21;
        cursor: pointer;
    }
`