import { makeAutoObservable } from "mobx";

class UserStore {
    keyword = ''; /* 검색어 */
    user_id = ''; /* 회원 아이디 */

    constructor() {
        makeAutoObservable(this);
    }

    // 회원 리스트 검색어
    setKeyword(keyword) {
        this.keyword = keyword;
    }

    // 회원 아이디
    setUserId(user_id) {
        this.user_id = user_id;
    }
}

export default new UserStore();