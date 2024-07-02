import { makeAutoObservable } from "mobx";

class AdminStore {

    // 관리자 정보
    adminInfo = {
        admin_id: '',
        name: '',
        pwd: '',
        role: '0',
        note: '',
        status: ''
    };

    constructor() {
        // MobX 스토어를 자동으로 관찰 가능하게 설정
        makeAutoObservable(this);
    }

    // 관리자 정보 변경
    setAdminInfo(adminInfo) {
        this.adminInfo = adminInfo;
    }

}

export default new AdminStore();