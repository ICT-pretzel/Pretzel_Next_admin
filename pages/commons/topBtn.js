// 탑버튼 (공통) - 다현

"use client";

import { useState, useEffect } from "react";
import { Icon24px, TopButton } from "../../styles/commons/commonsCSS";

const TopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollFunction = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    return (
        <TopButton onClick={scrollToTop} style={{ display: isVisible ? "block" : "none" }}>
            <Icon24px src="/images/icons/ArrowUp.png" />
        </TopButton>
    );
}

export default TopBtn;
