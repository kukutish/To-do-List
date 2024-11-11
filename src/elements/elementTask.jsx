import DeleteSvg from "../svg/deleteSvg.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {taskDeletedForever, updateStatus} from "../parts/TasksSlice.js";
import ReturnSvg from "../svg/returnSvg.jsx";

export default function ElementTask({id, task}) {

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(task.status === 'done');

  function handleChange() {
    if (task.status === 'delete') return;

    setChecked(!checked);
    const newStatus = checked ? 'active' : 'done';
    dispatch(updateStatus({id, newStatus}));
  }

  function deleteTask() {
    if (task.status === 'delete') {
      dispatch(taskDeletedForever({id}));
      return;
    }
    dispatch(updateStatus({id, newStatus: 'delete'}));
  }

  function returnTask() {
    dispatch(updateStatus({id, newStatus: 'active'}));
  }

  return (
    <div
      className={`flex justify-between bg-white gap-4 px-6 py-4 rounded-lg ${task.status === 'done' ? 'text-gray-500' : task.status === 'delete' ? 'text-red-500' : 'text-blue-500'}`}>
      <div className="flex items-center gap-4">
        <input id={id} type="checkbox" checked={checked} onChange={handleChange}
               className={`w-5 h-5 text-red-500 bg-gray-100 border-gray-300 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:shadow-none rounded cursor-pointer ${task.status === 'delete' && 'hidden'}`}/>
        <label htmlFor={id} className={`text-md font-medium ${task.status !== 'delete' && 'cursor-pointer'}`}>
          {task.text}
        </label>
      </div>
      <div className='flex gap-4'>
        {
          task.status === 'delete' && <div className='text-blue-500 cursor-pointer' onClick={returnTask}>
            <ReturnSvg/>
          </div>
        }
        <div className='cursor-pointer' onClick={deleteTask}>
          <DeleteSvg/>
        </div>
      </div>

    </div>
  )
}
