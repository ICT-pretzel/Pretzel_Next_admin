import { makeAutoObservable } from "mobx";

class AdminStore {
    // 관리자 정보
    adminInfo = {
        admin_id: '',
        name: '',
        pwd: '',
        role: '0',
        note: '',
        status: '1',
    };

    // 아이디
    admin_id = '';

    // 비밀번호
    pwd = '';

    // 관리자 이름
    name = '';

    // 토큰
    token = '';

    constructor() {
        makeAutoObservable(this);
    }

    // 관리자 정보 변경
    setAdminInfo(k, v) {
        this.adminInfo[k] = v;
    }

    // 로그인 - 아이디
    setAdminId(admin_id) {
        this.admin_id = admin_id;
    }

    // 로그인 - 비밀번호
    setPwd(pwd) {
        this.pwd = pwd;
    }
    
    // 로그인 - 이름
    setName(name) {
        this.name = name;
    }

    // 로그인 - 토큰
    setToken(token){
        this.token = token;
    }

}

export default new AdminStore();