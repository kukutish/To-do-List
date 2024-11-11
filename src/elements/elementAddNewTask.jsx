import ElementInputAddTask from "./elementInputAddTask.jsx";
import ElementButton from "./elementButton.jsx";
import AddSvg from "../svg/addSvg.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {taskAdded} from "../parts/TasksSlice.js";
import {nanoid} from "@reduxjs/toolkit";

export default function ElementAddNewTask() {

  const [textTask, setTextTask] = useState('')

  const dispatch = useDispatch();

  function addTask() {
    if (textTask) {
      dispatch(
        taskAdded({
          id: nanoid(),
          text: textTask,
          status: 'active',
        })
      )
      setTextTask('')
    }
  }


  return (
    <div className='flex flex-col gap-4 items-start lg:flex-row'>
      <ElementInputAddTask
        textTask={textTask}
        setTextTask={setTextTask}
      />
      <ElementButton color='blue' clickFunction={addTask}>
        Добавить
        <AddSvg/>
      </ElementButton>
    </div>
  )
}
