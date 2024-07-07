"use client"

// 공통 css 적용
import '../styles/commons/reset.css'
import '../styles/commons/font.css'
import '../styles/commons/commons.css'
import AdminLoginPage from '../pages/adminLoginPage';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AdminContext } from '../stores/StoreContext';

const Home = observer(() => {
  const adminStore = useContext(AdminContext)
  console.log("asdfsdf",adminStore.token);
  return (
    <>
      <AdminLoginPage />
    </>
  )
})
export default Home;
