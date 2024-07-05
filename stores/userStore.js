import { makeAutoObservable } from "mobx";

class UserStore {

    constructor() {
        makeAutoObservable(this);
    }

    // 문의 고유 아이디
    setQusetionIdx(question_idx) {
        this.question_idx = question_idx;
    }
}

export default new UserStore();