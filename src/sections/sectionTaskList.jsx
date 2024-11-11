import ElementMenu from "../elements/elementMenu.jsx";
import {useState} from "react";
import {ActiveSectionContext} from "../context/activeSectionContext.js";
import ElementTasksList from "../elements/elementTasksList.jsx";

export default function SectionTaskList() {

  const [activeSection, setActiveSection] = useState(0);

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      <section className='bg-blue-200 rounded-lg px-6 lg:px-32 py-6 lg:py-12'>
        <ElementMenu
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <ElementTasksList/>
      </section>
    </ActiveSectionContext.Provider>
  )
}
