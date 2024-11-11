export default function ElementFormInput({id, type, placeholder, value, setValue, label}) {
  return (
    <div className="mb-6">
      <label htmlFor={id}
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input type={type} id={id} value={value} onChange={(e) => setValue(e.target.value)}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
             placeholder={placeholder} required
      />
    </div>
  )
}
