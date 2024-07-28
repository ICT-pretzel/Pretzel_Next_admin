import styled from "@emotion/styled";

export const QnANum = styled.p`
    max-width: 1000px;
    width: 100%;
    margin: 40px 0 15px 0;
    font-family: "Pretendard-Regular";
    color: #ffffff;
`

export const QnAContainer = styled.table`
    max-width: 1000px;
    width: 100%;
`

export const QnAContainer_inner = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const QnATable_Title = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
`

export const QnATable = styled.tr`
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

export const Questioner = styled.td`
    width: 10%;
`

export const Profile_name = styled.td`
    width: 15%;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const QnATitle = styled.td`
    max-width: 0; /* max-width 추가 */
    width: 20%;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const WriteDate = styled.td`
    width: 15%;
`

export const AnswerState = styled.td`
    width: 10%;
`

export const ResolvedAdmin = styled.td`
    width: 15%;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`