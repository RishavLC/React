import { createContext, useContext, useState } from "react"
const GlobalStateContext = createContext();

export const GlobalStateProvider=({children})=>{

    const [data, setData] = useState([]);//state banako
    const [name, setName] = useState("rishav");//state banako

    return(
        <GlobalStateContext.Provider value={{data, setData, name, setName}}>{children}</GlobalStateContext.Provider>
    )
}
export const useGlobalState =() => useContext(GlobalStateContext)