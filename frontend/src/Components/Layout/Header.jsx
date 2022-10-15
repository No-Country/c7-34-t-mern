import { TbGridDots } from "react-icons/tb"

function Header({ title }) {
  return (
    <header className="flex justify-between gap-8 py-10 px-6 max-h-60 fixed top-0 left-20 z-10">
      <aside className="flex items-center gap-1">
        <TbGridDots size="1.5rem" />
        <h2 className="font-general font-semibold text-big_title">{title}</h2>
      </aside>
      <aside>
        <span>j</span>
        <span>j</span>
        <span>j</span>
      </aside>
      <aside></aside>
    </header>
  )
}
export default Header
