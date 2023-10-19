//Imports

const FormInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor, type, placeholder, value } = props;
  const [user, setUser] = value;
  return (
    <div className={'flex flex-col gap-4 w-2/3'}>
      <label htmlFor={htmlFor} className={'text-3xl text-highlight'}>
        {placeholder}
      </label>
      <input
        type={type}
        className={
          'bg-accent text-gray-900 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight text-sm rounded-lg w-full p-2.5'
        }
        placeholder={placeholder}
        value={user[htmlFor]}
        onChange={(e) => setUser({ [htmlFor]: e.target.value })}
      />
    </div>
  );
};

export default FormInput;
