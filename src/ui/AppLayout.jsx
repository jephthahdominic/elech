import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  
  return (
    <div>
      <Header toggles={true} cart={true}/>
      <main className="px-3 py-5">
        <Outlet />
      </main>
    </div>
  )
}
