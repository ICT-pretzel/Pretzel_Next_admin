// 영화 관리 페이지 - 다현

"use client";

import { ColorGreen, ColorOrange, ColorRed } from "../styles/commons/commonsCSS";

const { AdminPageTitle } = require("../styles/adminCommonCSS");
const { MovieName, ReleaseYear, MovieGrade, InfoEdit, InfoDelete, InformationMatch, MovieNum, MovieContainer, MovieContainer_Content, Pagings, PaginationPrev, PaginationNum, PaginationNext, MovieInfo_Title, MovieInfo, EditBtn, DeleteBtn, MovieAddBtn, SynchroBtn, Buttons, ButtonsContainer } = require("../styles/movieManageCSS");
const { SearchField } = require("../styles/userManageCSS");

const MovieManage = () => {
    return (
        <>
            <AdminPageTitle>콘텐츠 관리</AdminPageTitle>
            <SearchField type="text" placeholder="영화명을 입력해 주세요. (한글, 영어 가능)" />
            <ButtonsContainer>
                <MovieNum>총 영화수 <ColorOrange>1818</ColorOrange></MovieNum>
                <Buttons>
                    <MovieAddBtn>영화 추가</MovieAddBtn>
                    <SynchroBtn>TMDB 동기화</SynchroBtn>
                </Buttons>
            </ButtonsContainer>
            <MovieContainer>
                <MovieContainer_Content>
                    <MovieInfo_Title>
                        <MovieName>영화명</MovieName>
                        <ReleaseYear>개봉년도</ReleaseYear>
                        <MovieGrade>등급</MovieGrade>
                        <InfoEdit>수정</InfoEdit>
                        <InfoDelete>삭제</InfoDelete>
                        <InformationMatch>일치 여부</InformationMatch>
                    </MovieInfo_Title>
                    <MovieInfo>
                        <MovieName>불량공주 모모코</MovieName>
                        <ReleaseYear>2020</ReleaseYear>
                        <MovieGrade>15</MovieGrade>
                        <InfoEdit><EditBtn>수정</EditBtn></InfoEdit>
                        <InfoDelete><DeleteBtn>삭제</DeleteBtn></InfoDelete>
                        <InformationMatch><ColorGreen>일치</ColorGreen></InformationMatch>
                    </MovieInfo>
                    <MovieInfo>
                        <MovieName>불량공주 모모코</MovieName>
                        <ReleaseYear>2020</ReleaseYear>
                        <MovieGrade>15</MovieGrade>
                        <InfoEdit><EditBtn>수정</EditBtn></InfoEdit>
                        <InfoDelete><DeleteBtn>삭제</DeleteBtn></InfoDelete>
                        <InformationMatch><ColorGreen>일치</ColorGreen></InformationMatch>
                    </MovieInfo>
                    <MovieInfo>
                        <MovieName>불량공주 모모코</MovieName>
                        <ReleaseYear>2020</ReleaseYear>
                        <MovieGrade>15</MovieGrade>
                        <InfoEdit><EditBtn>수정</EditBtn></InfoEdit>
                        <InfoDelete><DeleteBtn>삭제</DeleteBtn></InfoDelete>
                        <InformationMatch><ColorRed>불일치</ColorRed></InformationMatch>
                    </MovieInfo>
                    <MovieInfo>
                        <MovieName>불량공주 모모코</MovieName>
                        <ReleaseYear>2020</ReleaseYear>
                        <MovieGrade>15</MovieGrade>
                        <InfoEdit><EditBtn>수정</EditBtn></InfoEdit>
                        <InfoDelete><DeleteBtn>삭제</DeleteBtn></InfoDelete>
                        <InformationMatch><ColorGreen>일치</ColorGreen></InformationMatch>
                    </MovieInfo>
                </MovieContainer_Content>
            </MovieContainer>
            <Pagings>
                <PaginationPrev>이전</PaginationPrev>
                <PaginationNum>1 &#160;&#160;2 &#160;&#160;3 &#160;&#160;4 &#160;&#160;5</PaginationNum>
                <PaginationNext>다음</PaginationNext>
            </Pagings>
        </>
    )
}

export default MovieManage;
