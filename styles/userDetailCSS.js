import styled from "@emotion/styled";

export const UserInfoAllContainer = styled.div`
    margin-top: 30px;
`

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    font: 16px/50px "Pretendard-Regular";
    margin-bottom: 10px;
`

export const UserInfoTitle = styled.div`
    color: #ffffff;
    width: 100px;
    height: 50px;
`

export const UserInfo = styled.div`
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
`

export const HorizontalLine = styled.hr`
    margin: 30px 0;
    width: 80%;
    border: 1px solid #3D3D3D;
`

export const ProfileContainer = styled.div`
    background-color: #252525;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 320px;
    height: 150px;
    border-radius: 5px;
    margin: 0 10px 20px 10px;
`

export const Profile_Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

export const Profile_Info = styled.div`
    width: 160px;
    color: #ffffff;
    font: 16px "Pretendard-Regular";
`

export const Profile_Nickname = styled.p`
    margin-bottom: 5px;
`

export const Profile_Birth = styled.p`
    margin-bottom: 5px;
`

export const Profile_Gender = styled.p`
`

export const SuspensionRecovery_Btn = styled.button`
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

export const AccountSuspension_Btn = styled.button`
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

export const InitializePwd_Btn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #3D3D3D;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 170px;

    &:hover {
        color: #868686;
        background-color: #232323;
    }
`

export const ButtonsContainer = styled.div`
    margin: 30px 0 50px 0;
`

export const ProfileAllContainer = styled.div`
    width: 680px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProfileTitle = styled.h2`
    font: 600 20px "Pretendard-Regular";
    margin-bottom: 30px;
    color: #ffffff;
`