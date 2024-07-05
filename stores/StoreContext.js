import React from "react";
import adminStore from "./adminStore";
import movieStore from "./movieStore";
import qnaStore from "./qnaStore";
import reportStore from "./reportStore";
import userStore from "./userStore";

// React Context 생성
export const AdminContext = React.createContext(adminStore);
export const MovieContext = React.createContext(movieStore);
export const QnaContext = React.createContext(qnaStore);
export const ReportContext = React.createContext(reportStore);
export const UserContext = React.createContext(userStore);

// Context Provider 컴포넌트 생성 
export const StoreProvider = ({children}) =>{
    return (
        <>
            <AdminContext.Provider value={adminStore}>
                {children}
            </AdminContext.Provider>
            <MovieContext.Provider value={movieStore}>
                {children}
            </MovieContext.Provider>
            <QnaContext.Provider value={qnaStore}>
                {children}
            </QnaContext.Provider>
            <ReportContext.Provider value={reportStore}>
                {children}
            </ReportContext.Provider>
            <UserContext.Provider value={userStore}>
                {children}
            </UserContext.Provider>
        </>
    )
}