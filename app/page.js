"use client"

// 공통 css 적용
import '../styles/commons/reset.css'
import '../styles/commons/font.css'
import '../styles/commons/commons.css'

import SideNav from '../pages/commons/sideNav';
import SynthesisPage from '../pages/synthesisPage';
import TopBtn from '../pages/commons/topBtn';
import LogoutBtn from '../pages/commons/logoutBtn';


export default function Home() {
  return (
    <>
      <SideNav />
      <SynthesisPage />
      <TopBtn />
      <LogoutBtn />
      {/* SideNav가 없어졌을 때
      <Align_Center>
        <UserDetail />
      </Align_Center> */}
    </>
  );
}
