import { Outlet } from "react-router-dom";
import Header from "./Header";

export function MarkettingAppLayout() {
  
  return (
    <div>
      <Header toggles={true} cart={true}/>
      <main className="px-3 py-5">
        <Outlet />
      </main>
    </div>
  )
}

export function AuthAppLayout() {
  return(
    <div>
      <Header />
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
      <main>
        <Outlet />
      </main>
    </div>
  )
}
