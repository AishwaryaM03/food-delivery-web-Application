import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const ContextValue = {

    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.childern}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider