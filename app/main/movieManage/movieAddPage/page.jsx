// 영화 추가 페이지

"use client";

import { useContext, useState } from "react";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { CheckIcon, Keyword, MovieContainer, MoviePoster, MovieTitle, NoSearchResult, OneMovieContainer, ReleaseYear, SearchBtn, SearchContainer, SearchContainer_inner, SearchTitle } from "../../styles/movieAddCSS";

import { observer } from "mobx-react-lite";
import { MovieContext } from "../../stores/StoreContext";
import MovieAddInput from "../movieAddInput/page";
import axios from "axios";
import Layout from "../commonLayout";

const MovieAddPage = observer(() => {
    const movieStore = useContext(MovieContext)

    // 영화 검색 - 검색어, 개봉년도
    const onChangeQuery = (e) => {
        movieStore.setQuery(e.target.value)
    }

    const onChangeYear = (e) => {
        movieStore.setYear(e.target.value)
    }

    // 검색한 리스트와 검색 여부 상태
    const [searchList, setSearchList] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    // 영화 클릭시
    const onClickMovie = (movie_id) => {
        movieStore.setMovieInfo("movie_id", movie_id);
    }

    const API_URL = "/movie/"

    // 검색 function
    async function search() {
        try {
            const response = await axios.get(API_URL + "search", {
                params: {
                    query: movieStore.query,
                    year: movieStore.year
                }
            });

            setHasSearched(true); // 검색 여부 true

            if (response.data.results.length > 0) {
                setSearchList(response.data.results);
            } else {
                setSearchList([])
            }
        } catch (error) {
            console.error('검색 실패 : ', error)
            movieStore.setQuery("");
            movieStore.setYear("");
        }
    }

    // 검색 결과 여부 보여주는 function
    function search_result() {
        if (hasSearched && searchList.length === 0) {
            return <NoSearchResult>검색 결과가 없습니다.</NoSearchResult>
        } else if (searchList.length > 0) {
            return (
                <>
                    {searchList.map((movie) => (
                        <OneMovieContainer key={movie.id} onClick={() => onClickMovie(movie.id)}>
                            {/* 선택된 영화일 경우, 체크된 아이콘을 표시하고 선택되지 않은 경우에는 기본 아이콘을 표시 */}
                            <CheckIcon src={movieStore.movieInfo.movie_id === movie.id ? "/images/icons/check_checked.png" : "/images/icons/check_basic.png"} />
                            <MoviePoster src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                            <ReleaseYear>{movie.release_date.slice(0, 4)}</ReleaseYear>
                            <MovieTitle>{movie.original_title}</MovieTitle>
                        </OneMovieContainer>
                    ))}
                </>
            );
        }
        return null;
    }

    return (
        <>
            <Layout>
                <AdminPageTitle>콘텐츠 추가</AdminPageTitle>
                <SearchContainer>
                    <SearchContainer_inner>
                        <SearchTitle>제목</SearchTitle>
                        <Keyword type="text" name="query" onChange={onChangeQuery} placeholder="영화 제목을 입력해 주세요." />
                    </SearchContainer_inner>
                    <SearchContainer_inner>
                        <SearchTitle>개봉년도</SearchTitle>
                        <Keyword
                            type="text"
                            name="year"
                            onChange={onChangeYear}
                            maxLength="4"
                            // \d : 숫자(0-9)를 의미 | {4} : 4번 반복됨을 의미 */
                            pattern="\d{4}"
                            title="4자리 숫자를 입력해 주세요."
                            placeholder="개봉년도를 입력해 주세요. (YYYY)" />
                    </SearchContainer_inner>
                </SearchContainer>
                <SearchBtn onClick={search}>검색</SearchBtn>

                <MovieContainer>
                    {search_result()}
                </MovieContainer>

                {/* 영화 정보 입력 */}
                <MovieAddInput />
            </Layout>
        </>
    )
})

export default MovieAddPage;