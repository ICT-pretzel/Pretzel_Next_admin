import { makeAutoObservable } from "mobx";

class MovieStore {
    query = ''; /* 콘텐츠 추가 페이지 - 검색어 */
    year = ''; /* 콘텐츠 추가 페이지 - 개봉년도 */

    keyword = ''; /* 콘텐츠 관리 페이지 - 검색어 */

    // 영화 정보
    movieInfo = {
        movie_idx: '', /* 고유 아이디 */
        movie_id: '', /* 영화 아이디 */
        korea_title: '', /* 한국어 제목 */
        english_title: '', /* 영어 제목 */
        thema: '', /* 장르 */
        movie: null, /* 영화 파일 */
        subtitle: null /* 자막 파일 */
    };

    // 영화 정보를 수정하기 위한 정보
    movieUpdate = {
        movie_idx: '', /* 고유 아이디 */
        movie_id: '', /* 영화 아이디 */
        korea_title: '', /* 한국어 제목 */
        english_title: '', /* 영어 제목 */
        thema: '', /* 장르 */
        movie: null, /* 영화 파일 */
        subtitle: null /* 자막 파일 */
    };

    constructor() {
        makeAutoObservable(this);
    }

    // 콘텐츠 추가 페이지 - 영화 검색
    setQuery(query) {
        this.query = query;
    }

    // 콘텐츠 추가 페이지 - 영화 검색 (개봉년도)
    setYear(year) {
        this.year = year;
    }

    // 콘텐츠 관리 페이지 - 영화 검색
    setKeyword(keyword) {
        this.keyword = keyword;
    }

    // 영화 정보 변경
    setMovieInfo(k, v) {
        this.movieInfo[k] = v;
    }

    // 영화 수정
    setMovieUpdate(k, v) {
        this.movieUpdate[k] = v;
    }

}

export default new MovieStore();