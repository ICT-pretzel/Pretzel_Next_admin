import React from "react";
import adminStore from "./adminStore";
import movieStore from "./movieStore";

// React Context 생성
export const AdminContext = React.createContext(adminStore);
export const MovieContext = React.createContext(movieStore);

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
        </>
    )
}