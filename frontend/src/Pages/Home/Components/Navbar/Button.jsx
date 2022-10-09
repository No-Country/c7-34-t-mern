function Button({ children }) {
  return (
    <button className="bg-primary-darker text-white py-2 px-6 rounded md:ml-8 hover:bg-primary-dye duration-500">
      {children}
    </button>
  )
}

export default Button
