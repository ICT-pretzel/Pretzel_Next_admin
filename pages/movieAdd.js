// 영화 추가 페이지 (영화 관리 페이지) - 다현

"use client";

import { useState } from "react";
import { AdminPageTitle } from "../styles/adminCommonCSS";
import { AddBtn, CheckIcon, Genre, InputContainer, InputContainer_inner, InputContent, InputTitle, Keyword, MovieContainer, MoviePoster, MovieTitle, MovieUpload, OneMovieContainer, OriginalContent, ReleaseYear, SearchBtn, SearchContainer, SearchContainer_inner, SearchTitle, SelectGenre } from "../styles/movieAddCSS";
import axios from "axios";

const MovieAdd = () => {

    const [query, setQuery] = useState('');
    const [year, setYear] = useState('');
    const API_URL = "/movie/search"

    async function search(){
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
    const handleQuery = (e) =>{
        setQuery(e.target.value);
    }
    const handleYear = (e) =>{
        setYear(e.target.value);
    }
    return (
        <>
            <AdminPageTitle>콘텐츠 추가</AdminPageTitle>
            <SearchContainer>
                <SearchContainer_inner>
                    <SearchTitle>제목</SearchTitle>
                    <Keyword type="text" onChange={handleQuery} placeholder="영화 제목을 입력해 주세요." />
                </SearchContainer_inner>
                <SearchContainer_inner>
                    <SearchTitle>개봉년도</SearchTitle>
                    <Keyword type="text" onChange={handleYear} placeholder="개봉년도를 입력해 주세요." />
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

            <InputContainer>
                <InputContainer_inner>
                    <InputTitle>TMDB 원제목</InputTitle>
                    <OriginalContent>불량공주 모모코</OriginalContent>
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>한글 제목</InputTitle>
                    <InputContent type="text" placeholder="한글 제목을 입력해 주세요." />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>영어 제목</InputTitle>
                    <InputContent type="text" placeholder="영어 제목을 입력해 주세요." />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>장르 선택</InputTitle>
                    <SelectGenre>
                        <Genre>공포</Genre>
                        <Genre>범죄/스릴러</Genre>
                        <Genre>액션</Genre>
                        <Genre>로맨스</Genre>
                        <Genre>코믹</Genre>
                        <Genre>애니메이션</Genre>
                    </SelectGenre>
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>영화 업로드</InputTitle>
                    <MovieUpload type="file" />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>자막 업로드</InputTitle>
                    <MovieUpload type="file" />
                </InputContainer_inner>
            </InputContainer>

            <AddBtn>추가하기</AddBtn>
        </>
    )
}

export default MovieAdd;