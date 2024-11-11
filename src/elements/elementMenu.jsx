import ElementMenuItem from "./elementMenuItem.jsx";

export default function ElementMenu({setActiveSection}) {

  return (
    <div className='flex flex-col lg:flex-row gap-4 justify-between mb-12 items-start'>
      <ElementMenuItem id={0} clickFunction={setActiveSection} status='active'>
        Текущие дела
      </ElementMenuItem>
      <ElementMenuItem id={1} clickFunction={setActiveSection} status='all'>
        Все дела
      </ElementMenuItem>
      <ElementMenuItem id={2} clickFunction={setActiveSection} status='done'>
        Выполненные дела
      </ElementMenuItem>
      <ElementMenuItem id={3} clickFunction={setActiveSection} status='delete'>
        Корзина
      </ElementMenuItem>
    </div>
  )
}
