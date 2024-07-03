// 영화 관리 페이지

"use client";

import { observer } from "mobx-react-lite";
import { ColorGray, ColorGreen, ColorOrange, ColorRed } from "../../styles/commons/commonsCSS";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../stores/StoreContext";
import axios from "axios";
import { Grade12, Grade15, Grade18, GradeAll } from "../../styles/adminManageCSS";

const { AdminPageTitle } = require("../../styles/adminCommonCSS");
const { MovieName, ReleaseYear, MovieGrade, InfoEdit, InfoDelete, InformationMatch, MovieNum, MovieContainer, MovieContainer_Content, Pagings, PaginationPrev, PaginationNum, PaginationNext, MovieInfo_Title, MovieInfo, EditBtn, DeleteBtn, MovieAddBtn, SynchroBtn, Buttons, ButtonsContainer } = require("../../styles/movieManageCSS");
const { SearchField } = require("../../styles/userManageCSS");

const MovieManagePage = observer(() => {
    const movieStore = useContext(MovieContext)

    // 영화 리스트
    const [movieList, setMovieList] = useState({ count: 0, movie_list: [] });

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        list_movie()
    }, []);

    const API_URL = "/movie/"

    async function list_movie() {
        try {
            const response = await axios.get(API_URL + "list_movie", {
                params: {
                    keyword: movieStore.keyword
                }
            });
            if (response.data.movie_list.length > 0) {
                setMovieList(response.data);
            }
        } catch (error) {
            console.error('리스트 가져오기 실패: ', error)
        }
    }

    // 영화 검색 - 검색어
    const onChangeKeyword = (e) => {
        movieStore.setKeyword(e.target.value)
    }

    // 검색창에서 엔터키 감지
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            list_movie();
        }
    }

    // 수정 버튼 클릭 시
    const onClickMovieOne = (movie) => {
        movieStore.setMovieUpdate('movie_idx', movie.movie_idx);
        movieStore.setMovieUpdate('movie_id', movie.movie_id);
        movieStore.setMovieUpdate('korea_title', movie.korea_title);
        movieStore.setMovieUpdate('english_title', movie.english_title);
        movieStore.setMovieUpdate('thema', movie.thema);
        movieStore.setMovieUpdate('thema', movie.movie);
        movieStore.setMovieUpdate('thema', movie.subtitle);
    }

    return (
        <>
            <AdminPageTitle>콘텐츠 관리</AdminPageTitle>
            <SearchField
                type="text"
                name="keyword"
                onChange={onChangeKeyword}
                placeholder="영화명을 입력해 주세요. (한글, 영어 가능)"
                onKeyDown={handleKeyDown} />
            <ButtonsContainer>
                <MovieNum>총 영화수 <ColorOrange>{movieList.count}</ColorOrange></MovieNum>
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
                    {movieList.movie_list.map((k) => (
                        <MovieInfo key={k.movie_idx}>
                            <MovieName>{k.korea_title}</MovieName>
                            <ReleaseYear>{k.release_date.slice(0, 4)}</ReleaseYear>
                            <MovieGrade>{k.movie_grade === '18' ? <Grade18>18</Grade18> :
                                k.movie_grade === '12' ? <Grade12>12</Grade12> :
                                    k.movie_grade === '15' ? <Grade15>15</Grade15> :
                                        k.movie_grade === '' ? <ColorGray>없음</ColorGray> :
                                            <GradeAll>ALL</GradeAll>}</MovieGrade>
                            <InfoEdit><EditBtn onClick={() => onClickMovieOne(k)}>수정</EditBtn></InfoEdit>
                            <InfoDelete><DeleteBtn>삭제</DeleteBtn></InfoDelete>
                            <InformationMatch>{k.synchro === '1' ? <ColorGreen>일치</ColorGreen> : <ColorRed>불일치</ColorRed>}</InformationMatch>
                        </MovieInfo>
                    ))}
                </MovieContainer_Content>
            </MovieContainer>
            <Pagings>
                <PaginationPrev>이전</PaginationPrev>
                <PaginationNum>1 &#160;&#160;2 &#160;&#160;3 &#160;&#160;4 &#160;&#160;5</PaginationNum>
                <PaginationNext>다음</PaginationNext>
            </Pagings>
        </>
    )
})

export default MovieManagePage;
