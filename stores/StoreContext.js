import React from "react";
import adminStore from "./adminStore";
import movieStore from "./movieStore";
import reportStore from "./reportStore";
import qnaStore from "./QnAStore";
import userStore from "./userStore";
import loginStore from "./loginStore";

// React Context 생성
export const AdminContext = React.createContext(adminStore);
export const MovieContext = React.createContext(movieStore);
export const QnaContext = React.createContext(qnaStore);
export const ReportContext = React.createContext(reportStore);
export const UserContext = React.createContext(userStore);
export const LoginContext = React.createContext(loginStore);

// Context Provider 컴포넌트 생성
// 개별 Context Provider 컴포넌트 생성
export const AdminProvider = ({ children }) => (
    <AdminContext.Provider value={adminStore}>
        {children}
    </AdminContext.Provider>
);

export const MovieProvider = ({ children }) => (
    <MovieContext.Provider value={movieStore}>
        {children}
    </MovieContext.Provider>
);

export const QnaProvider = ({ children }) => (
    <QnaContext.Provider value={qnaStore}>
        {children}
    </QnaContext.Provider>
);

export const ReportProvider = ({ children }) => (
    <ReportContext.Provider value={reportStore}>
        {children}
    </ReportContext.Provider>
);

export const UserProvider = ({ children }) => (
    <UserContext.Provider value={userStore}>
        {children}
    </UserContext.Provider>
);
export const LoginProvider = ({ children }) => (
    <LoginContext.Provider value={loginStore}>
        {children}
    </LoginContext.Provider>
);

