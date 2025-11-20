
function Button({text}) {
  return (
    <div>
      <button className='border border-white text-white text-xl font-semibold rounded-full px-14 py-2 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer'>{text}</button>
    </div>
  )
}

export default Button