import ElementTask from "./elementTask.jsx";
import {useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import {ActiveSectionContext} from "../context/activeSectionContext.js";

export default function ElementTasksList(){

  const tasks = useSelector((state) => state.tasks);
  let activeSection = useContext(ActiveSectionContext);
  const [taskElements, setTaskElements] = useState([]);

  const getFilteredTasks = (status) => {
    return tasks
      .filter((elem) => {
        if (status === 'active') return elem.status === 'active';
        if (status === 'all') return elem.status !== 'delete';
        if (status === 'done') return elem.status === 'done';
        if (status === 'delete') return elem.status === 'delete';
        return true;
      })
      .map((elem) => <ElementTask key={elem.id} id={elem.id} task={elem} />);
  };

  useEffect(() => {
    const sectionMap = {
      0: 'active',
      1: 'all',
      2: 'done',
      3: 'delete',
    };

    setTaskElements(getFilteredTasks(sectionMap[activeSection]));
  }, [activeSection, tasks]);

  return (
    <div className='flex flex-col gap-4'>
      {taskElements.length === 0 ? (
        <div className='text-gray-500'>Сейчас список пуст.</div>
      ) : (
        taskElements
      )}
    </div>
  );
}
