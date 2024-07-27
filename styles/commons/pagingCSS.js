import styled from "@emotion/styled"

export const Pagings = styled.ol`
    font-family: "Pretendard-Regular";
    color: #ffffff;
    display: flex;
    flex-direction: row;
    margin: 50px 0 100px 0;
    justify-content: space-between;
`

export const Page = styled.span`
    margin: 0 15px;

    &:hover {
        color: #868686;
        cursor: pointer;
    }
`

export const NoPage = styled.span`
    color: #868686;
    margin: 0 15px;
`