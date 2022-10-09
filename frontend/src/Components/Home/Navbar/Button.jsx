function Button({ children }) {
  return (
    <button className="bg-primary-base text-white py-2 px-6 rounded hover:bg-primary-darker duration-500">
      {children}
    </button>
  )
}

export default Button
