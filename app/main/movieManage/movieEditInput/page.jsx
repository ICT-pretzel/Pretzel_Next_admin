// 영화 추가 페이지 - 영화 정보 입력

"use client";

import { useContext } from "react";
import { EditBtn, Genre, InputContainer, InputContainer_inner, InputContent, InputTitle, MovieUpload, OriginalContent, SelectGenre } from "../../styles/movieAddCSS";

import { observer } from "mobx-react-lite";
import { AdminContext, MovieContext } from "../../stores/StoreContext";
import axios from "axios";

const MovieEditInput = observer(() => {

    const adminStore = useContext(AdminContext)
    const movieStore = useContext(MovieContext)

    /* 영화 수정 정보 */
    const onChangeInfo = (e) => {
        if (e.target.name === "movie" || e.target.name === "subtitle") {
            movieStore.setMovieUpdate(e.target.name, e.target.files[0]);
        } else {
            movieStore.setMovieUpdate(e.target.name, e.target.value);
        }
    }

    // axios 서버로 정보 보내기
    const API_URL = "/movie/"

    async function update_movie() {
        try {
            // FormData 객체 생성 및 파일 추가
            const formData = new FormData();
            formData.append('movie', movieStore.movieUpdate.movie);
            formData.append('subtitle', movieStore.movieUpdate.subtitle);

            const response = await axios.post(API_URL + "update_movie", formData, {
                params: {
                    movie_id: movieStore.movieUpdate.movie_id,
                    korea_title: movieStore.movieUpdate.korea_title,
                    english_title: movieStore.movieUpdate.english_title,
                    thema: movieStore.movieUpdate.thema,
                    movie_idx: movieStore.movieUpdate.movie_idx
                    },
                headers: {
                    Authorization: `Bearer ${adminStore.token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error('영화 추가 실패 : ', error)
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
                        defaultValue={movieStore.movieUpdate.korea_title} />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>영어 제목</InputTitle>
                    <InputContent
                        type="text"
                        name="english_title"
                        onChange={onChangeInfo}
                        placeholder="영어 제목을 입력해 주세요."
                        defaultValue={movieStore.movieUpdate.english_title} />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>장르 선택</InputTitle>
                    <SelectGenre name="thema" onChange={onChangeInfo} defaultValue={movieStore.movieUpdate.thema}>
                        <Genre value="공포">공포</Genre>
                        <Genre value="범죄/스릴러">범죄/스릴러</Genre>
                        <Genre value="액션">액션</Genre>
                        <Genre value="로맨스">로맨스</Genre>
                        <Genre value="코믹">코믹</Genre>
                        <Genre value="애니메이션">애니메이션</Genre>
                    </SelectGenre>
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>영화 업로드</InputTitle>
                    <MovieUpload type="file" name="movie" onChange={onChangeInfo} />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>자막 업로드</InputTitle>
                    <MovieUpload type="file" name="subtitle" onChange={onChangeInfo} />
                </InputContainer_inner>
            </InputContainer>

            <EditBtn onClick={update_movie}>수정하기</EditBtn>
        </>
    )
})

export default MovieEditInput;