import { makeAutoObservable } from "mobx";

class ReportStore {
    report_idx = '';

    status = '';


    constructor() {
        makeAutoObservable(this);
    }

    // 문의 고유 아이디
    setReportIdx(report_idx) {
        this.report_idx = report_idx;
    }

    // 문의 고유 아이디
    setStatus(status) {
        this.status = status;
    }
}

export default new ReportStore();