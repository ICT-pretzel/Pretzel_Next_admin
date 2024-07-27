import { makeAutoObservable } from "mobx";

class LoginStore {
    // 관리자 정보
    admin_id= '';
    name='';
    role='0';
    
    // 토큰
    token = '';
    constructor() {
        makeAutoObservable(this);
    }
    // 관리자 정보 변경
    setAdmin_id(admin_id){
        this.admin_id = admin_id;
    }
    setName(name){
        this.name = name;
    }
    setRole(role){
        this.role = role;
    }

    // 로그인 - 토큰
    setToken(token, admin_id, name, role){
            this.token = token;
            this.admin_id = admin_id;
            this.name = name;
            this.role = role;
        if (token != "") {
            localStorage.setItem("token", token);
            localStorage.setItem("admin_id", admin_id);
            localStorage.setItem("name", name);
            localStorage.setItem("role", role);
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("admin_id");
            localStorage.removeItem("name");
            localStorage.removeItem("role");
        }
    }

}

export default new LoginStore();