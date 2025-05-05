import { Outlet } from "react-router-dom";
import Header, { AuthHeader } from "./Header";
import SideBar from "./Sidebar";

export function MarkettingAppLayout() {
  
  return (
    <div className="min-h-screen">
      <Header toggles={true} cart={true}/>
      <main className="max-xl:px-3 xl:px-3 xl:pr-24 lg:pr-18 max-xl:py-5 lg:flex lg:gap-32 mt-[5.5rem]">
        <SideBar />
        <div className="w-full lg:flex lg:justify-end">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export function AuthAppLayout() {
  return(
    <div>
      <AuthHeader/>
      <main className="w-full lg:w-[50%] lg:h-max lg:m-auto">
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
