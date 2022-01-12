import { Outlet } from "react-router-dom"
import NavigationBar from "./NavigationBar"

export default function MainLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  )
}
