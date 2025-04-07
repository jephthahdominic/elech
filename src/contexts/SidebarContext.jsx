import { createContext, useContext, useState } from "react";

const SideBarContext = createContext();

function SideBarProvider({children}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <SideBarContext.Provider value={{
            isSidebarOpen, setIsSidebarOpen
        }}>
            {children}
        </SideBarContext.Provider>
    )

}

function useSidebar(){
    const context = useContext(SideBarContext);
    if(!context){
        console.log("You cannot use a context outside its provider")
    }
    return context
}

export{SideBarProvider, useSidebar}