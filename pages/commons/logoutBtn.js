// 로그아웃 버튼 (공통) - 다현

"use client"

import { useRouter } from "next/navigation";
import { LogoutButton } from "../../styles/commons/commonsCSS";
import { useContext } from "react";
import { AdminContext } from "../../stores/StoreContext";
import { observer } from "mobx-react-lite";

const LogoutBtn = observer(() => {
    const adminStore = useContext(AdminContext)
    const router = useRouter();

    const onClickLogout = () => {
        if (confirm("로그아웃을 하시겠습니까?")) {
            router.push('/')
            adminStore.setToken("");
            adminStore.setName("");
        } else {
            alert("로그아웃이 취소되었습니다.")
        }
    }

    return (
        <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
    )
})

export default LogoutBtn;