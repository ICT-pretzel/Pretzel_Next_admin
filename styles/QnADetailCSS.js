import styled from "@emotion/styled";

export const Question_Container = styled.div`
    width: 550px;
    height: 430px;
    background-color: #1E1E1E;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const Answer_Container = styled.div`
    width: 550px;
    height: 420px;
    background-color: #1E1E1E;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0 50px 0;
`

export const Info_Container = styled.div`
    display: flex;
    flex-direction: row;
    font: 16px/50px "Pretendard-Regular";
    margin-bottom: 10px;
`

export const Info_Title = styled.div`
    color: #ffffff;
    width: 110px;
    height: 50px;
`

export const Info = styled.div`
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
`

export const Info2 = styled.div`
    background-color: #252525;
    color: #868686;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
`

export const Question_Title = styled.p`
    font: 16px "Pretendard-Regular";
    color: #ffffff;
`

export const Question_Date = styled.p`
    font: 13px "Pretendard-Regular";
    color: #868686;
    line-height: 19px;
`

export const Question_Content = styled.p`
    background-color: #252525;
    font: 16px "Pretendard-Regular";
    color: #ffffff;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    width: 500px;
    height: 200px;
`

export const QuestionInfo_Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin: 30px 0 10px 0;
`

export const Answer_Content = styled.p`
    background-color: #252525;
    font: 16px "Pretendard-Regular";
    color: #ffffff;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    width: 500px;
    height: 200px;
`

export const Answer_Write = styled.textarea`
    background-color: #252525;
    font: 16px "Pretendard-Regular";
    color: #ffffff;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    width: 500px;
    height: 200px;
    border: none;
    margin-top: 50px;
`

export const Answer_Date = styled.p`
    font: 13px "Pretendard-Regular";
    color: #868686;
    margin: 20px 0 10px 0;
    width: 500px;
    text-align: right;
`

export const CompleteBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #3D3D3D;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 130px;
    margin: 0 10px 50px 10px;

    &:hover {
        color: #868686;
        background-color: #232323;
        cursor: pointer;
    }
`

export const SaveBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #f29a2e;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 130px;
    margin: 0 10px 50px 10px;

    &:hover {
        color: #868686;
        background-color: #ad6e21;
        cursor: pointer;
    }
`

export const Subtitle = styled.p`
    color: #ffffff;
    font: 600 20px "Pretendard-Regular";
    margin-top: 50px;
`

export const Buttons = styled.div`
    display: flex;
`