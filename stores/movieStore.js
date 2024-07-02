import { makeAutoObservable } from "mobx";

class MovieStore {
    
    query =  ''; /* 검색어 */
    year = ''; /* 개봉년도 */

    movieInfo = {
        movie_id: '',
        korea_title: '', /* 한국어 제목 */
        english_title: '', /* 영어 제목 */
        thema: '', /* 장르 */
        movie: null, /* 영화 파일 */
        subtitle: null /* 자막 파일 */
    };

    constructor() {
        // MobX 스토어를 자동으로 관찰 가능하게 설정
        makeAutoObservable(this);
    }
    
    // 영화 검색
    setMovieQuery(query){
        this.query = query;
    }

    // 영화 검색 (개봉년도)
    setMovieYear(year){
        this.year = year;
    }

    // 영화 정보
    setMovieInfo(movieInfo) {
        this.movieInfo = movieInfo;
    }

}

export default new MovieStore();