import { Outlet } from "react-router-dom";
import Header, { AuthHeader } from "./Header";
import SideBar from "./Sidebar";

export function MarkettingAppLayout() {
  
  return (
    <div className="max-h-screen">
      <Header toggles={true} cart={true}/>
      <main className="h-full max-xl:px-3 max-xl:py-5 xl:flex xl:gap-28">
        <SideBar />
        <Outlet />
      </main>
    </div>
  )
}

export function AuthAppLayout() {
  return(
    <div>
      <AuthHeader/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export function OrderLayout(){
  return(
    <div className="max-h-screen">
      <Header toggles={true} noSearchBar={true}/>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
