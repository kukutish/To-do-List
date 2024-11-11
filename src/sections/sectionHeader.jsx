import ElementButton from "../elements/elementButton.jsx";
import DeleteSvg from "../svg/deleteSvg.jsx";
import ElementAddNewTask from "../elements/elementAddNewTask.jsx";
import {useDispatch} from "react-redux";
import {tasksDeleted} from "../parts/TasksSlice.js";

export default function SectionHeader() {

  const dispatch = useDispatch();

  function deleteAll() {
    dispatch(tasksDeleted())
  }

  return (
    <section className='bg-blue-200 rounded-lg p-6 flex flex-col gap-4 items-start lg:flex-row justify-between mb-10'>
      <ElementAddNewTask/>
      <ElementButton color='red' clickFunction={deleteAll}>
        Очистить список
        <DeleteSvg size={5}/>
      </ElementButton>
    </section>
  )
}
