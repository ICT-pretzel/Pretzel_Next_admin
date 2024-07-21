import styled from "@emotion/styled";

export const ButtonsContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
`

export const MovieNum = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
    box-sizing: border-box;
    padding-top: 19px;
`

export const MovieAddBtn = styled.button`
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

export const SynchroBtn = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #232323;
    font: 15px "Pretendard-Regular";
    color: #ffffff;
    height: 35px;
    width: 130px;

    &:hover {
        color: #868686;
        cursor: pointer;
    }
`

export const Buttons = styled.div`
`

export const MovieContainer = styled.table`
    max-width: 1000px;
    width: 100%;
`

export const MovieContainer_Content = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const MovieInfo_Title = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
`

export const MovieInfo = styled.tr`
    background-color: #1E1E1E;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #343434;
`

export const MovieName = styled.td`
    width: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 20px;
    max-width: 0; /* max-width 추가 */
`

export const ReleaseYear = styled.td`
    width: 8%;
`

export const MovieGrade = styled.td`
    width: 7%;
`

export const InfoEdit = styled.td`
    width: 9%;
`

export const InfoDelete = styled.td`
    width: 9%;
`

export const InformationMatch = styled.td`
    width: 11%;
`

export const AiSync = styled.td`
    width: 13%;
`

export const AiSyncBtn = styled.button`
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

export const AiReSyncBtn = styled.button`
    background-color: transparent;
    border: none;
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;

    &:hover {
        color: #868686;
        cursor: pointer;
    }
`

export const EditBtn = styled.button`
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

export const DeleteBtn = styled.button`
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

export const GradeAll = styled.span`
    color: #00964B;
`

export const Grade12 = styled.span`
    color: #EABC00;
`

export const Grade15 = styled.span`
    color: #DC7317;
`

export const Grade18 = styled.span`
    color: #D92C35;
`