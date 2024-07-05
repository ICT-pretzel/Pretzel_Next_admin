import { makeAutoObservable } from "mobx";

class ReportStore {
    report_idx = '';


    constructor() {
        makeAutoObservable(this);
    }

    // 문의 고유 아이디
    setReportIdx(report_idx) {
        this.report_idx = report_idx;
    }
}

export default new ReportStore();