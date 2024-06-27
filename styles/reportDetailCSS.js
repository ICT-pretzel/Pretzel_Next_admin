import styled from "@emotion/styled";

export const SubTitle = styled.p`
    font: 600 18px "Pretendard-Regular";
    color: #ffffff;
    margin-bottom: 5px;
`

export const ReportedPerson_Container = styled.div`
    background-color: #1E1E1E;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;
    max-height: 270px;
    height: 100%;
    margin: 30px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px 0 20px 25px;
`

export const Reporter_Container = styled.div`
    background-color: #1E1E1E;
    border-radius: 5px;
    max-width: 270px;
    width: 100%;
    max-height: 120px;
    height: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding-left: 20px;
`

export const Administrator_Container = styled.div`
    background-color: #1E1E1E;
    border-radius: 5px;
    max-width: 270px;
    width: 100%;
    max-height: 120px;
    height: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding-left: 20px;
`

export const Content = styled.p`
    font: 15px "Pretendard-Regular";
    color: #ffffff;
    margin-top: 5px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0 30px 0;
`

export const ReviewBox = styled.div`
    background-color: #343434;
    font: 15px "Pretendard-Regular";
    color: #ffffff;
    max-width: 450px;
    width: 100%;
    max-height: 130px;
    height: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 8px;
`

export const PendingBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #3D3D3D;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 130px;
    margin-right: 15px;

    &:hover {
        color: #868686;
        background-color: #232323;
    }
`

export const ReviewDeleteBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #3D3D3D;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 160px;
    margin-right: 15px;

    &:hover {
        color: #868686;
        background-color: #232323;
    }
`

export const ReportDetail_Container = styled.div`
    width: 100%;
    height: calc(100vh - 75px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`