const Input = ({ label, id, name, value, onChange, error }) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>

      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
          />
          <p className="error">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Input;
