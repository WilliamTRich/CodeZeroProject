//Imports
import { findInputError, isFormInvalid } from '../utils';
import { useFormContext } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const FormInput = ({ name, label, type, id, placeholder, validation }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className={'flex flex-col gap-1 w-2/3'}>
      <div className={'flex justify-between'}>
        <label htmlFor={id} className={'text-primary text-xl font-semibold'}>
          {label}
        </label>
        {isInvalid && <p className={'text-red-400 self-end'}>{inputErrors.error.message}</p>}
      </div>
      {id === 'confirmPassword' ? (
        <input
          className={
            'bg-accent text-accent-extralight caret-primary focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight text-sm rounded-lg w-full p-2'
          }
          id={id}
          type={type}
          placeholder={placeholder}
          {...register('confirmPassword', {
            required: 'Confirm Password is required.',
            validate: (val) => {
              if (watch('password') !== val) {
                return 'Your passwords do no match';
              }
            },
          })}
        />
      ) : (
        <input
          className={
            'bg-accent text-accent-extralight caret-primary focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight text-sm rounded-lg w-full p-2'
          }
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

export default FormInput;
