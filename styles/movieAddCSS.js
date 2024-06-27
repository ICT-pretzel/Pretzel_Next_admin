import styled from "@emotion/styled"

export const SearchContainer = styled.div`
    margin-top: 50px;
`

export const SearchContainer_inner = styled.div`
    display: flex;
    flex-direction: row;
    font: 16px/50px "Pretendard-Regular";
    margin-bottom: 10px;
`

export const SearchTitle = styled.div`
    color: #ffffff;
    width: 100px;
    height: 50px;
    `

export const Keyword = styled.input`
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
    border: none;
`

export const SearchBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #3D3D3D;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
    width: 100px;
    margin-top: 15px;

    &:hover {
        color: #868686;
        background-color: #232323;
    }
`

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px 20px;
    margin: 40px 5% 0 5%;
`

export const OneMovieContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const MoviePoster = styled.img`
    max-width: 200px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    border-radius: 5px;
`

export const ReleaseYear = styled.div`
    font: 15px "Pretendard-Regular";
    color: #FFFFFF;
    margin: 10px 0 5px 0;
`

export const MovieTitle = styled.p`
    font: 15px "Pretendard-Regular";
    color: #FFFFFF;
`

export const CheckIcon = styled.img`
    max-width: 30px;
    width: 100%;
    max-height: 30px;
    height: 100%;
    align-self: center;
    margin-bottom: 10px;
`

export const InputContainer = styled.div`
    margin-top: 50px;
`

export const InputContainer_inner = styled.div`
    display: flex;
    flex-direction: row;
    font: 16px/50px "Pretendard-Regular";
    margin-bottom: 10px;
`

export const InputTitle = styled.div`
    color: #ffffff;
    width: 110px;
    height: 50px;
`

export const OriginalContent = styled.div`
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
`

export const InputContent = styled.input`
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
    border: none;
`

export const SelectGenre = styled.select`
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 10px;
    border: none;
    font: 16px/50px "Pretendard-Regular";
`

export const Genre = styled.option`
`

export const MovieUpload = styled.input`
    font: 16px/50px "Pretendard-Regular";
    background-color: #252525;
    color: #ffffff;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 5px;
    border: none;
    line-height: 50px;

    &::file-selector-button {
        background-color: #3d3d3d;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        font: 15px "Pretendard-Regular";
        margin-right: 10px;
    }
    
    &::file-selector-button:hover {
        background-color: #868686;
    }
`

export const AddBtn = styled.button`
    border: none;
    border-radius: 50px;
    background-color: #f29a2e;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    height: 50px;
    width: 110px;
    margin: 30px 0 100px 0;

    &:hover {
        background-color: #ad6e21;
    }
`