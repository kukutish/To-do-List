import SectionHeader from "./sections/sectionHeader.jsx";
import SectionTaskList from "./sections/sectionTaskList.jsx";

export default function ToDoList() {
  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <SectionHeader/>
        <SectionTaskList/>
      </div>
    </div>
  )
}
