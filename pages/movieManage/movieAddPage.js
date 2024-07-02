// 영화 추가 페이지

"use client";

import { useContext } from "react";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { AddBtn, CheckIcon, Keyword, MovieContainer, MoviePoster, MovieTitle, OneMovieContainer, ReleaseYear, SearchBtn, SearchContainer, SearchContainer_inner, SearchTitle } from "../../styles/movieAddCSS";

import { observer } from "mobx-react-lite";
import { MovieContext } from "../../stores/StoreContext";
import MovieAddInput from "./movieAddInput";
import axios from "axios";

const MovieAddPage = observer(() => {

    const movieStore = useContext(MovieContext)
    
    /* 영화 검색 */
    const onChangeQuery = (e) => {
        movieStore.setMovieQuery(e.target.value)
    }

    const onChangeYear = (e) => {
        movieStore.setMovieYear(e.target.value)
    }

    const API_URL = "/movie/search"

    async function search() {
        try {
            // axios 서버로 정보 보내기
            const response = await axios.get("http://localhost:8090/movie/search", {
                params: {
                    query: query,
                    year: year
                }
            });
            console.log(response)
            console.log(response.data)

            // token 토큰을 로컬 스토리지에 저장
        } catch (error) {
            console.error('로그인 실패 : ', error)
            setQuery("");
            setYear("")
        }
    }

    return (
        <>
            <AdminPageTitle>콘텐츠 추가</AdminPageTitle>
            <SearchContainer>
                <SearchContainer_inner>
                    <SearchTitle>제목</SearchTitle>
                    <Keyword type="text" name="query" onChange={onChangeQuery} placeholder="영화 제목을 입력해 주세요." />
                </SearchContainer_inner>
                <SearchContainer_inner>
                    <SearchTitle>개봉년도</SearchTitle>
                    <Keyword type="text" name="year" onChange={onChangeYear} placeholder="개봉년도를 입력해 주세요." />
                </SearchContainer_inner>
            </SearchContainer>
            <SearchBtn onClick={search}>검색</SearchBtn>

            <MovieContainer>
                <OneMovieContainer>
                    <CheckIcon src="/images/icons/check_checked.png" />
                    <MoviePoster src='/images/samples/moviePoster.jpg' />
                    <ReleaseYear>2004</ReleaseYear>
                    <MovieTitle>불량공주 모모코</MovieTitle>
                </OneMovieContainer>
                <OneMovieContainer>
                    <CheckIcon src="/images/icons/check_basic.png" />
                    <MoviePoster src='/images/samples/moviePoster.jpg' />
                    <ReleaseYear>2004</ReleaseYear>
                    <MovieTitle>불량공주 모모코</MovieTitle>
                </OneMovieContainer>
                <OneMovieContainer>
                    <CheckIcon src="/images/icons/check_basic.png" />
                    <MoviePoster src='/images/samples/moviePoster.jpg' />
                    <ReleaseYear>2004</ReleaseYear>
                    <MovieTitle>불량공주 모모코</MovieTitle>
                </OneMovieContainer>
            </MovieContainer>

            {/* 영화 정보 입력 */}
            <MovieAddInput />

            <AddBtn>추가하기</AddBtn>
        </>
    )
})

export default MovieAddPage;