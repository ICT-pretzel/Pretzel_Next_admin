import { makeAutoObservable } from "mobx";

class AdminStore {
    // 관리자 정보
    adminInfo = {
        admin_id: '',
        name: '',
        pwd: '',
        role: '0',
        note: '',
        status: '1'
    };

    constructor() {
        makeAutoObservable(this);
    }

    // 관리자 정보 변경
    setAdminInfo(k, v) {
        this.adminInfo[k] = v;
    }

}

export default new AdminStore();