import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({children,store})=>{
const {dispatch,getState} =store;
const value = {dispatch,getState}
    return (<AppContextProvider value={value}>
        {children}
    </AppContextProvider>)
}
export {AppContextProvider};