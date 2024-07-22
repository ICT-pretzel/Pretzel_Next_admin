// 영화 추가 페이지 - 영화 정보 입력

"use client";

import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { LoginContext, MovieContext } from "../../../../stores/StoreContext";
import { AddBtn, Genre, InputContainer, InputContainer_inner, InputContent, InputTitle, MovieUpload, SelectGenre } from "../../../../styles/movieAddCSS";
import axios from "axios";
import { useRouter } from "next/navigation";

const MovieAddInput = observer(() => {
    const loginStore = useContext(LoginContext)
    const movieStore = useContext(MovieContext)
    const router = useRouter();

    /* 영화 정보 */
    const onChangeInfo = (e) => {
        if (e.target.name === "movie" || e.target.name === "subtitle") {
            movieStore.setMovieInfo(e.target.name, e.target.files[0]);
        } else {
            movieStore.setMovieInfo(e.target.name, e.target.value);
        }
    }

    // axios 서버로 정보 보내기
    const API_URL = "/movie/"

    async function insert_movie() {
        if (movieStore.movieInfo.movie_id === "" ||
            movieStore.movieInfo.korea_title === "" ||
            movieStore.movieInfo.english_title === "" ||
            movieStore.movieInfo.movie === null ||
            movieStore.movieInfo.subtitle === null
        ) {
            alert("모든 정보를 입력해 주세요.")
        } else {
            try {
                // FormData 객체 생성 및 파일 추가
                const formData = new FormData();
                formData.append('movie', movieStore.movieInfo.movie);
                formData.append('subtitle', movieStore.movieInfo.subtitle);

                const response = await axios.post(API_URL + "insert_movie", formData, {
                    params: {
                        movie_id: movieStore.movieInfo.movie_id,
                        korea_title: movieStore.movieInfo.korea_title,
                        english_title: movieStore.movieInfo.english_title,
                        thema: movieStore.movieInfo.thema
                    },
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (response.data === 1) {
                    alert("영화 추가가 완료되었습니다.")
                    router.push("/main/movieManage/movieManagePage")
                    movieStore.keyword("")
                } else {
                    alert("추가에 실패했습니다.\n다시 시도해 주세요.")
                }
            } catch (error) {
                console.error('영화 추가 실패 : ', error)
            }
        }
    }

    return (
        <>
            <InputContainer>
                <InputContainer_inner>
                    <InputTitle>한글 제목</InputTitle>
                    <InputContent
                        type="text"
                        name="korea_title"
                        onChange={onChangeInfo}
                        placeholder="한글 제목을 입력해 주세요."
                        required />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>영어 제목</InputTitle>
                    <InputContent
                        type="text"
                        name="english_title"
                        onChange={onChangeInfo}
                        placeholder="영어 제목을 입력해 주세요."
                        required />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>장르 선택</InputTitle>
                    <SelectGenre name="thema" onChange={onChangeInfo} required>
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
                    <MovieUpload type="file" name="movie" onChange={onChangeInfo} required />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>자막 업로드</InputTitle>
                    <MovieUpload type="file" name="subtitle" onChange={onChangeInfo} required />
                </InputContainer_inner>
            </InputContainer>

            <AddBtn onClick={insert_movie}>추가하기</AddBtn>
        </>
    )
})

export default MovieAddInput;