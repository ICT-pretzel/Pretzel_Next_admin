// 영화 추가 페이지 - 영화 정보 입력

"use client";

import { useContext } from "react";
import { Genre, InputContainer, InputContainer_inner, InputContent, InputTitle, MovieUpload, SelectGenre } from "../../styles/movieAddCSS";

import { observer } from "mobx-react-lite";
import { MovieContext } from "../../stores/StoreContext";

const MovieAddInput = observer(() => {

    const movieStore = useContext(MovieContext)

    /* 영화 정보 */
    const onChangeInfo = (e) => {
        movieStore.setMovieInfo({
            ...movieStore.movieInfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <InputContainer>
                <InputContainer_inner>
                    <InputTitle>TMDB 원제목</InputTitle>
                    <OriginalContent>불량공주 모모코</OriginalContent>
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>한글 제목</InputTitle>
                    <InputContent type="text" name="korea_title" onChange={onChangeInfo} placeholder="한글 제목을 입력해 주세요." />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>영어 제목</InputTitle>
                    <InputContent type="text" name="english_title" onChange={onChangeInfo} placeholder="영어 제목을 입력해 주세요." />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>장르 선택</InputTitle>
                    <SelectGenre name="thema" onChange={onChangeInfo}>
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
                    <MovieUpload type="file" name="movie" onChange={onChangeInfo} />
                </InputContainer_inner>
                <InputContainer_inner>
                    <InputTitle>자막 업로드</InputTitle>
                    <MovieUpload type="file" name="subtitle" onChange={onChangeInfo} />
                </InputContainer_inner>
            </InputContainer>
        </>
    )
})

export default MovieAddInput;