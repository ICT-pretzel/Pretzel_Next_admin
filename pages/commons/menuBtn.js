// 메뉴 버튼

"use client";

import { MenuIcon } from "../../styles/commons/commonsCSS";

const MenuBtn = ({ toggleSideNav }) => {
    return (
        <MenuIcon onClick={toggleSideNav} src="/images/icons/menu.png" />
    )
}

export default MenuBtn;