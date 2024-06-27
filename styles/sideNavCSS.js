import styled from "@emotion/styled";

export const SideNavContainer = styled.div`
    box-sizing: border-box;
    max-width: 200px;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #1E1E1E;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0 10px;
    border-radius: 0 5px 5px 0;
    `

export const Menus = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 17px;
    color: #868686;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    border-radius: 5px;
    
    &:hover {
        background-color: #343434;
        color: #ffffff;
    }

`

export const AdminName = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 17px;
    color: #ffffff;
`

export const AdminNameContainer = styled.div`
    padding: 0 10px;    
    margin-top: 10px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.p`
    font-family: rubik one;
    font-size: 20px;
    color: #868686;
    align-self: center;
    position: absolute;
    bottom: 30px;
`
