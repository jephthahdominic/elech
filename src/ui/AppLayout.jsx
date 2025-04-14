import { Outlet } from "react-router-dom";
import Header, { AuthHeader } from "./Header";
import SideBar from "./Sidebar";

export function MarkettingAppLayout() {
  
  return (
    <div className="min-h-screen">
      <Header toggles={true} cart={true}/>
      <main className="max-xl:px-3 max-xl:py-5 xl:flex xl:gap-28 mt-[4.5rem]">
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
    <div className="h-screen">
      <Header toggles={true} noSearchBar={true}/>
      <SideBar />
      <main className="mt-[4.5rem]">
        <Outlet />
      </main>
    </div>
  )
}
