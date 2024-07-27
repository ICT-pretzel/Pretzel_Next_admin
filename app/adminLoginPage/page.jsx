"use client";

import '../../styles/commons/reset.css'
import '../../styles/commons/font.css'
import '../../styles/commons/commons.css'

import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AdminContext, LoginContext } from '../../stores/StoreContext';
import LoadingSpinner from '../loadingSpinner/page';
import { Container, Id, Login_Button, Login_Container, Login_Title, PasswordInput } from '../../styles/adminLoginCSS';

const AdminLoginPage = observer(() => {
    const router = useRouter();
    const adminStore = useContext(AdminContext);
    const loginStore = useContext(LoginContext);
    
    
    // 비밀번호 가시성 여부
    const [showPassword, setShowPassword] = useState(false);

    // 비밀번호 가시성 여부 토글
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    // 아이디
    const onChangeId = (e) => {
        adminStore.setAdminId(e.target.value);
    }

    // 비번
    const onChangePwd = (e) => {
        adminStore.setPwd(e.target.value);
    }

    const API_URL = "/main/"

    // 관리자 로그인 function
    async function admin_login() {
        if (adminStore.admin_id === '' && adminStore.pwd === '') {
            alert("아이디와 비밀번호를 입력해 주세요.")
        } else if (adminStore.admin_id === '') {
            alert("아이디를 입력해 주세요.")
        } else if (adminStore.pwd === '') {
            alert("비밀번호를 입력해 주세요.")
        } else {
            try {
                const response = await axios.post(API_URL + "admin_login", {
                    admin_id: adminStore.admin_id,
                    pwd: adminStore.pwd
                });
               
                if (response.data.success) {
                    adminStore.setAdminId("");
                    adminStore.setPwd("");
                    loginStore.setToken(response.data.token, response.data.userDetails.admin_id, response.data.userDetails.name, response.data.userDetails.role)
                    router.push('/main/')
                } else {
                    alert("존재하지 않는 관리자입니다. \r\n아이디나 비밀번호를 다시 입력해주세요.")
                    adminStore.setAdminId("");
                    adminStore.setPwd("");
                }
            } catch (error) {
                console.error('관리자 로그인 실패 : ', error);
                alert("존재하지 않는 관리자입니다. \r\n아이디나 비밀번호를 다시 입력해주세요.")
                adminStore.setAdminId("");
                adminStore.setPwd("");
            }
        }
    }

    // 엔터키 감지
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            admin_login();
        }
    }

    return (
        <>
            <Container>
                <Login_Container>
                    <Login_Title>관리자 로그인</Login_Title>
                    <Id
                        type="text"
                        placeholder='아이디를 입력해 주세요'
                        onChange={onChangeId}
                        value={adminStore.admin_id}
                        onKeyDown={handleKeyDown} />
                    <PasswordInput
                        placeholder='비밀번호를 입력해 주세요'
                        onChange={onChangePwd}
                        value={adminStore.pwd}
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility} 
                        onKeyDown={handleKeyDown} />
                    <Login_Button onClick={admin_login}>로그인</Login_Button>
                </Login_Container>
            </Container>
        </>
    );
})

export default AdminLoginPage;