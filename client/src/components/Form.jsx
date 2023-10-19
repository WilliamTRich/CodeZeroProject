//Imports
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

//Components
import {
  firstname_validation,
  lastname_validation,
  email_validation,
  password_validation,
  confirmPassword_validation,
} from '../utils/inputValidations.js';
import FormInput from './FormInput.jsx';

const Form = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleSubmit, method, userType, errorState } = props;
  const [errors] = errorState;
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(({ firstname, lastname, email, password }) => {
    const user = { firstName: firstname, lastName: lastname, email, password };
    handleSubmit(user);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete={'off'}
        className={'flex flex-col h-4/5 w-2/5 gap-4 border-highlight border-4 justify-center items-center rounded-2xl'}
      >
        <h1 className={'text-primary text-5xl font-bold'}>{method}</h1>
        {errors && <p className={'text-red-400'}>{errors[0]}</p>}
        {method === 'Register' ? (
          <>
            <FormInput {...firstname_validation} />
            <FormInput {...lastname_validation} />
          </>
        ) : (
          ''
        )}
        <FormInput {...email_validation} />
        <FormInput {...password_validation} />
        {method === 'Register' ? (
          <>
            <FormInput {...confirmPassword_validation} />
          </>
        ) : (
          ''
        )}
        <button
          className={
            'px-6 py-2 mt-4 text-3xl bg-highlight text-background border-background border-2 hover:bg-secondary hover:text-primary'
          }
          onClick={onSubmit}
        >
          {method}
        </button>
        {method === 'Register' ? (
          <p className={'text-primary text-xl'}>
            Already have an account?{' '}
            <a
              onClick={() => navigate(`/${userType}-login`)}
              className={'text-secondary underline hover:cursor-pointer hover:text-blue-500'}
            >
              Login
            </a>
          </p>
        ) : (
          <p className={'text-primary text-xl'}>
            Need an Account?{' '}
            <a
              onClick={() => navigate(`/${userType}-register`)}
              className={'text-secondary underline hover:cursor-pointer hover:text-blue-500'}
            >
              Register
            </a>
          </p>
        )}
      </form>
    </FormProvider>
  );
};

export default Form;
