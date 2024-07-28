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
    height: 60px;
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
export const All_Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 10px auto;
`

export const Content_Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin-top: 5px;
    display: ${({ isContentVisible }) => (isContentVisible ? 'block' : 'none')};
`

export const ContentTitle = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 40px;
    background-color: #343434;
    border-bottom: 1px solid #343434;
    font: 600 15px "Pretendard-Regular";
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 40px;
    background-color: #252525;
    border-bottom: 1px solid #343434;
    font: 15px "Pretendard-Regular";
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background-color: #141414;
        color: #868686;
        cursor: pointer;
    }
`

export const ReportIdx = styled.p`
    width: 15%;
`

export const ReviewIdx = styled.p`
    width: 15%;
`

export const AnsDate = styled.p`
    width: 25%;
`

export const RegDate = styled.p`
    width: 25%;
`

export const Status = styled.p`
    width: 20%;
`

export const QuestionIdx = styled.p`
    width: 15%;
`

export const Q_RegDate = styled.p`
    width: 25%;
`

export const Q_AnsDate = styled.p`
    width: 25%;
`

export const Q_Content = styled.p`
    width: 35%;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const NoneContent = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 40px;
    background-color: #252525;
    font: 18px "Pretendard-Regular";
    text-align: center;
    color: #868686;
    box-sizing: border-box;
    padding-top: 8px;
`