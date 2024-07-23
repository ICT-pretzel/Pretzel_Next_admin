import styled from "@emotion/styled";

export const SearchField = styled.input`
    background-color: #1E1E1E;
    box-sizing: border-box;
    max-width: 600px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-family: "Pretendard-Regular";
    color: #ffffff;
    border: none;
    padding-left: 40px;
    background-image: url('/images/icons/search.png');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px 20px;
    margin: 30px 0;
`

export const UserNum = styled.p`
    max-width: 1000px;
    width: 100%;
    margin-bottom: 15px;
    font-family: "Pretendard-Regular";
    color: #ffffff;
`

export const UserContainer = styled.table`
    max-width: 1000px;
    width: 100%;
`

export const UserContainerContent = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const UserInfoTitle = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
`

export const UserInfo = styled.tr`
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

export const UserID = styled.td`
    width: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 20px;
    max-width: 0; /* max-width 추가 */
`

export const UserName = styled.td`
    width: 15%;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 0;
`

export const UserEmail = styled.td`
    width: 25%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 10px;
    max-width: 0; /* max-width 추가 */
`

export const SuspensionStatus = styled.td`
    width: 10%;
`

export const Last_Login = styled.td`
    width: 20%;
`

export const Pagings = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    width: 200px;
    justify-content: space-between;
`

export const PaginationPrev = styled.p`
    font-family: "Pretendard-Regular";
    color: #868686;
`

export const PaginationNum = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
`

export const PaginationNext = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
`