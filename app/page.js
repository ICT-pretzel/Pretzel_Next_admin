"use client"

// 공통 css 적용
import '../styles/commons/reset.css'
import '../styles/commons/font.css'
import '../styles/commons/commons.css'
import AdminManagePage from '../pages/adminManage/adminManagePage';
import AdminAddPage from '../pages/adminManage/adminAddPage';
import MovieManagePage from '../pages/movieManage/movieManagePage';


export default function Home() {
  return (
    <>
      <MovieManagePage />
    </>
  );
}
