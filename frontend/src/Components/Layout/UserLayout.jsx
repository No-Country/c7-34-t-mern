import { Header, Sidebar } from ".."

function UserLayout({ children }) {
  return (
    <div className="bg-indigo-100 flex">
      <Header title={"Dashboard"} />
      <Sidebar />
      {children}
    </div>
  )
}
export default UserLayout
