export default function ElementInputAddTask({setTextTask, textTask}) {
  return (
    <div className='w-[250px] sm:w-[350px]'>
      <input type="text" id="add"
             value={textTask}
             onChange={(e) => setTextTask(e.target.value)}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:shadow-none block w-full p-2.5"
             placeholder="Новая задача..." required/>
    </div>
  )
}
