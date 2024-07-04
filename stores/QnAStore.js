import { makeAutoObservable } from "mobx";

class QnaStore {
    question_idx = '11'; /* 고유 아이디 */
    answer = ''; /* 답변 */

    constructor() {
        makeAutoObservable(this);
    }

    // 문의 고유 아이디
    setQusetionIdx(question_idx) {
        this.question_idx = question_idx;
    }

    // 답변 작성
    setAnswer(answer) {
        this.answer = answer;
    }
}

export default new QnaStore();