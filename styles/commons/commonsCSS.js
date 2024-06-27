import styled from "@emotion/styled";

export const Icon20px = styled.img`
    width: 20px;
    height: 20px;
`;

export const Icon24px = styled.img`
    width: 24px;
    height: 24px;
`;

export const Icon30px = styled.img`
    width: 30px;
    height: 30px;
`;

export const ColorOrange = styled.span`
    color: #f29a2e;
`;

export const ColorGray = styled.span`
    color: #868686;
`;

export const ColorGreen = styled.span`
    color: green;
`;

export const ColorRed = styled.span`
    color: red;
`;

export const TopButton = styled.button`
    display: block; /* 처음에는 숨겨둔다. */
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    background-color: #3d3d3d;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    line-height: 60px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

    &:hover{
        background-color: #868686;
    }
`

export const LogoutButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    font: 16px "Pretendard-Regular";
    background-color: #f29a2e;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 35px;

    &:hover {
        background-color: #ad6e21;
    }
`;