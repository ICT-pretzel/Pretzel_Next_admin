"use client"

// 공통 css 적용
import '../styles/commons/reset.css'
import '../styles/commons/font.css'
import '../styles/commons/commons.css'
import DashboardPage from '../pages/dashboard/dashboardPage';
import AdminLoginPage from '../pages/adminLoginPage';


export default function Home() {
  return (
    <>
      <AdminLoginPage />
    </>
  );
}
