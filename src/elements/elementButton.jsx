export default function ElementButton({children, color, clickFunction}) {
  return (
    <button type="button"
            onClick={clickFunction}
            className={`text-white ${color === 'blue' ? 'bg-blue-500' : 'bg-red-500'} duration-300 hover:opacity-70 font-medium rounded-lg text-md px-5 py-2`}>
      <div className='flex items-center gap-2'>
        {children}
      </div>
    </button>
  )
}
