import {useContext, useEffect, useState} from "react";
import {ActiveSectionContext} from "../context/activeSectionContext.js";
import {useSelector} from "react-redux";

export default function ElementMenuItem({children, id, clickFunction, status}) {

  let activeSection = useContext(ActiveSectionContext)
  const tasks = useSelector((state) => state.tasks);
  const [counterTask, setCounterTask] = useState(0)

  useEffect(() => {
    if (status === 'all') {
      const counter = tasks.filter(elem => elem.status !== 'delete').length
      setCounterTask(counter);
    } else {
      const counter = tasks.filter(elem => elem.status === status).length
      setCounterTask(counter);
    }

  }, [tasks])

  return (
    <div
      onClick={() => clickFunction(id)}
      className={`text-blue-500 text-lg cursor-pointer duration-300 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:rounded-lg ${activeSection === id ? 'before:w-full' : 'before:w-0'} before:h-[2px] before:bg-blue-500 hover:before:w-full before:duration-300`}>
      {children} {`(${counterTask})`}
    </div>
  )
}
