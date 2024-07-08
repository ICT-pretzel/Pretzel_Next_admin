// 로그아웃 버튼 (공통) - 다현

"use client"

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { LogoutButton } from "../../../../styles/commons/commonsCSS";
import { AdminContext, LoginContext } from "../../../../stores/StoreContext";
import LoadingSpinner from "../../../loadingSpinner/page";

const LogoutBtn = observer(() => {
    const loginStore = useContext(LoginContext)
    const router = useRouter();

    const onClickLogout = () => {
        if (confirm("로그아웃을 하시겠습니까?")) {
            loginStore.setToken("","","","");
            router.push('/adminLoginPage')
            return <LoadingSpinner />;
        } else {
            alert("로그아웃이 취소되었습니다.")
        }
    }

    return (
        <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
    )
})

export default LogoutBtn;