// 영화 관리 페이지

"use client";

import { observer } from "mobx-react-lite";
import { ColorGray, ColorGreen, ColorOrange, ColorRed } from "../../styles/commons/commonsCSS";
import { useContext, useEffect, useState } from "react";
import { AdminContext, MovieContext } from "../../stores/StoreContext";
import axios from "axios";
import LoadingSpinner from "../commons/loadingSpinner";
import Layout from "../commonLayout";
import { useRouter } from "next/navigation";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { Buttons, ButtonsContainer, DeleteBtn, EditBtn, Grade12, Grade15, Grade18, GradeAll, InfoDelete, InfoEdit, InformationMatch, MovieAddBtn, MovieContainer, MovieContainer_Content, MovieGrade, MovieInfo, MovieInfo_Title, MovieName, MovieNum, ReleaseYear, SynchroBtn } from "../../styles/movieManageCSS";
import { SearchField } from "../../styles/userManageCSS";

const MovieManagePage = observer(() => {
    const adminStore = useContext(AdminContext)
    const movieStore = useContext(MovieContext)
    const router = useRouter();

    // 영화 리스트
    const [movieList, setMovieList] = useState({ count: 0, movie_list: [] });

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        list_movie()
    }, []);

    const API_URL = "/movie/"

    // 영화 리스트 보여주는 function
    async function list_movie() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

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
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
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
    const onClickEdit = (movie) => {
        movieStore.setMovieUpdate('movie_idx', movie.movie_idx);
        movieStore.setMovieUpdate('movie_id', movie.movie_id);
        movieStore.setMovieUpdate('tmdb_title', movie.tmdb_title);
        movieStore.setMovieUpdate('korea_title', movie.korea_title);
        movieStore.setMovieUpdate('english_title', movie.english_title);
        movieStore.setMovieUpdate('thema', movie.thema);
        movieStore.setMovieUpdate('movie', movie.movie);
        movieStore.setMovieUpdate('subtitle', movie.subtitle);

        movieStore.setQuery(movie.tmdb_title)
        router.push('/movieManage/movieEditPage')
    }

    // 영화 추가 버튼 클릭 시
    const onClickAddMovie = () => {
        router.push('/movieManage/movieAddPage')
    }

    // 영화 삭제하는 function
    async function delete_movie(movie) {
        movieStore.setMovieUpdate('movie_idx', movie.movie_idx);
        movieStore.setMovieUpdate('korea_title', movie.korea_title);
        console.log(movieStore.movieUpdate.movie_idx)
        if (confirm(movieStore.movieUpdate.korea_title + "을(를) 삭제하시겠습니까?")) {
            try {
                const response = await axios.get(API_URL + "delete_movie", {
                    params: {
                        movie_idx: movieStore.movieUpdate.movie_idx
                    },
                    headers: {
                        Authorization: `Bearer ${adminStore.token}`
                    }
                });
                console.log(response.data)
                if (response.data == '1') {
                    alert("콘텐츠가 정상적으로 삭제되었습니다.")
                    // 영화 리스트 보여주는 function 재실행
                    list_movie();
                } else {
                    alert("콘텐츠를 삭제하지 못했습니다. 다시 한 번 시도해 주세요.")
                }
            } catch (error) {
                console.error('영화 삭제 실패 : ', error)
            }
        } else {
            alert("콘텐츠 삭제가 취소되었습니다.")
        }
    }

    return (
        <>
            <Layout>
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
                        <MovieAddBtn onClick={onClickAddMovie}>영화 추가</MovieAddBtn>
                        {/* 동기화 버튼 구현은 나중에 */}
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
                                <InfoEdit><EditBtn onClick={() => onClickEdit(k)}>수정</EditBtn></InfoEdit>
                                <InfoDelete><DeleteBtn onClick={() => delete_movie(k)}>삭제</DeleteBtn></InfoDelete>
                                <InformationMatch>{k.synchro === '1' ? <ColorGreen>일치</ColorGreen> : <ColorRed>불일치</ColorRed>}</InformationMatch>
                            </MovieInfo>
                        ))}
                    </MovieContainer_Content>
                </MovieContainer>
            </Layout>
        </>
    )
})

export default MovieManagePage;
