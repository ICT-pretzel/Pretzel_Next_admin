import React from "react";
import adminStore from "./adminStore";
import movieStore from "./movieStore";
import qnaStore from "./qnaStore";

// React Context 생성
export const AdminContext = React.createContext(adminStore);
export const MovieContext = React.createContext(movieStore);
export const QnaContext = React.createContext(qnaStore);

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
        </>
    )
}