import { Outlet } from "react-router-dom";
import Header, { AuthHeader } from "./Header";
import SideBar from "./Sidebar";

export function MarkettingAppLayout() {
  
  return (
    <div>
      <Header toggles={true} cart={true}/>
      <SideBar />
      <main className="px-3 py-5">
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
    <div>
      <Header toggles={true} noSearchBar={true}/>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
